module.exports=function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist/",o(o.s=6)}([function(e,t){e.exports=require("express")},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("mongodb")},function(e,t,o){"use strict";(function(e){var o;(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const r=()=>'<!doctype html>\n      <html lang="en">\n        <head>\n          <meta charset="utf-8">\n          <title>MERN Kickstart</title>\n        </head>\n        <body>\n          <div id="root"></div>\n          <script type="text/javascript" src="/dist/bundle.js"><\/script>\n        </body>\n      </html>';var n,l;t.a=r,(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(r,"default","/home/macluiggy/Documents/PROGRAMMING/MERN/mern_simple_setup/template.js"),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,o(1)(e))},function(e,t){e.exports=require("dotenv")},function(e,t,o){e.exports=o(7)},function(e,t,o){"use strict";o.r(t),function(e){var r,n=o(2),l=o.n(n),a=o(0),i=o.n(a),s=o(3),u=o(4),c=o(5),d=o.n(c);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;d.a.config();const f=i()(),p=process.cwd();f.use("/dist",i.a.static(l.a.join(p,"dist"))),f.get("/",(e,t)=>{t.status(200).send(Object(u.a)())}),f.get("/api/hello",(e,t)=>{t.json({hello:"world, jajja"})});let m=process.env.PORT||3e3;f.listen(m,(function(e){e&&console.log(e),console.info("Server started on port %s.",m)}));const b=process.env.MONGODB_URI||"mongodb://localhost:27017/mernSimpleSetup";s.MongoClient.connect(b,{useNewUrlParser:!0,useUnifiedTopology:!0},(e,t)=>{console.log("Connected successfully to mongodb server"),t.close()});const g=f;var v,y;t.default=g,(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register(f,"app","/home/macluiggy/Documents/PROGRAMMING/MERN/mern_simple_setup/server/server.js"),v.register(p,"CURRENT_WORKING_DIR","/home/macluiggy/Documents/PROGRAMMING/MERN/mern_simple_setup/server/server.js"),v.register(m,"port","/home/macluiggy/Documents/PROGRAMMING/MERN/mern_simple_setup/server/server.js"),v.register(b,"url","/home/macluiggy/Documents/PROGRAMMING/MERN/mern_simple_setup/server/server.js"),v.register(g,"default","/home/macluiggy/Documents/PROGRAMMING/MERN/mern_simple_setup/server/server.js")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)}.call(this,o(1)(e))}]);