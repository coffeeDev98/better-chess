(this["webpackJsonpbetter-chess"]=this["webpackJsonpbetter-chess"]||[]).push([[0],{40:function(e,n,t){},41:function(e,n,t){},67:function(e,n,t){"use strict";t.r(n);var r=t(1),i=t.n(r),o=t(28),a=t.n(o),c=(t(40),t(41),t(2)),s=t(4),d=t(29),u=t.n(d),l=t(5),b=t(13),p="abcdefgh".split("");function g(e){return"[object Object]"===Object.prototype.toString.call(e)}function f(e){return"string"===typeof e}function h(e){if(!function(e){var n,t;return!1!==g(e)&&(void 0===(n=e.constructor)||!1!==g(t=n.prototype)&&!1!==t.hasOwnProperty("isPrototypeOf"))}(e))return!1;for(var n in e)if(e.hasOwnProperty(n)&&(!f(r=n)||-1===r.search(/^[a-h][1-8]$/)||(!f(t=e[n])||-1===t.search(/^[bw][KQRNBP]$/))))return!1;var t,r;return!0}function j(e){var n=e.split("");return"w"===n[0]?n[1].toUpperCase():n[1].toLowerCase()}var v,O,m,x,y,w,S,q,P=function(e){if(!h(e))return!1;for(var n="",t=8,r=0;r<8;r++){for(var i=0;i<8;i++){var o=p[i]+t;e.hasOwnProperty(o)?n+=j(e[o]):n+="1"}7!==r&&(n+="/"),t-=1}return n=function(e){return e.replace(/11111111/g,"8").replace(/1111111/g,"7").replace(/111111/g,"6").replace(/11111/g,"5").replace(/1111/g,"4").replace(/111/g,"3").replace(/11/g,"2")}(n)},k=function(e){if(!function(e){if(!f(e))return!1;var n=(e=function(e){return e.replace(/8/g,"11111111").replace(/7/g,"1111111").replace(/6/g,"111111").replace(/5/g,"11111").replace(/4/g,"1111").replace(/3/g,"111").replace(/2/g,"11")}(e=e.replace(/ .+$/,""))).split("/");if(8!==n.length)return!1;for(var t=0;t<8;t++)if(8!==n[t].length||-1!==n[t].search(/[^kqrnbpKQRNBP1]/))return!1;return!0}(e))return!1;for(var n,t=(e=e.replace(/ .+$/,"")).split("/"),r={},i=8,o=0;o<8;o++){for(var a=t[o].split(""),c=0,s=0;s<a.length;s++){if(-1!==a[s].search(/[1-8]/))c+=parseInt(a[s],10);else r[p[c]+i]=(n=a[s]).toLowerCase()===n?"b"+n.toUpperCase():"w"+n.toUpperCase(),c+=1}i-=1}return r},M="BOARD_MOVE_UPDATE",D="BOARD_MOVE_UNDO",F=t(19),C=function(e){var n=e.pieceSquare,t=e.history,r=(t.length&&t[t.length-1].from,t.length&&t[t.length-1].to);return Object(c.a)(Object(l.a)({},n,{backgroundColor:"rgba(123,97,255,0.5)"}),t.length&&Object(l.a)({},r,{backgroundColor:"rgba(123,97,255,0.5)"}))},B=function(e,n){var t=Object(r.useState)(new F("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")),i=Object(s.a)(t,1)[0],o=Object(r.useState)({fen:"start",dropSquareStyle:{},squareStyles:{},pieceSquare:"",square:"",history:[],boardPosition:{},pgn:[],undoMovesArray:[]}),a=Object(s.a)(o,2),d=a[0],u=a[1];Object(r.useEffect)((function(){console.log("UNDO MOVES: ",d.undoMovesArray)}),[d.undoMovesArray]),Object(r.useEffect)((function(){var t;e.channel&&(null===(t=e.channel)||void 0===t||t.on("ChannelMessage",(function(e){var t,r=(t=e.text,JSON.parse(t));switch(r.type){case M:g({sourceSquare:r.json.move.from,targetSquare:r.json.move.to});break;case D:var o={chess:i,state:d,setState:u,undoArray:r.json.undoArray};n.undoMove(o);break;default:console.log("INVALID OPERATION")}})))}),[e.channel]);var p=function(e,n,t){var r=e,o=n;i.move({from:r,to:o,promotion:t}),u(Object(c.a)(Object(c.a)({},d),{},{fen:i.fen()}))},g=function(e){for(var t=e.sourceSquare,r=e.targetSquare,o=(e.piece,i.move({from:t,to:r})),a=i.moves({verbose:!0}),s=0,l=a.length;s<l;s++)if(-1!==a[s].flags.indexOf("p")&&a[s].from===t)return void p(t,r,"r");null!==o&&(u((function(e){var n,t=e.history,r=e.pieceSquare;return Object(c.a)(Object(c.a)({},d),{},{fen:i.fen(),pgn:null===(n=i.pgn())||void 0===n?void 0:n.split(/\d\./),history:i.history({verbose:!0}),squareStyles:C({pieceSquare:r,history:t})})})),n.updateBoard(o))};return{setBoardPosition:function(e){console.log("BOARD POSITION: ",e),u(Object(c.a)(Object(c.a)({},d),{},{boardPosition:e}))},fen:d.fen,pgn:d.pgn,onDrop:g,onMouseOverSquare:function(e){var n=i.moves({square:e,verbose:!0});if(0!==n.length){for(var t=[],r=0;r<n.length;r++)t.push(n[r].to);!function(e,n){var t=[e].concat(Object(b.a)(n)).reduce((function(e,n){return Object(c.a)(Object(c.a)(Object(c.a)({},e),Object(l.a)({},n,{background:"radial-gradient(circle, rgb(123,97,255,0.5) 20%, transparent 0%)",borderRadius:"50%"})),C({history:d.history,pieceSquare:d.pieceSquare}))}),{});u((function(e){var n=e.squareStyles;return Object(c.a)(Object(c.a)({},d),{},{squareStyles:Object(c.a)(Object(c.a)({},n),t)})}))}(e,t)}},onMouseOutSquare:function(e){u((function(e){var n=e.pieceSquare,t=e.history;return Object(c.a)(Object(c.a)({},d),{},{squareStyles:C({pieceSquare:n,history:t})})}))},squareStyles:d.squareStyles,onDragOverSquare:function(e){u(Object(c.a)(Object(c.a)({},d),{},{dropSquareStyle:"e4"===e||"d4"===e||"e5"===e||"d5"===e?{backgroundColor:"cornFlowerBlue"}:{boxShadow:"inset 0 0 1px 4px rgb(255, 255, 0)"}}))},onSquareClick:function(e){var t;u((function(n){var t=n.history;return Object(c.a)(Object(c.a)({},d),{},{squareStyles:C({pieceSquare:e,history:t}),pieceSquare:e})}));for(var r=i.move({from:d.pieceSquare,to:e}),o=i.moves({verbose:!0}),a=0,s=o.length;a<s;a++)if(-1!==o[a].flags.indexOf("p")&&o[a].from===d.pieceSquare)return void p(d.pieceSquare,e,"r");null!==r&&(u(Object(c.a)(Object(c.a)({},d),{},{fen:i.fen(),pgn:null===(t=i.pgn())||void 0===t?void 0:t.split(/\d\./),history:i.history({verbose:!0}),pieceSquare:""})),n.updateBoard(r))},onSquareRightClick:function(e){return u(Object(c.a)(Object(c.a)({},d),{},{squareStyles:Object(l.a)({},e,{backgroundColor:"deepPink"})}))},undoMove:function(){var e=i.undo();e&&(u(Object(c.a)(Object(c.a)({},d),{},{fen:i.fen(),undoMovesArray:[].concat(Object(b.a)(d.undoMovesArray),[e])})),n.undoMoveMsg([].concat(Object(b.a)(d.undoMovesArray),[e])))},redoMove:function(){if(0!==d.undoMovesArray.length){var e=d.undoMovesArray.pop();if(console.log("REDO: ",e),e){var t=i.move(e);console.log("REDONE: ",t),null!==t&&(u((function(e){var n,t=e.history,r=e.pieceSquare;return Object(c.a)(Object(c.a)({},d),{},{fen:i.fen(),pgn:null===(n=i.pgn())||void 0===n?void 0:n.split(/\d\./),history:i.history({verbose:!0}),squareStyles:C({pieceSquare:r,history:t})})})),n.updateBoard(t))}}}}},E=t(16),N=t.n(E),R=t(30),A=t(31),I=t.n(A),L=t(32),W=t.n(L),K={messageParser:function(e){return{text:(n=e,JSON.stringify(n)),messageType:"TEXT"};var n}},Q=function(){var e=Object(r.useState)(null),n=Object(s.a)(e,2),t=n[0],i=n[1],o=I.a.createInstance("f4b36b6c897e41bfaa3904d75da40777"),a={uid:(Math.floor(9e4*Math.random())+1e4).toString(),token:""};Object(r.useEffect)((function(){(function(){var e=Object(R.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:W.a.get("https://agoratokenserver-demo.herokuapp.com/access_token?channel=test&uid=".concat(a.uid)).then((function(e){var n;console.log(e),a.token=(null===(n=e.data)||void 0===n?void 0:n.token)||"",o.login(a).then((function(){console.log("Login successful");var e=o.createChannel("test");e.join(),i(e)}))}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().then((function(){console.log("integrations successful")}))}),[]),Object(r.useEffect)((function(){t&&(null===t||void 0===t||t.on("MemberJoined",(function(e){console.log("New member joined: ",e)})),null===t||void 0===t||t.on("MemberLeft",(function(e){console.log("Member left: ",e)})))}),[t]);return{channel:t,playerMeta:a,sendChannelMessage:function(e,n){var r={uid:a.uid,json:e||{},type:n};console.log(K.messageParser(r)),null===t||void 0===t||t.sendMessage(K.messageParser(r)).then((function(){}))}}},T=function(e){var n=e.Agora;return{updateBoard:function(e){var t={move:e};null===n||void 0===n||n.sendChannelMessage(t,M)},undoMoveMsg:function(e){var t={undoArray:e};null===n||void 0===n||n.sendChannelMessage(t,D)},undoMove:function(e){var n=e.chess,t=e.state,r=e.setState,i=e.undoArray;n.undo()&&r(Object(c.a)(Object(c.a)({},t),{},{fen:n.fen(),undoMovesArray:i}))}}},U=t(19),_="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",z="8/8/8/8/8/8/8/8",J=function(){var e=Object(r.useState)(new U(_)),n=(Object(s.a)(e,1)[0],Object(r.useState)({fen:_,orientation:"white",dropSquareStyle:{},squareStyles:{},pieceSquare:"",square:"",history:[],boardPosition:k(_),pgn:[]})),t=Object(s.a)(n,2),i=t[0],o=t[1];return{fen:i.fen,pgn:i.pgn,boardPosition:i.boardPosition,orientation:i.orientation,onDrop:function(e){var n,t=e.sourceSquare,r=e.targetSquare,a=e.piece;console.log("EDITOR_ON_DROP: ",t,r,a),n="spare"===t?Object(c.a)(Object(c.a)({},i.boardPosition),{},Object(l.a)({},r,a)):Object(c.a)(Object(c.a)({},Object.fromEntries(Object.entries(i.boardPosition).filter((function(e){var n=Object(s.a)(e,2),r=n[0];n[1];return r!==t})))),{},Object(l.a)({},r,a)),console.log("BOARD_POSITION: ",n),o(Object(c.a)(Object(c.a)({},i),{},{fen:P(n)||i.fen,boardPosition:n}))},setFenPosition:function(e){o(Object(c.a)(Object(c.a)({},i),{},{fen:e,boardPosition:k(e)}))},reset:function(){o(Object(c.a)(Object(c.a)({},i),{},{fen:_,boardPosition:k(_)}))},clear:function(){o(Object(c.a)(Object(c.a)({},i),{},{fen:z,boardPosition:k(z)}))},flip:function(){o(Object(c.a)(Object(c.a)({},i),{},{orientation:"white"===i.orientation?"black":"white"}))}}},$=t(6),V=t(7),G=Object(V.a)(v||(v=Object($.a)(["\n  background-color: #2b2b34;\n  width: 386px;\n  border-radius: 0px 16px 16px 0px;\n"]))),H=V.b.div(O||(O=Object($.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  ","\n"])),(function(e){return e.editorMode&&G})),X=V.b.div(m||(m=Object($.a)(["\n  div {\n    padding: 14px;\n    cursor: pointer;\n  }\n"]))),Y=V.b.div(x||(x=Object($.a)(["\n  div {\n      padding: 14px;\n      cursor: pointer;\n    }\n"]))),Z=V.b.div(y||(y=Object($.a)(["\n  padding: 26px;\n  height: 100%;\n  .title {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 24px;\n    line-height: 29px;\n    color: #FFFFFF;\n  }\n  .divider {\n    width: 100%;\n    height: 0.5px;\n    background: #FFFFFF;\n    opacity: 0.1;\n    margin: 13.5px 0;\n  }\n  .slider {\n    width: 100%;\n    height: 32px;\n    background: #E8EDF9;\n    border-radius: 10px;\n    display: flex;\n    margin-bottom: 156px;\n    div {\n      width: 50%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n  }\n  label {\n   margin-bottom: 8px;\n   font-weight: 500;\n   font-size: 13px;\n   line-height: 16px;\n   text-transform: uppercase;\n   color: #FFFFFF;\n   opacity: 0.4;\n }\n .input-fen {\n   display: flex;\n   width: 100%;\n   margin-bottom: 24px;\n   input {\n     width: 100%;\n     height: 32px;\n     border-radius: 8px;\n   }\n }\n .output-fen {\n   display: flex;\n   align-items: center;\n   width: 100%;\n   height: 32px;\n   border-radius: 8px;\n   background: #ffffff;\n   overflow: hidden;\n   margin-bottom: 24px;\n   text-overflow: ellipsis;\n }\n  .btn-panel {\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n    button {    \n      width: 32%;\n      height: 40px;\n      color: #ffffff;\n      font-weight: 600;\n      font-size: 17px;\n      line-height: 20px;\n      background: #5656FF;\n      border: 1px solid rgba(255, 255, 255, 0.4);\n      box-sizing: border-box;\n      border-radius: 10px;\n    }\n  }\n"]))),ee=Object(V.a)(w||(w=Object($.a)(['\n  div[class$="-spare-pieces"] {\n    position: absolute;\n    width: 340px;\n    display: flex;\n    justify-content: space-between;\n    div[data-testid^="spare-"]:nth-child(odd) {\n      background: #b7c0d8;\n    }\n    div[data-testid^="spare-"]:nth-child(even) {\n      background: #e8edf9;\n    }\n    div {\n      /* width: 100%; */\n      margin: 2px;\n      border-radius: 12px;\n      div {\n        img {\n          padding: 8px 10px;\n          width: 26px !important;\n          height: 28px !important;\n        }\n      }\n    }\n  }\n']))),ne=V.b.div(S||(S=Object($.a)(['\n  display: flex;\n  /* width: 1000px; */\n  /* height: fit-content; */\n  max-width: 1440px;\n  background: black;\n  grid-template-columns: 66% 37%;\n  grid-template-areas: "board sidePanel";\n  .board-container {\n    position:relative;\n    min-width: 500px;\n    min-height: 500px;\n    grid-area: board;\n    border: 10px solid rgba(255, 255, 255);\n    div {\n      ',"\n      .black-spare-pieces {\n        left: ",";\n        bottom: ",";\n\n        /* background:grey; */\n      }\n      .white-spare-pieces {\n        left: ",";\n        bottom: ",";\n        /* background:grey; */\n      }\n    }  \n  }\n  \n  "," {\n    grid-area: sidePanel;\n    /* width: 100%; */\n    /* height: 100%; */\n  ",", "," {\n    background: #2b2b34;\n    border: 2px solid rgba(255, 255, 255, 0.1);\n    border-radius: 0 8px 8px 0;\n  }\n}\n"])),(function(e){return e.editorMode&&ee}),(function(e){return e.dimension?"".concat(e.dimension+32,"px"):"0px"}),(function(e){return e.dimension?"".concat(e.dimension-180,"px"):"0px"}),(function(e){return e.dimension?"".concat(e.dimension+32,"px"):"0px"}),(function(e){return e.dimension?"".concat(e.dimension-240,"px"):"0px"}),H,X,Y),te=(V.b.div(q||(q=Object($.a)(["\n  color: white;\n"]))),t.p+"static/media/undoMove.586eb02f.svg"),re=t.p+"static/media/redoMove.c6f42448.svg",ie=t.p+"static/media/history.8223d0ff.svg",oe=t.p+"static/media/resetBoard.7af0fcde.svg",ae=t.p+"static/media/flipBoard.c1ef8478.svg",ce=t.p+"static/media/loadGame.28f8774a.svg",se=t.p+"static/media/wK.3b342df8.svg",de=t.p+"static/media/wQ.785db365.svg",ue=t.p+"static/media/wB.56f72474.svg",le=t.p+"static/media/wR.33cf0258.svg",be=t.p+"static/media/wN.d5fa39eb.svg",pe=t.p+"static/media/wP.5f74a9fe.svg",ge=t.p+"static/media/bK.e57316c7.svg",fe=t.p+"static/media/bQ.c21470b8.svg",he=t.p+"static/media/bB.1f023e3e.svg",je=t.p+"static/media/bR.2724e583.svg",ve=t.p+"static/media/bN.a46c4723.svg",Oe=t.p+"static/media/bP.d9262a65.svg",me=t(0),xe=function(e){var n=e.undoMove,t=e.redoMove;return Object(me.jsxs)(me.Fragment,{children:[Object(me.jsxs)(X,{children:[Object(me.jsx)("div",{onClick:n,children:Object(me.jsx)("img",{src:te,alt:"Undo"})}),Object(me.jsx)("div",{onClick:t,children:Object(me.jsx)("img",{src:re,alt:"Redo"})}),Object(me.jsx)("div",{children:Object(me.jsx)("img",{src:ie,alt:"History"})}),Object(me.jsx)("div",{children:Object(me.jsx)("img",{src:oe,alt:"Reset"})}),Object(me.jsx)("div",{children:Object(me.jsx)("img",{src:ae,alt:"Flip"})})]}),Object(me.jsx)(Y,{children:Object(me.jsx)("div",{children:Object(me.jsx)("img",{src:ce,alt:"Load"})})})]})},ye=function(e){var n,t,i=Object(r.useState)(),o=Object(s.a)(i,2),a=o[0],d=o[1],l=Object(r.useState)("true"===Object.fromEntries(new URLSearchParams(window.location.search).entries()).editorMode||!1),b=Object(s.a)(l,2),p=b[0],g=(b[1],Object(r.useState)("menu")),f=Object(s.a)(g,2),h=f[0],j=(f[1],Q()),v=T({Agora:j}),O=J(),m=B(j,v),x=m.setBoardPosition,y=m.fen,w=(m.pgn,m.onDrop),S=m.onMouseOverSquare,q=m.onMouseOutSquare,P=m.squareStyles,k=m.onDragOverSquare,M=m.onSquareClick,D=m.onSquareRightClick,F=m.undoMove,C=m.redoMove;Object(r.useEffect)((function(){return E(),window.addEventListener("resize",E),function(){return window.removeEventListener("resize",E)}}),[]),Object(r.useEffect)((function(){var e,r=null===(e=window.document.getElementById("board-container"))||void 0===e?void 0:e.querySelector("div");n=null===r||void 0===r?void 0:r.firstElementChild,t=null===r||void 0===r?void 0:r.lastElementChild,n&&t&&(n.classList.add("black-spare-pieces"),t.classList.add("white-spare-pieces"),n.setAttribute("style",""),t.setAttribute("style",""))}),[window.document.getElementById("board-container")]);var E=function(){var e;d(null===(e=window.document.getElementById("board-container"))||void 0===e?void 0:e.clientWidth)},N={wK:function(e){var n=e.squareWidth;e.isDragging;return Object(me.jsx)("img",{style:{width:n,height:n},src:se,alt:"wK"})},wQ:function(e){var n=e.squareWidth;e.isDragging;return Object(me.jsx)("img",{style:{width:n,height:n},src:de,alt:"wQ"})},wB:function(e){var n=e.squareWidth;e.isDragging;return Object(me.jsx)("img",{style:{width:n,height:n},src:ue,alt:"wB"})},wR:function(e){var n=e.squareWidth;e.isDragging;return Object(me.jsx)("img",{style:{width:n,height:n},src:le,alt:"wR"})},wN:function(e){var n=e.squareWidth;e.isDragging;return Object(me.jsx)("img",{style:{width:n,height:n},src:be,alt:"wN"})},wP:function(e){var n=e.squareWidth;e.isDragging;return Object(me.jsx)("img",{style:{width:n,height:n},src:pe,alt:"wP"})},bK:function(e){var n=e.squareWidth;e.isDragging;return Object(me.jsx)("img",{style:{width:n,height:n},src:ge,alt:"bK"})},bQ:function(e){var n=e.squareWidth;e.isDragging;return Object(me.jsx)("img",{style:{width:n,height:n},src:fe,alt:"bQ"})},bB:function(e){var n=e.squareWidth;e.isDragging;return Object(me.jsx)("img",{style:{width:n,height:n},src:he,alt:"bB"})},bR:function(e){var n=e.squareWidth;e.isDragging;return Object(me.jsx)("img",{style:{width:n,height:n},src:je,alt:"bR"})},bN:function(e){var n=e.squareWidth;e.isDragging;return Object(me.jsx)("img",{style:{width:n,height:n},src:ve,alt:"bN"})},bP:function(e){var n=e.squareWidth;e.isDragging;return Object(me.jsx)("img",{style:{width:n,height:n},src:Oe,alt:"bP"})}},R=Object(c.a)(Object(c.a)(Object(c.a)({id:"board-0",position:p?O.boardPosition:y,dropOffBoard:p?"trash":"snapback",draggable:!0,lightSquareStyle:{backgroundColor:"#E8EDF9"},darkSquareStyle:{backgroundColor:"#B7C0D8"},pieces:N,boardStyle:{width:a,height:a,position:"relative"},width:a},p?{onDrop:O.onDrop}:{onDrop:w}),{},{orientation:p?O.orientation:"white"},!p&&{getPosition:x,onMouseOverSquare:S,onMouseOutSquare:q,squareStyles:P,onDragOverSquare:k,onSquareClick:M,onSquareRightClick:D}),{},{sparePieces:p});return Object(me.jsxs)(ne,{dimension:a,editorMode:p,children:[Object(me.jsx)("div",{id:"board-container",className:"board-container",children:Object(me.jsx)(u.a,Object(c.a)({},R))}),Object(me.jsx)(H,{editorMode:p,children:p?Object(me.jsxs)(Z,{children:[Object(me.jsx)("div",{className:"title",children:"Board Settings"}),Object(me.jsx)("div",{className:"divider"}),Object(me.jsxs)("div",{className:"slider",children:[Object(me.jsx)("div",{children:"Manual"}),Object(me.jsx)("div",{children:"Upload"})]}),Object(me.jsx)("label",{htmlFor:"inputFen",children:"Fen"}),Object(me.jsx)("div",{className:"input-fen",children:Object(me.jsx)("input",{name:"inputFen",type:"text",value:null===O||void 0===O?void 0:O.fen,onChange:function(e){O.setFenPosition(e.target.value)}})}),Object(me.jsxs)("div",{className:"btn-panel",children:[Object(me.jsx)("button",{onClick:O.reset,children:"Reset"}),Object(me.jsx)("button",{onClick:O.clear,children:"Clear"}),Object(me.jsx)("button",{onClick:null===O||void 0===O?void 0:O.flip,children:"Flip"})]})]}):Object(me.jsx)(me.Fragment,{children:"menu"===h&&Object(me.jsx)(xe,{undoMove:F,redoMove:C})})})]})};var we=function(){return Object(me.jsx)("div",{className:"app",children:Object(me.jsx)(ye,{})})},Se=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,68)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),r(e),i(e),o(e),a(e)}))};a.a.render(Object(me.jsx)(i.a.StrictMode,{children:Object(me.jsx)(we,{})}),document.getElementById("root")),Se()}},[[67,1,2]]]);
//# sourceMappingURL=main.c7528dab.chunk.js.map