(function(w,y,x,z){("function"===typeof define&&define.amd?define:"undefined"!=typeof module&&module.exports?function(d,m){module.exports=m()}:function(d,m){y[w]=m()})([],function(){var d=function(d,g){return d<<g|d>>>32-g},m=function(d){for(var g=7,h,a="";0<=g;g--)h=d>>>4*g&15,a+=h.toString(16);return a},w=/[^\x00-\xFF]/,q=function(q,g){var h,a,k=new z(80),r=1732584193,s=4023233417,t=2562383102,u=271733878,v=3285377520,b,c,e,f,l,n;b=x(q);c=b.length;var p=[];void 0==g&&(g=!w.test(b));g||(b=unescape(encodeURIComponent(b)));
for(a=0;a<c-3;a+=4)h=b.charCodeAt(a)<<24|b.charCodeAt(a+1)<<16|b.charCodeAt(a+2)<<8|b.charCodeAt(a+3),p.push(h);switch(c%4){case 0:a=2147483648;break;case 1:a=b.charCodeAt(c-1)<<24|8388608;break;case 2:a=b.charCodeAt(c-2)<<24|b.charCodeAt(c-1)<<16|32768;break;case 3:a=b.charCodeAt(c-3)<<24|b.charCodeAt(c-2)<<16|b.charCodeAt(c-1)<<8|128}for(p.push(a);14!=p.length%16;)p.push(0);p.push(c>>>29);p.push(c<<3&4294967295);for(h=0;h<p.length;h+=16){for(a=0;16>a;a++)k[a]=p[h+a];for(a=16;79>=a;a++)k[a]=d(k[a-
3]^k[a-8]^k[a-14]^k[a-16],1);b=r;c=s;e=t;f=u;l=v;for(a=0;19>=a;a++)n=d(b,5)+(c&e|~c&f)+l+k[a]+1518500249&4294967295,l=f,f=e,e=d(c,30),c=b,b=n;for(a=20;39>=a;a++)n=d(b,5)+(c^e^f)+l+k[a]+1859775393&4294967295,l=f,f=e,e=d(c,30),c=b,b=n;for(a=40;59>=a;a++)n=d(b,5)+(c&e|c&f|e&f)+l+k[a]+2400959708&4294967295,l=f,f=e,e=d(c,30),c=b,b=n;for(a=60;79>=a;a++)n=d(b,5)+(c^e^f)+l+k[a]+3395469782&4294967295,l=f,f=e,e=d(c,30),c=b,b=n;r=r+b&4294967295;s=s+c&4294967295;t=t+e&4294967295;u=u+f&4294967295;v=v+l&4294967295}a=
m(r)+m(s)+m(t)+m(u)+m(v);return a=a.toLowerCase()};q._proto_=x.prototype.sha1=function(d){return q(this,d)};return q})})("sha1",this,String,Array);