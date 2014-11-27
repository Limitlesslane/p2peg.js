(function(I,p,v,h,J,q,s){var K=J.prototype.hasOwnProperty,y=s.round(4*s.log(256)/s.log(10)),L="undefined"!=typeof module&&module.exports&&"undefined"!==typeof exports&&p.exports!==exports,n="undefined"!==typeof performance&&performance.now?performance:void 0,z="undefined"!==typeof process&&process.hrtime?process:null,t=n?function(){return n.now()}:typeof q.now!==v?function(){return(new q).getTime()}:function(){return q.now()},O=z?function(){return process.hrtime()[1]}:n?function(){return(1E3*n.now()|
0)%1E6}:function(){return t()%1E3},E=z?function(d){return d?process.hrtime(d):process.hrtime()}:function(d){var k=t()/1E3,h=k|0,k=[h,1E9*(k-h)];d&&(k[0]-=d[0],k[1]-=d[1],0>k[1]&&(--k[0],k[1]+=1E9));return k},F=E();t();var G=L?require("crypto"):void 0;(typeof define==v&&define.amd?define:function(d){return"undefined"!=typeof module&&module.exports?function(h,r){module.exports=r(d,module)}:function(h,r){p[I]=r(d)}}(typeof require==v?require:function(d){return p[d.split("/").pop()]}))(["require","module",
"./lib/sha1","./lib/sha512","./lib/base64"],function(d,k,r,n,A){r||(r=d("./lib/sha1"));n||(n=d("./lib/sha512"));A||(A=d("./lib/base64"));var p=function(a,c){var b=n(a);return c?H(b):b},g=function(a){var c,b,f,e=this;e.setSecret=function(a){var e=h(a).length;if(64<e){a=r(a);if(a===FALSE)return a;a=H(a);e=strlen($key)}if(64>e){var e=64,f=l(0),e=e>>>0,d=e-a.length,g;if(0<d){null==f&&(f=" ");g=f.length;for(d=1+d/g>>0;d--;)a+=f;d=a.length;a=e<d?a.substr(0,e):_(a)}}else a=a+substr(0,-1)+l(0);c=B(C(l(92),
64),a);b=B(C(l(54),64),a)};e.seed=function(a){a=e.state()+h(a)+e.dynEntropy();a=e.hash(a,!0);f=B(f,a);return a};e.state=function(){return f};e.hash=function(a,e){void 0===e&&(e=!0);a=b+a;return p(c+p(b+a,!0),e)};void 0==a&&(a="!8L_JlACt:5!R9}~>yb!gPP=|(ao/&-Z");e.setSecret(a);e.seedSys=e.isServer()};d=g.prototype;g.version="0.3.0";g.displayName=I;g.debug=function(){};var q;g.instance=function(a){q||(q=new g(a));return q};d.constructor=g;d.setSecret=void 0;d.seed=void 0;d.hash=p;d.str=function(a){};
d.hex=function(a){a=this.str(void 0!=a?a/2:void 0);return M(a)};d.text=function(a){var c=void 0!=a?z(3*a/4):void 0,c=N(this.str(c));void 0!=a&&c.length>a&&(c=c.substr(0,a));return c};d.int16=function(){return this["int"](2)};d.int32=function(){return this["int"](4)};d["int"]=function(a){a=void 0!=a?a:4;for(var c=this.str(a),b=0;a--;)b=b<<8|c.charCodeAt(a);return b};d.dynEntropy=function(){var a={};a[m(O())]="micronow";a[w(s.random())]="rand";var c=E(F);a[w(c.join("."))]="delta";return a=u(a).join("")};
d.serverEntropy=function(){var a=this._serverEntropy;if(void 0==a){var c=0,b,a={};a[w(F.join("."))]="start";a[D("0.3.0")]="ver";if("undefined"!=typeof navigator&&navigator){var f=navigator;a[f.userAgent||f.appVersion]=++c;if(b=f.productSub)a[b]=++c;if(b=f.languages)a[b]=++c;(b=f.plugins)&&b.length&&x(b,function(b,f){a[f.description]=++c;a[f.name]=++c;a[f.filename]=++c})}if("undefined"!=typeof document){if(b=document.cookie)a[b]=++c;if(b=document.doctype)a[b]=++c;if(b=document.domain)a[b]=++c;if(b=
document.location)a[b.href]=++c}c&&(a[w(E(F).join("."))]=1,c=this.hash(u(a).join(""),!0),a={},a[c]="client",c=1);if("undefined"!=typeof process){if(b=process.arch)a[b]=++c;if(b=process.platform)a[b]=++c;if(b=process.pid)a[m(b)]=++c;if(b=process.uptime&&process.uptime())a[m(b)]=++c;if(b=process.getgid&&process.getgid())a[m(b)]=++c;if(b=process.getuid&&process.getuid())a[m(b)]=++c;if(b=process.version)a[D(b.slice(1))]=++c;(b=process.versions)&&x(b,function(b,f){a[D(f)]=++c})}G&&G.randomBytes&&(a[G.randomBytes(32)]=
++c);this._serverEntropy=a=u(a).join("")}return a};d.rand32=function(){for(var a=this.rs_w,c=this.rs_z;!a||1179647999==a;)a=this.int32()^this.int32();for(;!c||2422800383==c;)c=this.int32()^this.int32();c=36969*(c&65535)+(c>>16);this.rs_w=a=18E3*(a&65535)+(a>>16);this.rs_z=c;return(c<<16)+a};d.saveState=function(a){};d.isServer=function(){return L};d.seedSys=!0;d.rs_z=0;d.rs_w=0;var C=function(a,c){for(var b="";0<c--;)b+=a;return b},t=s.floor,z=s.ceil,l=h.fromCharCode;"function"==typeof l.bind&&(l=
l.bind(h));var x=function(a,c){if(!a)return a;var b,f,e;if(a instanceof Array||"number"===typeof a.length&&typeof a!=v)for(b=0,e=a.length>>>0;b<e;b++){if(K.call(a,b)&&(f=a[b],!1===c.call(f,b,f,a)))return b}else for(b in a)if(K.call(a,b)&&(f=a[b],!1===c.call(f,b,f,a)))return b;return a},u=J.keys;typeof u!==v&&(u=function(a){var c=[];x(a,function(a,f){c.push(a)});return c});var M=function(a,c){for(var b="",f=0,e=a.length,d;f<e;f++)d=a.charCodeAt(f),16>d&&(b+="0"),b+=d.toString(16);return b},H=function(a){for(var c=
[],b=0,f=a.length,e,d;b<f;b+=2){e=parseInt(a.substr(b,1),16);d=parseInt(a.substr(b+1,1),16);if(isNaN(e)||isNaN(d))return!1;c.push(e<<4|d)}return l.apply(h,c)},N=function(a){return A.byteUrlEncode(a)},B=function(a,c){var b=a?h(a):"",f=c?h(c):"",e=b.length,d=f.length,g=[];if(e!=d){if(!e||!d)return b+f;d<e?(f=C(f,t(e/d)).b.substr(0,e%d),d=e):b=C(b,t(d/e)).a.substr(0,d%e)}for(e=0;e<d;e++)g[e]=b.charCodeAt(e)^f.charCodeAt(e);return l.apply(h,g)},D=function(a){a=h(a).split(".");for(var c=[],b=a.length,
d=0,e,g;d<b;d++)g=parseInt(a[d]),isNaN(g)?e=!0:c.push(g&255);return e&&0==c.length?!1:c=l.apply(h,c)},m=function c(b){var d=[];if("string"===typeof b){b=b.replace(/^[0.]+/,"");if(b.length>y){for(var e=0,g=b.length;e<g;e+=y)d.push(c(b.substr(e,y)|0));return d.join("")}b=parseInt(b);if(isNaN(b))return!1}if(2147483648<b)return c(b&16777215)+c((b/=16777216)&16777215)+c(b/16777216|0);for(e=0>b?-1:0;b!=e;)d.push(b&255),b>>=8;return d=l.apply(h,d)},w=function(c){var b=h(c).split(".");return 2==b.length?
m(b[1]+b[0])+m(b[1].length):m(c)};g.bin2hex=M;g.hex2bin=H;g.bin2text=N;g.text2bin=function(c){return A.byteUrlDecode(c)};g.strxor=B;g.packInt=m;g.packFloat=w;g.packIP4=D;g.chr=l;g.keys=u;g.isEmpty=function(c){var b=!0;x(c,function(){return b=!1});return b};g.each=x;g.INT_SIGN_BIT=2147483648;g.MAX_INT=2147483647;g.INT_LEN=y;g.INT_SIZE=4;return g})})("P2PEG","undefined"==typeof global?this:global,"function",String,Object,Date,Math);