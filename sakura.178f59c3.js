parcelRequire=function(I,N,J,O){function n(k,p){function B(C){return n(B.resolve(C))}function K(C){return I[k][1][C]||C}if(!N[k]){if(!I[k]){var T="function"===typeof parcelRequire&&parcelRequire;if(!p&&T)return T(k,!0);if(A)return A(k,!0);if(x&&"string"===typeof k)return x(k);p=Error("Cannot find module '"+k+"'");p.code="MODULE_NOT_FOUND";throw p;}B.resolve=K;B.cache={};p=N[k]=new n.Module(k);I[k][0].call(p.exports,B,p,p.exports,this)}return N[k].exports}var A="function"===typeof parcelRequire&&parcelRequire,
x="function"===typeof require&&require;n.isParcelRequire=!0;n.Module=function(k){this.id=k;this.bundle=n;this.exports={}};n.modules=I;n.cache=N;n.parent=A;n.register=function(k,p){I[k]=[function(B,K){K.exports=p},{}]};for(var L,P=0;P<J.length;P++)try{n(J[P])}catch(k){L||(L=k)}if(J.length){var D=n(J[J.length-1]);"object"===typeof exports&&"undefined"!==typeof module?module.exports=D:"function"===typeof define&&define.amd?define(function(){return D}):O&&(this[O]=D)}parcelRequire=n;if(L)throw L;return n}({sxca:[function(I,
N,J){function O(a,c){a=b.createShader(a);b.shaderSource(a,c);b.compileShader(a);return b.getShaderParameter(a,b.COMPILE_STATUS)?a:(c=b.getShaderInfoLog(a),b.deleteShader(a),console.error(c),null)}function n(a,c,e,f){a=O(b.VERTEX_SHADER,a);var d=O(b.FRAGMENT_SHADER,c);if(null==a||null==d)return null;c=b.createProgram();b.attachShader(c,a);b.attachShader(c,d);b.deleteShader(a);b.deleteShader(d);b.linkProgram(c);if(!b.getProgramParameter(c,b.LINK_STATUS))return f=b.getProgramInfoLog(c),console.error(f),
null;if(e)for(c.uniforms={},a=0;a<e.length;a++)c.uniforms[e[a]]=b.getUniformLocation(c,e[a]);if(f)for(c.attributes={},a=0;a<f.length;a++)e=f[a],c.attributes[e]=b.getAttribLocation(c,e);return c}function A(a){b.useProgram(a);for(var c in a.attributes)b.enableVertexAttribArray(a.attributes[c])}function x(a){for(var c in a.attributes)b.disableVertexAttribArray(a.attributes[c]);b.useProgram(null)}function L(){h=l.create(20,20,20);h.x=h.y*g.aspect;M.x=10;M.y=h.z;M.z=.1;for(var a=2*Math.PI,c=l.create(0,
0,0),e=0,f=function(){return 2*Math.random()-1},d=0;d<q;d++){var r=E[d];c.x=.3*f()+.8;c.y=.2*f()-1;c.z=.3*f()+.5;l.normalize(c);e=2+1*Math.random();r.setVelocity(c.x*e,c.y*e,c.z*e);r.setRotation(f()*a*.5,f()*a*.5,f()*a*.5);r.setPosition(f()*h.x,f()*h.y,f()*h.z);r.setEulerAngles(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2);r.setSize(.9+.1*Math.random())}}function P(){for(var a=2*Math.PI,c=function(t,u,Y){Math.abs(t.position[u])-.5*t.size>Y&&(t.position[u]=0<t.position[u]?
t.position[u]-2*Y:t.position[u]+2*Y)},e=function(t,u){t.euler[u]%=a;0>t.euler[u]&&(t.euler[u]+=a)},f=0;f<q;f++){var d=E[f];d.update(y.delta,y.elapsed);c(d,0,h.x);c(d,1,h.y);c(d,2,h.z);e(d,0);e(d,1);e(d,2);d.alpha=1;d.zkey=v.matrix[2]*d.position[0]+v.matrix[6]*d.position[1]+v.matrix[10]*d.position[2]+v.matrix[14]}E.sort(function(t,u){return t.zkey-u.zkey});c=U;e=V;var r=W;for(f=0;f<q;f++)d=E[f],w[c]=d.position[0],w[c+1]=d.position[1],w[c+2]=d.position[2],c+=3,w[e]=d.euler[0],w[e+1]=d.euler[1],w[e+
2]=d.euler[2],e+=3,w[r]=d.size,w[r+1]=d.alpha,r+=2;b.enable(b.BLEND);b.blendFunc(b.SRC_ALPHA,b.ONE_MINUS_SRC_ALPHA);d=Q;A(d);b.uniformMatrix4fv(d.uniforms.uProjection,!1,F.matrix);b.uniformMatrix4fv(d.uniforms.uModelview,!1,v.matrix);b.uniform3fv(d.uniforms.uResolution,g.array);b.uniform3fv(d.uniforms.uDOF,l.arrayForm(v.dof));b.uniform3fv(d.uniforms.uFade,l.arrayForm(M));b.bindBuffer(b.ARRAY_BUFFER,X);b.bufferData(b.ARRAY_BUFFER,w,b.DYNAMIC_DRAW);b.vertexAttribPointer(d.attributes.aPosition,3,b.FLOAT,
!1,0,U*Float32Array.BYTES_PER_ELEMENT);b.vertexAttribPointer(d.attributes.aEuler,3,b.FLOAT,!1,0,V*Float32Array.BYTES_PER_ELEMENT);b.vertexAttribPointer(d.attributes.aMisc,2,b.FLOAT,!1,0,W*Float32Array.BYTES_PER_ELEMENT);for(f=1;2>f;f++)c=-2*f,m[0]=-1*h.x,m[1]=-1*h.y,m[2]=h.z*c,b.uniform3fv(d.uniforms.uOffset,m),b.drawArrays(b.POINT,0,q),m[0]=-1*h.x,m[1]=1*h.y,m[2]=h.z*c,b.uniform3fv(d.uniforms.uOffset,m),b.drawArrays(b.POINT,0,q),m[0]=1*h.x,m[1]=-1*h.y,m[2]=h.z*c,b.uniform3fv(d.uniforms.uOffset,m),
b.drawArrays(b.POINT,0,q),m[0]=1*h.x,m[1]=1*h.y,m[2]=h.z*c,b.uniform3fv(d.uniforms.uOffset,m),b.drawArrays(b.POINT,0,q);m[0]=0;m[1]=0;m[2]=0;b.uniform3fv(d.uniforms.uOffset,m);b.drawArrays(b.POINT,0,q);b.bindBuffer(b.ARRAY_BUFFER,null);x(d);b.enable(b.DEPTH_TEST);b.disable(b.BLEND)}function D(a,c,e,f){var d={},r=["uResolution","uSrc","uDelta"];e&&(r=r.concat(e));e=["aPosition"];f&&(e=e.concat(f));d.program=n(a,c,r,e);A(d.program);d.dataArray=new Float32Array([-1,-1,1,-1,-1,1,1,1]);d.buffer=b.createBuffer();
b.bindBuffer(b.ARRAY_BUFFER,d.buffer);b.bufferData(b.ARRAY_BUFFER,d.dataArray,b.STATIC_DRAW);b.bindBuffer(b.ARRAY_BUFFER,null);x(d.program);return d}function k(a,c){a=a.program;A(a);b.uniform3fv(a.uniforms.uResolution,g.array);null!=c&&(b.uniform2fv(a.uniforms.uDelta,c.dtxArray),b.uniform1i(a.uniforms.uSrc,0),b.activeTexture(b.TEXTURE0),b.bindTexture(b.TEXTURE_2D,c.texture))}function p(a){b.bindBuffer(b.ARRAY_BUFFER,a.buffer);b.vertexAttribPointer(a.program.attributes.aPosition,2,b.FLOAT,!1,0,0);
b.drawArrays(b.TRIANGLE_STRIP,0,4)}function B(){b.enable(b.TEXTURE_2D);b.disable(b.DEPTH_TEST);var a=function(d,r){b.bindFramebuffer(b.FRAMEBUFFER,d.frameBuffer);b.viewport(0,0,d.width,d.height);r&&(b.clearColor(0,0,0,0),b.clear(b.COLOR_BUFFER_BIT|b.DEPTH_BUFFER_BIT))};a(g.wHalfRT0,!0);k(R,g.mainRT);p(R);x(R.program);for(var c=0;2>c;c++){var e=1.5+1*c,f=2+1*c;a(g.wHalfRT1,!0);k(z,g.wHalfRT0);b.uniform4f(z.program.uniforms.uBlurDir,e,0,f,0);p(z);x(z.program);a(g.wHalfRT0,!0);k(z,g.wHalfRT1);b.uniform4f(z.program.uniforms.uBlurDir,
0,e,0,f);p(z);x(z.program)}b.bindFramebuffer(b.FRAMEBUFFER,null);b.viewport(0,0,g.width,g.height);b.clear(b.COLOR_BUFFER_BIT|b.DEPTH_BUFFER_BIT);k(S,g.mainRT);b.uniform1i(S.program.uniforms.uBloom,1);b.activeTexture(b.TEXTURE1);b.bindTexture(b.TEXTURE_2D,g.wHalfRT0.texture);p(S);x(S.program);b.enable(b.DEPTH_TEST)}function K(){L();v.position.z=h.z+F.nearfar[0];F.angle=180*Math.atan2(h.y,v.position.z+h.z)/Math.PI*2;G.loadProjection(F.matrix,g.aspect,F.angle,F.nearfar[0],F.nearfar[1])}function T(a){Z(document.getElementById("sakura"));
C();aa&&K()}function C(){g.setSize(b.canvas.width,b.canvas.height);b.clearColor(.2,.2,.5,1);b.viewport(0,0,g.width,g.height);var a=function(c,e,f){var d=g[c];d&&(b.deleteFramebuffer(d.frameBuffer),b.deleteRenderbuffer(d.renderBuffer),b.deleteTexture(d.texture));d={width:e,height:f,sizeArray:new Float32Array([e,f,e/f]),dtxArray:new Float32Array([1/e,1/f])};d.frameBuffer=b.createFramebuffer();d.renderBuffer=b.createRenderbuffer();d.texture=b.createTexture();b.bindTexture(b.TEXTURE_2D,d.texture);b.texImage2D(b.TEXTURE_2D,
0,b.RGBA,e,f,0,b.RGBA,b.UNSIGNED_BYTE,null);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.LINEAR);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.LINEAR);b.bindFramebuffer(b.FRAMEBUFFER,d.frameBuffer);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,d.texture,0);b.bindRenderbuffer(b.RENDERBUFFER,d.renderBuffer);b.renderbufferStorage(b.RENDERBUFFER,
b.DEPTH_COMPONENT16,e,f);b.framebufferRenderbuffer(b.FRAMEBUFFER,b.DEPTH_ATTACHMENT,b.RENDERBUFFER,d.renderBuffer);b.bindTexture(b.TEXTURE_2D,null);b.bindRenderbuffer(b.RENDERBUFFER,null);b.bindFramebuffer(b.FRAMEBUFFER,null);g[c]=d};a("mainRT",g.width,g.height);a("wFullRT0",g.width,g.height);a("wFullRT1",g.width,g.height);a("wHalfRT0",g.halfWidth,g.halfHeight);a("wHalfRT1",g.halfWidth,g.halfHeight)}function ba(){var a=new Date;y.elapsed=(a-y.start)/1E3;y.delta=(a-y.prev)/1E3;y.prev=a;ca&&requestAnimationFrame(ba);
G.loadLookAt(v.matrix,v.position,v.lookat,v.up);b.enable(b.DEPTH_TEST);b.bindFramebuffer(b.FRAMEBUFFER,g.mainRT.frameBuffer);b.viewport(0,0,g.mainRT.width,g.mainRT.height);b.clearColor(.01,.01,.01,0);b.clear(b.COLOR_BUFFER_BIT|b.DEPTH_BUFFER_BIT);P();B()}function Z(a){var c=document.body,e=document.documentElement;fullw=Math.max(c.clientWidth,c.scrollWidth,e.scrollWidth,e.clientWidth);fullh=Math.max(c.clientHeight,c.scrollHeight,e.scrollHeight,e.clientHeight);a.width=fullw;a.height=fullh}var R,z,
Q,m,M,q,E,w,U,V,W,X,l={},G={};l.create=function(a,c,e){return{x:a,y:c,z:e}};l.dot=function(a,c){return a.x*c.x+a.y*c.y+a.z*c.z};l.cross=function(a,c,e){a.x=c.y*e.z-c.z*e.y;a.y=c.z*e.x-c.x*e.z;a.z=c.x*e.y-c.y*e.x};l.normalize=function(a){var c=a.x*a.x+a.y*a.y+a.z*a.z;1E-5<c&&(c=1/Math.sqrt(c),a.x*=c,a.y*=c,a.z*=c)};l.arrayForm=function(a){a.array?(a.array[0]=a.x,a.array[1]=a.y,a.array[2]=a.z):a.array=new Float32Array([a.x,a.y,a.z]);return a.array};G.createIdentity=function(){return new Float32Array([1,
0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])};G.loadProjection=function(a,c,e,f,d){e=f*Math.tan(e*Math.PI/180*.5)*2;a[0]=2*f/(e*c);a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=2*f/e;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=-(d+f)/(d-f);a[11]=-1;a[12]=0;a[13]=0;a[14]=-2*d*f/(d-f);a[15]=0};G.loadLookAt=function(a,c,e,f){e=l.create(c.x-e.x,c.y-e.y,c.z-e.z);l.normalize(e);var d=l.create(1,0,0);l.cross(d,f,e);l.normalize(d);f=l.create(1,0,0);l.cross(f,e,d);l.normalize(f);a[0]=d.x;a[1]=f.x;a[2]=e.x;a[3]=0;a[4]=d.y;a[5]=f.y;a[6]=e.y;a[7]=
0;a[8]=d.z;a[9]=f.z;a[10]=e.z;a[11]=0;a[12]=-(c.x*a[0]+c.y*a[4]+c.z*a[8]);a[13]=-(c.x*a[1]+c.y*a[5]+c.z*a[9]);a[14]=-(c.x*a[2]+c.y*a[6]+c.z*a[10]);a[15]=1};var y={start:0,prev:0,delta:0,elapsed:0},b,g={width:0,height:0,aspect:1,array:new Float32Array(3),halfWidth:0,halfHeight:0,halfArray:new Float32Array(3),setSize:function(a,c){g.width=a;g.height=c;g.aspect=g.width/g.height;g.array[0]=g.width;g.array[1]=g.height;g.array[2]=g.aspect;g.halfWidth=Math.floor(a/2);g.halfHeight=Math.floor(c/2);g.halfArray[0]=
g.halfWidth;g.halfArray[1]=g.halfHeight;g.halfArray[2]=g.halfWidth/g.halfHeight}},F={angle:60,nearfar:new Float32Array([.1,100]),matrix:G.createIdentity()},v={position:l.create(0,0,100),lookat:l.create(0,0,0),up:l.create(0,1,0),dof:l.create(10,4,8),matrix:G.createIdentity()},h=X=W=V=U=w=E=q=M=m=Q=void 0,aa=!1,H=function(){this.velocity=Array(3);this.rotation=Array(3);this.position=Array(3);this.euler=Array(3);this.alpha=this.size=1;this.zkey=0};H.prototype.setVelocity=function(a,c,e){this.velocity[0]=
a;this.velocity[1]=c;this.velocity[2]=e};H.prototype.setRotation=function(a,c,e){this.rotation[0]=a;this.rotation[1]=c;this.rotation[2]=e};H.prototype.setPosition=function(a,c,e){this.position[0]=a;this.position[1]=c;this.position[2]=e};H.prototype.setEulerAngles=function(a,c,e){this.euler[0]=a;this.euler[1]=c;this.euler[2]=e};H.prototype.setSize=function(a){this.size=a};H.prototype.update=function(a,c){this.position[0]+=this.velocity[0]*a;this.position[1]+=this.velocity[1]*a;this.position[2]+=this.velocity[2]*
a;this.euler[0]+=this.rotation[0]*a;this.euler[1]+=this.rotation[1]*a;this.euler[2]+=this.rotation[2]*a};var S=z=R=void 0,ca=!0;window.addEventListener("load",function(a){a=document.getElementById("sakura");try{Z(a),b=a.getContext("experimental-webgl")}catch(e){alert("WebGL not supported."+e);console.error(e);return}window.addEventListener("resize",T);C();var c=document.getElementById("fx_common_vsh").textContent;a=document.getElementById("fx_brightbuf_fsh").textContent;R=D(c,a,null,null);a=document.getElementById("fx_dirblur_r4_fsh").textContent;
z=D(c,a,["uBlurDir"],null);c=document.getElementById("pp_final_vsh").textContent;a=document.getElementById("pp_final_fsh").textContent;S=D(c,a,["uBloom"],null);a=b.getParameter(b.ALIASED_POINT_SIZE_RANGE);g.pointSize={min:a[0],max:a[1]};a=document.getElementById("sakura_point_vsh").textContent;c=document.getElementById("sakura_point_fsh").textContent;Q=n(a,c,"uProjection uModelview uResolution uOffset uDOF uFade".split(" "),["aPosition","aEuler","aMisc"]);A(Q);m=new Float32Array([0,0,0]);M=l.create(0,
10,0);q=160;E=Array(q);w=new Float32Array(8*q);U=0;V=3*q;W=6*q;X=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,X);b.bufferData(b.ARRAY_BUFFER,w,b.DYNAMIC_DRAW);b.bindBuffer(b.ARRAY_BUFFER,null);x(Q);for(a=0;a<q;a++)E[a]=new H;aa=!0;K();y.start=new Date;y.prev=y.start;ba()});(function(a,c){a["r"+c]=a["r"+c]||a["webkitR"+c]||a["mozR"+c]||a["msR"+c]||a["oR"+c]||function(e){a.setTimeout(e,1E3/60)}})(window,"equestAnimationFrame")},{}]},{},["sxca"],null);