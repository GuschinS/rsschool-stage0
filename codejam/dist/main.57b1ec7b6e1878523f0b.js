(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var r;e.g.importScripts&&(r=e.g.location+"");var t=e.g.document;if(!r&&t&&(t.currentScript&&(r=t.currentScript.src),!r)){var a=t.getElementsByTagName("script");a.length&&(r=a[a.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=r})();var r,t=document.querySelector(".ancients"),a=document.querySelectorAll(".ancients div"),c=document.querySelectorAll(".game-difficulty button"),n=document.querySelector(".start"),o=document.querySelector(".score");t.addEventListener("click",(function(e){var t;return(e.target&&e.target.matches(".azathoth")||e.target&&e.target.matches(".cthulhu")||e.target&&e.target.matches(".iogSothoth")||e.target&&e.target.matches(".shubNiggurath"))&&(t=e.target,function(){var e=document.querySelectorAll(".green"),r=document.querySelectorAll(".brown"),t=document.querySelectorAll(".blue"),c=document.querySelector(".front"),d=document.querySelector(".back");a.forEach((function(e){e.style.boxShadow=""})),e.forEach((function(e){e.textContent="0"})),r.forEach((function(e){e.textContent="0"})),t.forEach((function(e){e.textContent="0"})),n.style.opacity="0",n.style.cursor="default",c.style.opacity="0",d.style.opacity="0",d.style.cursor="default",o.style.opacity="0"}(),t.style.boxShadow="8px 8px 24px 0px rgba(255, 255, 255, 1)"),c.forEach((function(e){e.style.opacity="1",e.style.cursor="pointer",e.style.boxShadow=""})),r=t.className}));var d,s=document.querySelector(".game-difficulty"),l=document.querySelectorAll(".game-difficulty button"),i=document.querySelector(".start");s.addEventListener("click",(function(e){var r;return(e.target&&e.target.matches(".very-easy")||e.target&&e.target.matches(".easy")||e.target&&e.target.matches(".normal")||e.target&&e.target.matches(".hard")||e.target&&e.target.matches(".very-hard"))&&(r=e.target,l.forEach((function(e){e.style.boxShadow=""})),r.style.boxShadow="8px 8px 24px 0px rgba(255, 255, 255, 1)"),i.style.opacity="1",i.style.cursor="pointer",d=r.className}));var f={azathoth:e.p+"assets/e76cc60e6f2b9bb167ce.png",cthulhu:e.p+"assets/e7bfd029744dc9f87c1a.png",iogSothoth:e.p+"assets/c5b7717bff973cda27be.png",shubNiggurath:e.p+"assets/68c4272e00c9596e65b1.png"};const u=[{id:"azathoth",name:"azathoth",cardFace:f.azathoth,firstStage:{greenCards:1,blueCards:1,brownCards:2},secondStage:{greenCards:2,blueCards:1,brownCards:3},thirdStage:{greenCards:2,blueCards:0,brownCards:4}},{id:"cthulhu",name:"cthulhu",cardFace:f.cthulhu,firstStage:{greenCards:0,blueCards:2,brownCards:2},secondStage:{greenCards:1,blueCards:0,brownCards:3},thirdStage:{greenCards:3,blueCards:0,brownCards:4}},{id:"iogSothoth",name:"iogSothoth",cardFace:f.iogSothoth,firstStage:{greenCards:0,blueCards:1,brownCards:2},secondStage:{greenCards:2,blueCards:1,brownCards:3},thirdStage:{greenCards:3,blueCards:0,brownCards:4}},{id:"shubNiggurath",name:"shubNiggurath",cardFace:f.shubNiggurath,firstStage:{greenCards:1,blueCards:1,brownCards:2},secondStage:{greenCards:3,blueCards:1,brownCards:2},thirdStage:{greenCards:2,blueCards:0,brownCards:4}}];var b={green1:e.p+"assets/ee9218f13d2668469469.png",green2:e.p+"assets/1a1b4da17274000ce3a8.png",green3:e.p+"assets/24a6de1c53f0cc14bb95.png",green4:e.p+"assets/d9d9a3dc837a4101fc61.png",green5:e.p+"assets/0634bb414e136066d46f.png",green6:e.p+"assets/ca07046ad17914ec04d0.png",green7:e.p+"assets/f9d8238c6770bdc97f73.png",green8:e.p+"assets/bc5f83ed7ced1b832494.png",green9:e.p+"assets/bc368631ac89e5bf0891.png",green10:e.p+"assets/766beb973fc76ac9564e.png",green11:e.p+"assets/305fdb3b09ad909c598f.png",green12:e.p+"assets/b786b0a5e0aaf884c27b.png",green13:e.p+"assets/b3e3243ad3927ba66da7.png",green14:e.p+"assets/20b6b1be80bef6932ab0.png",green15:e.p+"assets/63677766cd3a4cea8da0.png",green16:e.p+"assets/608e0aecaccf5ff896fb.png",green17:e.p+"assets/0ebea1f5b536a0b85765.png",green18:e.p+"assets/268edbdc27e016d06a52.png"};const g=[{id:"green1",cardFace:b.green1,difficulty:"easy",color:"green"},{id:"green2",cardFace:b.green2,difficulty:"hard",color:"green"},{id:"green3",cardFace:b.green3,difficulty:"hard",color:"green"},{id:"green4",cardFace:b.green4,difficulty:"hard",color:"green"},{id:"green5",cardFace:b.green5,difficulty:"hard",color:"green"},{id:"green6",cardFace:b.green6,difficulty:"hard",color:"green"},{id:"green7",cardFace:b.green7,difficulty:"normal",color:"green"},{id:"green8",cardFace:b.green8,difficulty:"normal",color:"green"},{id:"green9",cardFace:b.green9,difficulty:"normal",color:"green"},{id:"green10",cardFace:b.green10,difficulty:"normal",color:"green"},{id:"green11",cardFace:b.green11,difficulty:"normal",color:"green"},{id:"green12",cardFace:b.green12,difficulty:"easy",color:"green"},{id:"green13",cardFace:b.green13,difficulty:"normal",color:"green"},{id:"green14",cardFace:b.green14,difficulty:"normal",color:"green"},{id:"green15",cardFace:b.green15,difficulty:"normal",color:"green"},{id:"green16",cardFace:b.green16,difficulty:"easy",color:"green"},{id:"green17",cardFace:b.green17,difficulty:"easy",color:"green"},{id:"green18",cardFace:b.green18,difficulty:"easy",color:"green"}];var p={brown1:e.p+"assets/ac85e7db9ab360fe235a.png",brown2:e.p+"assets/c44579505d0d3ccfd7c8.png",brown3:e.p+"assets/caababcab21e08510c27.png",brown4:e.p+"assets/e387b64a537a0fb25c84.png",brown5:e.p+"assets/709f87f82c146ab3189a.png",brown6:e.p+"assets/23453f970c4a388f8b68.png",brown7:e.p+"assets/7da5050420b14d67a481.png",brown8:e.p+"assets/2126fcd965be3b428dca.png",brown9:e.p+"assets/3d69a01cdd56175f304e.png",brown10:e.p+"assets/703068f44f9153534f9c.png",brown11:e.p+"assets/157fd0a92444cc2a245f.png",brown12:e.p+"assets/920b1409d3f7d006e764.png",brown13:e.p+"assets/a8d77ff5b5eaa534b968.png",brown14:e.p+"assets/f5d21e1965d8ec808bc2.png",brown15:e.p+"assets/036f8f91eccd0e8f9708.png",brown16:e.p+"assets/1fd61bbd111986a0965a.png",brown17:e.p+"assets/6a53cc04a2d6cbb63677.png",brown18:e.p+"assets/c537bfb2cd284c9667ae.png",brown19:e.p+"assets/199841521c55940d0d03.png",brown20:e.p+"assets/1182a8f80bd2272b3d07.png",brown21:e.p+"assets/3a8e72879e11c315c59d.png"};const y=[{id:"brown1",cardFace:p.brown1,difficulty:"normal",color:"brown"},{id:"brown2",cardFace:p.brown2,difficulty:"normal",color:"brown"},{id:"brown3",cardFace:p.brown3,difficulty:"normal",color:"brown"},{id:"brown4",cardFace:p.brown4,difficulty:"normal",color:"brown"},{id:"brown5",cardFace:p.brown5,difficulty:"normal",color:"brown"},{id:"brown6",cardFace:p.brown6,difficulty:"hard",color:"brown"},{id:"brown7",cardFace:p.brown7,difficulty:"hard",color:"brown"},{id:"brown8",cardFace:p.brown8,difficulty:"hard",color:"brown"},{id:"brown9",cardFace:p.brown9,difficulty:"hard",color:"brown"},{id:"brown10",cardFace:p.brown10,difficulty:"hard",color:"brown"},{id:"brown11",cardFace:p.brown11,difficulty:"easy",color:"brown"},{id:"brown12",cardFace:p.brown12,difficulty:"easy",color:"brown"},{id:"brown13",cardFace:p.brown13,difficulty:"easy",color:"brown"},{id:"brown14",cardFace:p.brown14,difficulty:"easy",color:"brown"},{id:"brown15",cardFace:p.brown15,difficulty:"normal",color:"brown"},{id:"brown16",cardFace:p.brown16,difficulty:"normal",color:"brown"},{id:"brown17",cardFace:p.brown17,difficulty:"normal",color:"brown"},{id:"brown18",cardFace:p.brown18,difficulty:"normal",color:"brown"},{id:"brown19",cardFace:p.brown19,difficulty:"normal",color:"brown"},{id:"brown20",cardFace:p.brown20,difficulty:"normal",color:"brown"},{id:"brown21",cardFace:p.brown21,difficulty:"easy",color:"brown"}];var h={blue1:e.p+"assets/09c8e5eb50dc7666f1aa.png",blue2:e.p+"assets/3cc352cdc8fade5dad4c.png",blue3:e.p+"assets/fdd1d10ff513774eb841.png",blue4:e.p+"assets/f09f0f715e525a0b50ec.png",blue5:e.p+"assets/e3e8792622b0c75c78c1.png",blue6:e.p+"assets/cf323c98a3f54632a66c.png",blue7:e.p+"assets/4cdb1bd641372e2d0f74.png",blue8:e.p+"assets/02a9eec68518951fc18e.png",blue9:e.p+"assets/d3371911f8f0d84b5585.png",blue10:e.p+"assets/c61c9f73492d8cd7027c.png",blue11:e.p+"assets/f7e6552a92e4b878107a.png",blue12:e.p+"assets/204f9160083e529ab763.png"};const w=[{id:"blue1",cardFace:h.blue1,difficulty:"hard",color:"blue"},{id:"blue2",cardFace:h.blue2,difficulty:"hard",color:"blue"},{id:"blue3",cardFace:h.blue3,difficulty:"easy",color:"blue"},{id:"blue4",cardFace:h.blue4,difficulty:"easy",color:"blue"},{id:"blue5",cardFace:h.blue5,difficulty:"easy",color:"blue"},{id:"blue6",cardFace:h.blue6,difficulty:"hard",color:"blue"},{id:"blue7",cardFace:h.blue7,difficulty:"normal",color:"blue"},{id:"blue8",cardFace:h.blue8,difficulty:"hard",color:"blue"},{id:"blue9",cardFace:h.blue9,difficulty:"normal",color:"blue"},{id:"blue10",cardFace:h.blue10,difficulty:"easy",color:"blue"},{id:"blue11",cardFace:h.blue11,difficulty:"normal",color:"blue"},{id:"blue12",cardFace:h.blue12,difficulty:"normal",color:"blue"}];var C,m=document.querySelector(".score"),S=document.querySelector(".start"),F=document.querySelectorAll(".green"),x=document.querySelectorAll(".brown"),v=document.querySelectorAll(".blue"),E=document.querySelector(".back"),q=document.querySelector(".front"),A=function(e){e.sort((function(){return Math.random()-.5}))};function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}S.addEventListener("click",(function(){var e=[],t=[],a=[],c=[],n=[],o=[];u.forEach((function(s){var l,i,f;if(r===s.id){if(F[0].textContent=s.firstStage.greenCards,F[1].textContent=s.secondStage.greenCards,F[2].textContent=s.thirdStage.greenCards,l=s.firstStage.greenCards+s.secondStage.greenCards+s.thirdStage.greenCards,x[0].textContent=s.firstStage.brownCards,x[1].textContent=s.secondStage.brownCards,x[2].textContent=s.thirdStage.brownCards,i=s.firstStage.brownCards+s.secondStage.brownCards+s.thirdStage.brownCards,v[0].textContent=s.firstStage.blueCards,v[1].textContent=s.secondStage.blueCards,v[2].textContent=s.thirdStage.blueCards,f=s.firstStage.blueCards+s.secondStage.blueCards+s.thirdStage.blueCards,m.style.opacity="1",q.style.opacity="0",E.style.cursor="pointer","normal"===d){A(g);for(var u=0;u<l;u++)e.push(g[u].cardFace);A(y);for(var b=0;b<i;b++)t.push(y[b].cardFace);A(w);for(var p=0;p<f;p++)a.push(w[p].cardFace)}else"easy"===d?(A(g),g.forEach((function(r){"hard"!=r.difficulty&&e.push(r.cardFace)})),A(y),y.forEach((function(e){"hard"!=e.difficulty&&t.push(e.cardFace)})),A(w),w.forEach((function(e){"hard"!=e.difficulty&&a.push(e.cardFace)}))):"hard"===d?(A(g),g.forEach((function(r){"easy"!=r.difficulty&&e.push(r.cardFace)})),A(y),y.forEach((function(e){"easy"!=e.difficulty&&t.push(e.cardFace)})),A(w),w.forEach((function(e){"easy"!=e.difficulty&&a.push(e.cardFace)}))):"very-hard"===d?(A(g),g.forEach((function(r){"hard"===r.difficulty&&e.push(r.cardFace)})),A(y),y.forEach((function(e){"hard"===e.difficulty&&t.push(e.cardFace)})),y.forEach((function(e){t.length<i&&"normal"===e.difficulty&&t.push(e.cardFace)})),A(t),A(w),w.forEach((function(e){"hard"===e.difficulty&&a.push(e.cardFace)}))):"very-easy"===d&&(A(g),g.forEach((function(r){"easy"===r.difficulty&&e.push(r.cardFace)})),A(y),y.forEach((function(e){"easy"===e.difficulty&&t.push(e.cardFace)})),y.forEach((function(e){"normal"===e.difficulty&&t.length<i&&t.push(e.cardFace)})),A(t),A(w),w.forEach((function(e){"easy"===e.difficulty&&a.push(e.cardFace)})));c.push(e.splice(0,s.firstStage.greenCards)),c.push(t.splice(0,s.firstStage.brownCards)),c.push(a.splice(0,s.firstStage.blueCards)),c=c.flat(),n.push(e.splice(0,s.secondStage.greenCards)),n.push(t.splice(0,s.secondStage.brownCards)),n.push(a.splice(0,s.secondStage.blueCards)),n=n.flat(),o.push(e.splice(0,s.thirdStage.greenCards)),o.push(t.splice(0,s.thirdStage.brownCards)),o.push(a.splice(0,s.thirdStage.blueCards)),o=o.flat(),A(c),A(n),A(o),C=c.concat(n,o),E.style.opacity="1",C.forEach((function(e){for(var r=0;r<g.length;r++)if(e===g[r].cardFace)return void console.log(g[r].id,g[r].difficulty);for(var t=0;t<y.length;t++)if(e===y[t].cardFace)return void console.log(y[t].id,y[t].difficulty);for(var a=0;a<w.length;a++)if(e===w[a].cardFace)return void console.log(w[a].id,w[a].difficulty)}))}}))}));var N=document.querySelectorAll(".green"),z=document.querySelectorAll(".brown"),L=document.querySelectorAll(".blue"),j=document.querySelector(".front"),T=document.querySelector(".back");T.addEventListener("click",(function(){for(var e=function(){var e=C.shift();return g.forEach((function(r){e===r.cardFace&&(N[0].textContent>0?N[0].textContent=N[0].textContent-1:N[1].textContent>0?N[1].textContent=N[1].textContent-1:N[2].textContent>0&&(N[2].textContent=N[2].textContent-1))})),y.forEach((function(r){e===r.cardFace&&(z[0].textContent>0?z[0].textContent=z[0].textContent-1:z[1].textContent>0?z[1].textContent=z[1].textContent-1:z[2].textContent>0&&(z[2].textContent=z[2].textContent-1))})),w.forEach((function(r){e===r.cardFace&&(L[0].textContent>0?L[0].textContent=L[0].textContent-1:L[1].textContent>0?L[1].textContent=L[1].textContent-1:L[2].textContent>0&&(L[2].textContent=L[2].textContent-1))})),j.style.backgroundImage="url(".concat(e,")"),j.style.opacity="1",0===C.length&&(T.style.opacity="0"),{v:void 0}};C.length>0;){var r=e();if("object"===k(r))return r.v}}))})();
//# sourceMappingURL=main.57b1ec7b6e1878523f0b.js.map