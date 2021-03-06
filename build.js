/**
 *   Compile JS files using Closure-Compiler service
 */
var http = require('http');
var fs = require('fs');
var querystring = require('querystring');

var hashes = ['p2peg', 'lib/sha1', 'lib/sha265', 'lib/sha512', 'lib/base64', 'lib/crypto_hash'];

var dir = __dirname;

if ( !fs.existsSync(dir += '/dist') ) {
    fs.mkdir(dir)
}
if ( !fs.existsSync(dir += '/lib') ) {
    fs.mkdir(dir)
}

hashes.forEach(function (name) {
    var filename = __dirname + '/' + name + '.js';
    compileFile(filename, function (err, data) {
        if (err) {
            return console.error(err);
        }
        if ( data ) {
            var filename = __dirname + '/dist/' + name + '.js';
            fs.writeFile(filename, data.trim(), function (err) {
                if (err) throw err;
                console.log("\x1b[32m%s\x1b[0m", filename);
            })
        }
    });
});

// Helpers
function compileFile(filename, cb) {
    fs.readFile(
      filename
      , { encoding: 'utf-8' }
      , function (err, data) { err ? cb(err) : compile(data, cb) }
    );
}

function compile(script, cb) {
    var options = {
        output_info: 'compiled_code'
      , output_format: 'text'
      , compilation_level: 'SIMPLE_OPTIMIZATIONS'
      , warning_level: 'QUIET'
      , js_code: script
    };

    var data = querystring.stringify(options);

    var req = http.request({
      hostname: 'closure-compiler.appspot.com'
      , port: 80
      , path: '/compile'
      , method: 'POST'
      , headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(data)
      }
    }, function(res) {
      // console.log('STATUS: ' + res.statusCode);
      var body = [];
      res.setEncoding('utf8');
      res.on('data', function (chunk) { body.push(chunk) });
      res.on('end', function () { cb(null, body = body.join(''), res) });
    });

    req.on('error', cb);

    req.write(data);
    req.end();
}

