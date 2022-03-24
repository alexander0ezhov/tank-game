(()=>{"use strict";var t={771:(t,e,n)=>{n.d(e,{Z:()=>a});var o=n(81),i=n.n(o),s=n(645),r=n.n(s)()(i());r.push([t.id,"html, body {\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n}\n\n.root {\n    position: relative;\n    display: flex;\n    align-items: stretch;\n    flex-direction: column;\n    height: 100vh;\n}\n\nh1 {\n    user-select: none;\n    text-align: center;\n    margin: 8px auto;\n}\n\n.canvas-wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.controls {\n    display: none;\n    position: absolute;\n    user-select: none;\n    z-index: 70;\n    bottom: 0;\n    font-size: 34px;\n    width: 100%;\n    height: 120px;\n}\n\n.controls > * {\n    position: absolute;\n    user-select: none;\n}\n\n.shooting-controls {\n    right: 5%;\n    top: 15%;\n}\n\n.glass {\n    border-radius: 15%;\n    background: linear-gradient(120deg, #add7e660, #397f9360);\n}\n\n.moving-controls {\n    width: 120px;\n    height: 120px;\n    top: -24px;\n    cursor: pointer;\n    left: 5%;\n}\n\n.moving-controls > * {\n    position: absolute;\n}\n\n.moving-controls > #top {\n    top: 0;\n    left: 40px;\n}\n.moving-controls > #left {\n    top: 40px;\n    left: 0;\n}\n.moving-controls > #right {\n    top: 40px;\n    left: 80px;\n}\n.moving-controls > #bottom {\n     top: 80px;\n     left: 40px;\n }\n\n\n#shoot {\n    padding: 20px;\n}\n\n#canvas {\n    background-size: cover;\n}",""]);const a=r},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,i,s){"string"==typeof t&&(t=[[null,t,void 0]]);var r={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(r[c]=!0)}for(var p=0;p<t.length;p++){var h=[].concat(t[p]);o&&r[h[0]]||(void 0!==s&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=s),n&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=n):h[2]=n),i&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=i):h[4]="".concat(i)),e.push(h))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var s={},r=[],a=0;a<t.length;a++){var c=t[a],p=o.base?c[0]+o.base:c[0],h=s[p]||0,l="".concat(p," ").concat(h);s[p]=h+1;var d=n(l),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(u);else{var f=i(u,o);o.byIndex=a,e.splice(a,0,{identifier:l,updater:f,references:1})}r.push(l)}return r}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var s=o(t=t||[],i=i||{});return function(t){t=t||[];for(var r=0;r<s.length;r++){var a=n(s[r]);e[a].references--}for(var c=o(t,i),p=0;p<s.length;p++){var h=n(s[p]);0===e[h].references&&(e[h].updater(),e.splice(h,1))}s=c}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var s=e[o]={id:o,exports:{}};return t[o](s,s.exports,n),s.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{var t={};n.r(t),n.d(t,{addEnemy:()=>D,removeEnemy:()=>N,removeEnemyWithDelay:()=>R,setPlayer:()=>Z});var e=n(379),o=n.n(e),i=n(795),s=n.n(i),r=n(569),a=n.n(r),c=n(565),p=n.n(c),h=n(216),l=n.n(h),d=n(589),u=n.n(d),f=n(771),m={};m.styleTagTransform=u(),m.setAttributes=p(),m.insert=a().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=l(),o()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const g=document.getElementById("canvas"),v=g.getContext("2d"),y=document.getElementById("controls"),b=class{constructor({direction:t="top",position:e={x:g.width/2,y:g.height-50},speed:n=6,bulletSpeed:o=10,border:i=36,shooting:s=!1,moving:r=null,bullets:a=[],shootGap:c=48,size:p=64,explosion:h}={}){this.direction=t,this.position=e,this.speed=n,this.bulletSpeed=o,this.border=i,this.shooting=s,this.moving=r,this.bullets=a,this.shootGap=c,this.size=p,this.explosion=h}move(){switch(this.direction){case"top":if(this.position.y<this.border)return;return void(this.position.y-=this.speed);case"bottom":if(this.position.y>g.height-this.border)return;return void(this.position.y+=this.speed);case"left":if(this.position.x<this.border)return;return void(this.position.x-=this.speed);case"right":if(this.position.x>g.width-this.border)return;return void(this.position.x+=this.speed)}}shoot(){this.shooting=!0,this.bullets.push(new class{constructor({position:t,direction:e,speed:n=6,size:o=36}={}){this.position=t,this.direction=e,this.speed=n,this.size=o}move(){switch(this.direction){case"top":this.position.y-=this.speed;break;case"bottom":this.position.y+=this.speed;break;case"left":this.position.x-=this.speed;break;case"right":this.position.x+=this.speed}return this}}({position:this.getShootPos(),direction:this.direction,speed:this.bulletSpeed})),setTimeout((()=>{this.shooting=!1}),200)}getShootPos(){const{x:t,y:e}=this.position;switch(this.direction){case"top":return{x:t,y:e-this.shootGap};case"bottom":return{x:t,y:e+this.shootGap};case"left":return{x:t-this.shootGap,y:e};case"right":return{x:t+this.shootGap,y:e}}}},x=n.p+"b89b4906d696f247df69b08279408a23.png",w=n.p+"0ec6f253bb1b3e0219d558af9a97bab9.png",E=n.p+"2bd22721e84c945dd9f52e4a6c043a30.png",S=n.p+"29cfc34262ef617db9e8fda9e8c30a37.png",T=n.p+"38c5ff131938497eb21653ef5996561a.png",I=new Image(24,24),M=new Image(8,8),A=new Image(8,8),P=new Image(24,24),k=new Image(24,24);I.src=x,M.src=w,A.src=E,P.src=S,k.src=T;const z=class extends b{constructor(t){if(super(t),this.image=I,document.addEventListener("keydown",(t=>{switch(t.code){case"ArrowUp":this.direction="top",this.moving="top";break;case"ArrowDown":this.direction="bottom",this.moving="bottom";break;case"ArrowLeft":this.direction="left",this.moving="left";break;case"ArrowRight":this.direction="right",this.moving="right";break;case"Space":this.shoot()}})),document.addEventListener("keyup",(t=>{switch(t.code){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":this.moving=null}})),y.active){const t=y.querySelector(".shooting-controls #shoot"),e=Array.from(y.querySelectorAll(".moving-controls *"));y.addEventListener("touchstart",(t=>{t.preventDefault(),t.stopPropagation()})),t.addEventListener("touchstart",(()=>this.shoot())),e.forEach((t=>{t.addEventListener("touchstart",(()=>{this.direction=t.id,this.moving=t.id})),t.addEventListener("touchend",(()=>{this.moving=null}))}))}}},L={top:0,bottom:180,left:270,right:90},j=Math.PI/180,C=["top","bottom","left","right"],G=[{x:48,y:48},{x:g.width/2,y:48},{x:g.width-48,y:48}],O={enemies:[],player:null},D=t=>{O.enemies.push(t)},N=t=>{O.enemies.splice(t,1)},R=(t,e=1e3)=>setTimeout(N.bind(null,t),e),Z=t=>{O.player=t},$=O,q=t,F=class extends b{constructor(t){super(t),this.image=P,setInterval((()=>{const t=C[Math.floor(5*Math.random())]||C[0];this.direction=t,this.moving=t}),1e3);const e=t=>setTimeout((()=>{this.shoot(),e(5e3*Math.random())}),t);e(1e3)}},U=(t,e,n,o,i,s=0)=>{v.save(),v.translate(e,n),v.rotate(s*j),v.drawImage(t,-o/2,-i/2,o,i),v.restore()},_=()=>{if($.enemies>5)return;const t={...G[Math.floor(2.5*Math.random())]||G[1]};q.addEnemy(new F({position:t,direction:"bottom"}))},B=t=>{t.moving&&t.move(t.moving),U(t.image,t.position.x,t.position.y,t.size,t.size,L[t.direction]);if(t.explosion&&U(k,t.explosion.x,t.explosion.y,64,64),t.bullets&&t.bullets.forEach(((e,n)=>{e.move();const o=(t=>{const e=$.enemies.findIndex((e=>((t,e)=>{const n=e.size/2;return t.position.y>=e.position.y-n&&t.position.y<=e.position.y+n&&t.position.x>=e.position.x-n&&t.position.x<=e.position.x+n})(t,e)));if(~e){const n=$.enemies[e];n.explosion=t.position,R(e,100),setTimeout((()=>{n.explosion=null}),100)}return~e})(e);if(o||(({x:t,y:e})=>t>g.width||e>g.height||e<0||t<0)(e.position))return t.bullets.splice(n,1);t.bullets[n]=e,U(A,e.position.x,e.position.y,e.size,e.size,L[e.direction])})),t.shooting){const e=t.getShootPos();U(M,e.x,e.y,36,36,L[t.direction])}},H=n.p+"153f7cb8b34322aa9bb6ef8ad581d7fe.jpeg",V=()=>{const t=visualViewport.width,e=visualViewport.height-48,n=`calc(${Math.min(t,e)}px - 3%)`;g.style.width=n,g.style.height=n};window.addEventListener("orientationchange",V),window.addEventListener("resize",V);(()=>{g.style.background=`url(${H})`,V(),("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)&&(y.active=!0,y.style.display="block"),_(),setInterval(_,5e3),Z(new z);const{enemies:t,player:e}=$,n=()=>{v.clearRect(0,0,g.width,g.height),e&&B(e),t.forEach((t=>B(t))),setTimeout((()=>requestAnimationFrame(n)),1e3/60)};n()})()})()})();