(this["webpackJsonpbetter-chess"]=this["webpackJsonpbetter-chess"]||[]).push([[0],{41:function(e,n,t){},42:function(e,n,t){},68:function(e,n,t){"use strict";t.r(n);var r=t(2),i=t.n(r),o=t(28),a=t.n(o),c=(t(41),t(42),t(1)),s=t(3),d=t(29),u=t.n(d),l=t(30),b=t(13),p=t(5),g="abcdefgh".split("");function f(e){return"[object Object]"===Object.prototype.toString.call(e)}function j(e){return"string"===typeof e}function h(e){if(!function(e){var n,t;return!1!==f(e)&&(void 0===(n=e.constructor)||!1!==f(t=n.prototype)&&!1!==t.hasOwnProperty("isPrototypeOf"))}(e))return!1;for(var n in e)if(e.hasOwnProperty(n)&&(!j(r=n)||-1===r.search(/^[a-h][1-8]$/)||(!j(t=e[n])||-1===t.search(/^[bw][KQRNBP]$/))))return!1;var t,r;return!0}function v(e){var n=e.split("");return"w"===n[0]?n[1].toUpperCase():n[1].toLowerCase()}var O,x,m,y,w,S,q,P,k,M,C=function(e){if(!h(e))return!1;for(var n="",t=8,r=0;r<8;r++){for(var i=0;i<8;i++){var o=g[i]+t;e.hasOwnProperty(o)?n+=v(e[o]):n+="1"}7!==r&&(n+="/"),t-=1}return n=function(e){return e.replace(/11111111/g,"8").replace(/1111111/g,"7").replace(/111111/g,"6").replace(/11111/g,"5").replace(/1111/g,"4").replace(/111/g,"3").replace(/11/g,"2")}(n)},B=function(e){if(!function(e){if(!j(e))return!1;var n=(e=function(e){return e.replace(/8/g,"11111111").replace(/7/g,"1111111").replace(/6/g,"111111").replace(/5/g,"11111").replace(/4/g,"1111").replace(/3/g,"111").replace(/2/g,"11")}(e=e.replace(/ .+$/,""))).split("/");if(8!==n.length)return!1;for(var t=0;t<8;t++)if(8!==n[t].length||-1!==n[t].search(/[^kqrnbpKQRNBP1]/))return!1;return!0}(e))return!1;for(var n,t=(e=e.replace(/ .+$/,"")).split("/"),r={},i=8,o=0;o<8;o++){for(var a=t[o].split(""),c=0,s=0;s<a.length;s++){if(-1!==a[s].search(/[1-8]/))c+=parseInt(a[s],10);else r[g[c]+i]=(n=a[s]).toLowerCase()===n?"b"+n.toUpperCase():"w"+n.toUpperCase(),c+=1}i-=1}return r},D="BOARD_MOVE_UPDATE",F="BOARD_MOVE_UNDO",E=t(19),N="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",R=function(e){var n=e.pieceSquare,t=e.history,r=(t.length&&t[t.length-1].from,t.length&&t[t.length-1].to);return Object(c.a)(Object(p.a)({},n,{backgroundColor:"rgba(123,97,255,0.5)"}),t.length&&Object(p.a)({},r,{backgroundColor:"rgba(123,97,255,0.5)"}))},A=function(e,n){var t=Object(r.useState)(new E(N)),i=Object(s.a)(t,1)[0],o=Object(r.useState)(!1),a=Object(s.a)(o,2),d=a[0],u=a[1],g=Object(r.useState)({turn:i.turn()||"w",fen:"start",orientation:"white",pendingMove:void 0,dropSquareStyle:{},squareStyles:{},pieceSquare:"",square:"",history:[],boardPosition:{},pgn:[],undoMovesArray:[]}),f=Object(s.a)(g,2),j=f[0],h=f[1];Object(r.useEffect)((function(){console.log("POSITION: ",j.boardPosition,i.in_check(),i.turn()),i.in_check()&&O(i.turn())}),[j.boardPosition]),Object(r.useEffect)((function(){console.log("UNDO MOVES: ",j.undoMovesArray)}),[j.undoMovesArray]),Object(r.useEffect)((function(){var t;e.channel&&(null===(t=e.channel)||void 0===t||t.on("ChannelMessage",(function(e){var t,r=(t=e.text,JSON.parse(t));switch(r.type){case D:x({sourceSquare:r.json.move.from,targetSquare:r.json.move.to});break;case F:var o={chess:i,state:j,setState:h,undoArray:r.json.undoArray};n.undoMove(o);break;default:console.log("INVALID OPERATION")}})))}),[e.channel]),Object(r.useEffect)((function(){console.log("PENDING_MOVE: ",j.pendingMove)}),[j.pendingMove]);var v=function(){return u(!0)},O=function(e){var n=Object.keys(j.boardPosition).find((function(n){return j.boardPosition[n]==="".concat(e,"K")}));console.log("INCHECK: ",Object.keys(j.boardPosition).find((function(n){return j.boardPosition[n]==="".concat(e,"K")}))),h(Object(c.a)(Object(c.a)({},j),{},{squareStyles:Object(c.a)(Object(c.a)({},j.squareStyles),{},Object(p.a)({},n,{backgroundColor:"red"}))}))},x=function(e){for(var t=e.sourceSquare,r=e.targetSquare,o=(e.piece,i.move({from:t,to:r})),a=i.moves({verbose:!0}),s=0,d=a.length;s<d;s++)if(-1!==a[s].flags.indexOf("p")&&a[s].from===t)return h(Object(c.a)(Object(c.a)({},j),{},{pendingMove:{sourceSquare:t,targetSquare:r}})),void v();null!==o&&(h((function(e){var n,t=e.history,r=e.pieceSquare;return Object(c.a)(Object(c.a)({},j),{},{turn:i.turn(),fen:i.fen(),pgn:null===(n=i.pgn())||void 0===n?void 0:n.split(/\d\./),history:i.history({verbose:!0}),squareStyles:R({pieceSquare:r,history:t})})})),n.updateBoard(o))};return{turn:j.turn,fen:j.fen,pgn:j.pgn,orientation:j.orientation,squareStyles:j.squareStyles,pendingMove:j.pendingMove,promotionModal:d,setBoardPosition:function(e){h(Object(c.a)(Object(c.a)({},j),{},{boardPosition:e}))},reset:function(){h(Object(c.a)(Object(c.a)({},j),{},{fen:N,boardPosition:B(N)}))},flip:function(){h(Object(c.a)(Object(c.a)({},j),{},{orientation:"white"===j.orientation?"black":"white"}))},onDrop:x,onMouseOverSquare:function(e){var n=i.moves({square:e,verbose:!0});if(0!==n.length){var t,r=[],o=Object(l.a)(n);try{for(o.s();!(t=o.n()).done;){var a=t.value;r.push(a.to)}}catch(s){o.e(s)}finally{o.f()}!function(e,n){var t=[e].concat(Object(b.a)(n)).reduce((function(e,n){return Object(c.a)(Object(c.a)(Object(c.a)({},e),Object(p.a)({},n,{background:"radial-gradient(circle, rgb(123,97,255,0.5) 20%, transparent 0%)",borderRadius:"50%"})),R({history:j.history,pieceSquare:j.pieceSquare}))}),{});h((function(e){var n=e.squareStyles;return Object(c.a)(Object(c.a)({},j),{},{squareStyles:Object(c.a)(Object(c.a)({},n),t)})}))}(e,r)}},onMouseOutSquare:function(e){!function(){var e=Object.keys(j.boardPosition).find((function(e){return j.boardPosition[e]==="".concat(i.turn(),"K")}));h((function(n){var t=n.pieceSquare,r=n.history;return Object(c.a)(Object(c.a)({},j),{},{squareStyles:i.in_check()&&e?Object(p.a)({},e,j.squareStyles[e]):R({pieceSquare:t,history:r})})}))}()},onDragOverSquare:function(e){h(Object(c.a)(Object(c.a)({},j),{},{dropSquareStyle:"e4"===e||"d4"===e||"e5"===e||"d5"===e?{backgroundColor:"cornFlowerBlue"}:{boxShadow:"inset 0 0 1px 4px rgb(255, 255, 0)"}}))},onSquareClick:function(e){var t;h((function(n){var t=n.history;return Object(c.a)(Object(c.a)({},j),{},{squareStyles:Object(c.a)(Object(c.a)({},j.squareStyles),R({pieceSquare:e,history:t})),pieceSquare:e})}));for(var r=i.move({from:j.pieceSquare,to:e}),o=i.moves({verbose:!0}),a=0,s=o.length;a<s;a++)if(o[a].flags.includes("p")&&o[a].from===j.pieceSquare)return h(Object(c.a)(Object(c.a)({},j),{},{pendingMove:{sourceSquare:j.pieceSquare,targetSquare:e}})),void v();null!==r&&(h(Object(c.a)(Object(c.a)({},j),{},{turn:i.turn(),fen:i.fen(),pgn:null===(t=i.pgn())||void 0===t?void 0:t.split(/\d\./),history:i.history({verbose:!0}),pieceSquare:""})),n.updateBoard(r))},onSquareRightClick:function(e){return h(Object(c.a)(Object(c.a)({},j),{},{squareStyles:Object(p.a)({},e,{backgroundColor:"deepPink"})}))},undoMove:function(){var e=i.undo();e&&(h(Object(c.a)(Object(c.a)({},j),{},{fen:i.fen(),undoMovesArray:[].concat(Object(b.a)(j.undoMovesArray),[e])})),n.undoMoveMsg([].concat(Object(b.a)(j.undoMovesArray),[e])))},redoMove:function(){if(0!==j.undoMovesArray.length){var e=j.undoMovesArray.pop();if(console.log("REDO: ",e),e){var t=i.move(e);console.log("REDONE: ",t),null!==t&&(h((function(e){var n,t=e.history,r=e.pieceSquare;return Object(c.a)(Object(c.a)({},j),{},{fen:i.fen(),pgn:null===(n=i.pgn())||void 0===n?void 0:n.split(/\d\./),history:i.history({verbose:!0}),squareStyles:R({pieceSquare:r,history:t})})})),n.updateBoard(t))}}},promotion:function(e,n,t){var r=e,o=n;i.move({from:r,to:o,promotion:t}),h(Object(c.a)(Object(c.a)({},j),{},{fen:i.fen(),pendingMove:void 0})),u(!1)}}},I=t(16),K=t.n(I),L=t(31),W=t(32),_=t.n(W),Q=t(33),z=t.n(Q),T={messageParser:function(e){return{text:(n=e,JSON.stringify(n)),messageType:"TEXT"};var n}},U=function(){var e=Object(r.useState)(null),n=Object(s.a)(e,2),t=n[0],i=n[1],o=_.a.createInstance("f4b36b6c897e41bfaa3904d75da40777"),a={uid:(Math.floor(9e4*Math.random())+1e4).toString(),token:""};Object(r.useEffect)((function(){(function(){var e=Object(L.a)(K.a.mark((function e(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:z.a.get("https://agoratokenserver-demo.herokuapp.com/access_token?channel=test&uid=".concat(a.uid)).then((function(e){var n;console.log(e),a.token=(null===(n=e.data)||void 0===n?void 0:n.token)||"",o.login(a).then((function(){console.log("Login successful");var e=o.createChannel("test");e.join(),i(e)}))}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().then((function(){console.log("integrations successful")}))}),[]),Object(r.useEffect)((function(){t&&(null===t||void 0===t||t.on("MemberJoined",(function(e){console.log("New member joined: ",e)})),null===t||void 0===t||t.on("MemberLeft",(function(e){console.log("Member left: ",e)})))}),[t]);return{channel:t,playerMeta:a,sendChannelMessage:function(e,n){var r={uid:a.uid,json:e||{},type:n};console.log(T.messageParser(r)),null===t||void 0===t||t.sendMessage(T.messageParser(r)).then((function(){}))}}},J=function(e){var n=e.Agora;return{updateBoard:function(e){var t={move:e};null===n||void 0===n||n.sendChannelMessage(t,D)},undoMoveMsg:function(e){var t={undoArray:e};null===n||void 0===n||n.sendChannelMessage(t,F)},undoMove:function(e){var n=e.chess,t=e.state,r=e.setState,i=e.undoArray;n.undo()&&r(Object(c.a)(Object(c.a)({},t),{},{fen:n.fen(),undoMovesArray:i}))}}},V=t(19),$="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",H="8/8/8/8/8/8/8/8",G=function(){var e=Object(r.useState)(new V($)),n=(Object(s.a)(e,1)[0],Object(r.useState)({fen:$,orientation:"white",dropSquareStyle:{},squareStyles:{},pieceSquare:"",square:"",history:[],boardPosition:B($),pgn:[]})),t=Object(s.a)(n,2),i=t[0],o=t[1];Object(r.useEffect)((function(){console.log("BOARD_POSITION: ",C(i.boardPosition))}),[i.boardPosition]);return{fen:i.fen,pgn:i.pgn,boardPosition:i.boardPosition,orientation:i.orientation,onDrop:function(e){var n,t=e.sourceSquare,r=e.targetSquare,a=e.piece;console.log("EDITOR_ON_DROP: ",t,r,a),n="spare"===t?Object(c.a)(Object(c.a)({},i.boardPosition),{},Object(p.a)({},r,a)):Object(c.a)(Object(c.a)({},Object.fromEntries(Object.entries(i.boardPosition).filter((function(e){var n=Object(s.a)(e,2),r=n[0];n[1];return r!==t})))),{},Object(p.a)({},r,a)),console.log("BOARD_POSITION: ",n),o(Object(c.a)(Object(c.a)({},i),{},{fen:C(n)||i.fen,boardPosition:n}))},setBoardPosition:function(e){o(Object(c.a)(Object(c.a)({},i),{},{fen:C(e)||i.fen,boardPosition:e}))},setFenPosition:function(e){o(Object(c.a)(Object(c.a)({},i),{},{fen:e,boardPosition:B(e)}))},reset:function(){o(Object(c.a)(Object(c.a)({},i),{},{fen:$,boardPosition:B($)}))},clear:function(){o(Object(c.a)(Object(c.a)({},i),{},{fen:H,boardPosition:B(H)}))},flip:function(){o(Object(c.a)(Object(c.a)({},i),{},{orientation:"white"===i.orientation?"black":"white"}))}}},X=t(6),Y=t(7),Z=Object(Y.a)(O||(O=Object(X.a)(["\n  background-color: #2b2b34;\n  width: 386px;\n  border-radius: 0px 16px 16px 0px;\n"]))),ee=Y.b.div(x||(x=Object(X.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  ","\n"])),(function(e){return e.editorMode&&Z})),ne=Y.b.div(m||(m=Object(X.a)(["\n  div {\n    padding: 14px;\n    cursor: pointer;\n  }\n"]))),te=Y.b.div(y||(y=Object(X.a)(["\n  div {\n      padding: 14px;\n      cursor: pointer;\n    }\n"]))),re=Y.b.div(w||(w=Object(X.a)(["\n  position: relative;\n  width: 176px;\n  height: 242px;\n  background: #2B2B34;\n  border: 1.46px solid #424242;\n  box-sizing: border-box;\n  padding: 10px;\n  .title {\n    display: flex;\n    img {\n      margin-right: 3px;\n    }\n    font-weight: bold;\n    font-size: 18px;\n    line-height: 21px;\n    color: #ffffff; \n    margin-bottom: 11px;\n  }\n  .pgn {\n    color: #ffffff;\n    font-size: 20px;\n  }\n"]))),ie=Y.b.div(S||(S=Object(X.a)(["\n  position: absolute;\n  /* bottom: -52px; */\n  bottom: 0px;\n  left: -1.46px;\n  width: 176px;\n  height: 51px;\n  background: #2B2B34;\n  border: 1.46px solid #424242;\n  /* border-top: 0px; */\n  border-bottom: 0px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  padding: 13.14px;\n  img {\n    cursor: pointer;\n  }\n"]))),oe=Y.b.div(q||(q=Object(X.a)(["\n  padding: 26px;\n  height: 100%;\n  .title {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 24px;\n    line-height: 29px;\n    color: #FFFFFF;\n  }\n  .divider {\n    width: 100%;\n    height: 0.5px;\n    background: #FFFFFF;\n    opacity: 0.1;\n    margin: 13.5px 0;\n    margin-bottom: 156px;\n  }\n  .slider {\n    width: 100%;\n    height: 32px;\n    background: #E8EDF9;\n    border-radius: 10px;\n    display: flex;\n    /* margin-bottom: 156px; */\n    div {\n      width: 50%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n  }\n  label {\n   margin-bottom: 8px;\n   font-weight: 500;\n   font-size: 13px;\n   line-height: 16px;\n   text-transform: uppercase;\n   color: #FFFFFF;\n   opacity: 0.4;\n }\n .input-fen {\n   display: flex;\n   width: 100%;\n   margin-bottom: 24px;\n   input {\n     width: 100%;\n     height: 32px;\n     border-radius: 8px;\n   }\n }\n .output-fen {\n   display: flex;\n   align-items: center;\n   width: 100%;\n   height: 32px;\n   border-radius: 8px;\n   background: #ffffff;\n   overflow: hidden;\n   margin-bottom: 24px;\n   text-overflow: ellipsis;\n }\n  .btn-panel {\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n    button {    \n      width: 32%;\n      height: 40px;\n      color: #ffffff;\n      font-weight: 600;\n      font-size: 17px;\n      line-height: 20px;\n      background: #5656FF;\n      border: 1px solid rgba(255, 255, 255, 0.4);\n      box-sizing: border-box;\n      border-radius: 10px;\n    }\n  }\n"]))),ae=Object(Y.a)(P||(P=Object(X.a)(['\n  div[class$="-spare-pieces"] {\n    position: absolute;\n    width: 340px;\n    display: flex;\n    justify-content: space-between;\n    div[data-testid^="spare-"]:nth-child(odd) {\n      background: #b7c0d8;\n    }\n    div[data-testid^="spare-"]:nth-child(even) {\n      background: #e8edf9;\n    }\n    div {\n      /* width: 100%; */\n      margin: 2px;\n      border-radius: 12px;\n      div {\n        img {\n          padding: 8px 10px;\n          width: 26px !important;\n          height: 28px !important;\n        }\n      }\n    }\n  }\n']))),ce=Y.b.div(k||(k=Object(X.a)(["\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: #2B2B34;\n  padding: 10px;\n  border-radius: 12px;\n  z-index: 6;\n  div:nth-child(odd) {\n      background: #b7c0d8;\n    }\n  div:nth-child(even) {\n    background: #e8edf9;\n  }\n  div {\n    margin: 2px;\n    border-radius: 12px;\n    img {\n      cursor: pointer;\n      padding: 8px 10px;\n      width: 26px ;\n      height: 28px;\n    }\n  }\n"]))),se=Y.b.div(M||(M=Object(X.a)(['\n  display: flex;\n  /* width: 1000px; */\n  /* height: fit-content; */\n  max-width: 1440px;\n  background: black;\n  grid-template-columns: 66% 37%;\n  grid-template-areas: "board sidePanel";\n  .board-container {\n    position:relative;\n    min-width: 500px;\n    min-height: 500px;\n    grid-area: board;\n    border: 10px solid rgba(255, 255, 255);\n    div {\n      ',"\n      .black-spare-pieces {\n        left: ",";\n        bottom: ",";\n\n        /* background:grey; */\n      }\n      .white-spare-pieces {\n        left: ",";\n        bottom: ",";\n        /* background:grey; */\n      }\n    }  \n  }\n  \n  "," {\n    grid-area: sidePanel;\n    /* width: 100%; */\n    /* height: 100%; */\n  ",", "," {\n    background: #2b2b34;\n    border: 2px solid rgba(255, 255, 255, 0.1);\n    border-radius: 0 8px 8px 0;\n  }\n}\n"])),(function(e){return e.editorMode&&ae}),(function(e){return e.dimension?"".concat(e.dimension+32,"px"):"0px"}),(function(e){return e.dimension?"".concat(e.dimension-130,"px"):"0px"}),(function(e){return e.dimension?"".concat(e.dimension+32,"px"):"0px"}),(function(e){return e.dimension?"".concat(e.dimension-190,"px"):"0px"}),ee,ne,te),de=t.p+"static/media/undoMove.586eb02f.svg",ue=t.p+"static/media/redoMove.c6f42448.svg",le=t.p+"static/media/history.8223d0ff.svg",be=t.p+"static/media/resetBoard.7af0fcde.svg",pe=t.p+"static/media/flipBoard.c1ef8478.svg",ge=t.p+"static/media/loadGame.28f8774a.svg",fe=t.p+"static/media/wK.3b342df8.svg",je=t.p+"static/media/wQ.785db365.svg",he=t.p+"static/media/wB.56f72474.svg",ve=t.p+"static/media/wR.33cf0258.svg",Oe=t.p+"static/media/wN.d5fa39eb.svg",xe=t.p+"static/media/wP.5f74a9fe.svg",me=t.p+"static/media/bK.e57316c7.svg",ye=t.p+"static/media/bQ.c21470b8.svg",we=t.p+"static/media/bB.1f023e3e.svg",Se=t.p+"static/media/bR.2724e583.svg",qe=t.p+"static/media/bN.a46c4723.svg",Pe=t.p+"static/media/bP.d9262a65.svg",ke=t.p+"static/media/arrowLeft.7e025148.svg",Me=t.p+"static/media/arrowRight.ae8c68ee.svg",Ce=t(0),Be=function(e){var n=e.undoMove,t=e.redoMove,r=e.flip,i=e.reset,o=e.setSidePanelSection;return Object(Ce.jsxs)(Ce.Fragment,{children:[Object(Ce.jsxs)(ne,{children:[Object(Ce.jsx)("div",{onClick:n,children:Object(Ce.jsx)("img",{src:de,alt:"Undo"})}),Object(Ce.jsx)("div",{onClick:t,children:Object(Ce.jsx)("img",{src:ue,alt:"Redo"})}),Object(Ce.jsx)("div",{children:Object(Ce.jsx)("img",{src:le,alt:"History",onClick:function(){o("history")}})}),Object(Ce.jsx)("div",{children:Object(Ce.jsx)("img",{src:be,alt:"Reset",onClick:i})}),Object(Ce.jsx)("div",{children:Object(Ce.jsx)("img",{src:pe,alt:"Flip",onClick:r})})]}),Object(Ce.jsx)(te,{children:Object(Ce.jsx)("div",{children:Object(Ce.jsx)("img",{src:ge,alt:"Load"})})})]})},De=function(e){var n,t,i=Object(r.useState)(),o=Object(s.a)(i,2),a=o[0],d=o[1],l=Object(r.useState)("true"===Object.fromEntries(new URLSearchParams(window.location.search).entries()).editorMode||!1),b=Object(s.a)(l,2),p=b[0],g=(b[1],Object(r.useState)("menu")),f=Object(s.a)(g,2),j=f[0],h=f[1],v=U(),O=J({Agora:v}),x=G(),m=A(v,O),y=m.turn,w=m.setBoardPosition,S=m.reset,q=m.flip,P=m.orientation,k=m.pendingMove,M=m.fen,C=m.pgn,B=m.promotionModal,D=m.onDrop,F=m.onMouseOverSquare,E=m.onMouseOutSquare,N=m.squareStyles,R=m.onDragOverSquare,I=m.onSquareClick,K=m.onSquareRightClick,L=m.undoMove,W=m.redoMove,_=m.promotion;Object(r.useEffect)((function(){return Q(),window.addEventListener("resize",Q),function(){return window.removeEventListener("resize",Q)}}),[]),Object(r.useEffect)((function(){var e,r=null===(e=window.document.getElementById("board-container"))||void 0===e?void 0:e.querySelector("div");n=null===r||void 0===r?void 0:r.firstElementChild,t=null===r||void 0===r?void 0:r.lastElementChild,n&&t&&(n.classList.add("black-spare-pieces"),t.classList.add("white-spare-pieces"),n.setAttribute("style",""),t.setAttribute("style",""))}),[window.document.getElementById("board-container")]);var Q=function(){var e;d(null===(e=window.document.getElementById("board-container"))||void 0===e?void 0:e.clientWidth)},z={wK:function(e){var n=e.squareWidth;e.isDragging;return Object(Ce.jsx)("img",{style:{width:n,height:n},src:fe,alt:"wK"})},wQ:function(e){var n=e.squareWidth;e.isDragging;return Object(Ce.jsx)("img",{style:{width:n,height:n},src:je,alt:"wQ"})},wB:function(e){var n=e.squareWidth;e.isDragging;return Object(Ce.jsx)("img",{style:{width:n,height:n},src:he,alt:"wB"})},wR:function(e){var n=e.squareWidth;e.isDragging;return Object(Ce.jsx)("img",{style:{width:n,height:n},src:ve,alt:"wR"})},wN:function(e){var n=e.squareWidth;e.isDragging;return Object(Ce.jsx)("img",{style:{width:n,height:n},src:Oe,alt:"wN"})},wP:function(e){var n=e.squareWidth;e.isDragging;return Object(Ce.jsx)("img",{style:{width:n,height:n},src:xe,alt:"wP"})},bK:function(e){var n=e.squareWidth;e.isDragging;return Object(Ce.jsx)("img",{style:{width:n,height:n},src:me,alt:"bK"})},bQ:function(e){var n=e.squareWidth;e.isDragging;return Object(Ce.jsx)("img",{style:{width:n,height:n},src:ye,alt:"bQ"})},bB:function(e){var n=e.squareWidth;e.isDragging;return Object(Ce.jsx)("img",{style:{width:n,height:n},src:we,alt:"bB"})},bR:function(e){var n=e.squareWidth;e.isDragging;return Object(Ce.jsx)("img",{style:{width:n,height:n},src:Se,alt:"bR"})},bN:function(e){var n=e.squareWidth;e.isDragging;return Object(Ce.jsx)("img",{style:{width:n,height:n},src:qe,alt:"bN"})},bP:function(e){var n=e.squareWidth;e.isDragging;return Object(Ce.jsx)("img",{style:{width:n,height:n},src:Pe,alt:"bP"})}},T=Object(c.a)(Object(c.a)(Object(c.a)({id:"board-0",position:p?x.boardPosition:M,dropOffBoard:p?"trash":"snapback",draggable:!0,lightSquareStyle:{backgroundColor:"#E8EDF9"},darkSquareStyle:{backgroundColor:"#B7C0D8"},pieces:z,boardStyle:{width:a,height:a,position:"relative"},width:a,getPosition:p?x.setBoardPosition:w},p?{onDrop:x.onDrop}:{onDrop:D}),{},{orientation:p?x.orientation:P||"white"},!p&&{onMouseOverSquare:F,onMouseOutSquare:E,squareStyles:N,onDragOverSquare:R,onSquareClick:I,onSquareRightClick:K}),{},{sparePieces:p}),V=function(){var e;return Object(Ce.jsxs)(re,{children:[Object(Ce.jsxs)("div",{className:"title",children:[Object(Ce.jsx)("img",{src:le,alt:""}),"History"]}),Object(Ce.jsx)("div",{className:"pgn",children:null===C||void 0===C||null===(e=C.map)||void 0===e?void 0:e.call(C,(function(e,n){return 0!==n&&Object(Ce.jsx)("div",{children:"".concat(n,". ").concat(e)})}))}),Object(Ce.jsxs)(ie,{children:[Object(Ce.jsx)("img",{src:ke,alt:"",onClick:function(){h("menu")}}),Object(Ce.jsx)("img",{src:Me,alt:""})]})]})};return Object(Ce.jsxs)(se,{dimension:a,editorMode:p,children:[Object(Ce.jsxs)("div",{id:"board-container",className:"board-container",children:[B&&Object(Ce.jsxs)(ce,{children:[Object(Ce.jsx)("div",{children:Object(Ce.jsx)("img",{src:"w"===y?je:ye,alt:"",width:a&&a/8,height:a&&a/8,onClick:function(){k&&_(k.sourceSquare,k.targetSquare,"q")}})}),Object(Ce.jsx)("div",{children:Object(Ce.jsx)("img",{src:"w"===y?he:we,alt:"",width:a&&a/8,height:a&&a/8,onClick:function(){k&&_(k.sourceSquare,k.targetSquare,"b")}})}),Object(Ce.jsx)("div",{children:Object(Ce.jsx)("img",{src:"w"===y?ve:Se,alt:"",width:a&&a/8,height:a&&a/8,onClick:function(){k&&_(k.sourceSquare,k.targetSquare,"r")}})}),Object(Ce.jsx)("div",{children:Object(Ce.jsx)("img",{src:"w"===y?Oe:qe,alt:"",width:a&&a/8,height:a&&a/8,onClick:function(){k&&_(k.sourceSquare,k.targetSquare,"n")}})})]}),Object(Ce.jsx)(u.a,Object(c.a)({},T))]}),Object(Ce.jsx)(ee,{editorMode:p,children:p?Object(Ce.jsxs)(oe,{children:[Object(Ce.jsx)("div",{className:"title",children:"Board Settings"}),Object(Ce.jsx)("div",{className:"divider"}),Object(Ce.jsx)("label",{htmlFor:"inputFen",children:"Fen"}),Object(Ce.jsx)("div",{className:"input-fen",children:Object(Ce.jsx)("input",{name:"inputFen",type:"text",value:null===x||void 0===x?void 0:x.fen,onChange:function(e){x.setFenPosition(e.target.value)}})}),Object(Ce.jsxs)("div",{className:"btn-panel",children:[Object(Ce.jsx)("button",{onClick:x.reset,children:"Reset"}),Object(Ce.jsx)("button",{onClick:x.clear,children:"Clear"}),Object(Ce.jsx)("button",{onClick:null===x||void 0===x?void 0:x.flip,children:"Flip"})]})]}):Object(Ce.jsx)(Ce.Fragment,{children:function(){switch(j){case"menu":return Object(Ce.jsx)(Be,{undoMove:L,redoMove:W,reset:S,flip:q,setSidePanelSection:h});case"history":return Object(Ce.jsx)(V,{});default:return Object(Ce.jsx)(Be,{undoMove:L,redoMove:W,reset:S,flip:q,setSidePanelSection:h})}}()})})]})};var Fe=function(){return Object(Ce.jsx)("div",{className:"app",children:Object(Ce.jsx)(De,{})})},Ee=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,69)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),r(e),i(e),o(e),a(e)}))};a.a.render(Object(Ce.jsx)(i.a.StrictMode,{children:Object(Ce.jsx)(Fe,{})}),document.getElementById("root")),Ee()}},[[68,1,2]]]);
//# sourceMappingURL=main.0ef89055.chunk.js.map