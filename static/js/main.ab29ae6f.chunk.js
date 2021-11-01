(this["webpackJsonpbetter-chess"]=this["webpackJsonpbetter-chess"]||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(27),i=n.n(o),s=(n(39),n(40),n(1)),c=n(4),u=n(28),d=n.n(u),l=n(5),g=n(11);"abcdefgh".split("");var b,h,v="BOARD_MOVE_UPDATE",f="BOARD_MOVE_UNDO",p=n(41),j=function(e){var t=e.pieceSquare,n=e.history,r=(n.length&&n[n.length-1].from,n.length&&n[n.length-1].to);return Object(s.a)(Object(l.a)({},t,{backgroundColor:"rgba(123,97,255,0.5)"}),n.length&&Object(l.a)({},r,{backgroundColor:"rgba(123,97,255,0.5)"}))},O=function(e,t){var n=Object(r.useState)(new p("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")),a=Object(c.a)(n,1)[0],o=Object(r.useState)({fen:"start",dropSquareStyle:{},squareStyles:{},pieceSquare:"",square:"",history:[],boardPosition:{},pgn:[],undoMovesArray:[]}),i=Object(c.a)(o,2),u=i[0],d=i[1];Object(r.useEffect)((function(){console.log("UNDO MOVES: ",u.undoMovesArray)}),[u.undoMovesArray]),Object(r.useEffect)((function(){var n;e.channel&&(null===(n=e.channel)||void 0===n||n.on("ChannelMessage",(function(e){var n,r=(n=e.text,JSON.parse(n));switch(r.type){case v:h({sourceSquare:r.json.move.from,targetSquare:r.json.move.to});break;case f:var o={chess:a,state:u,setState:d,undoArray:r.json.undoArray};t.undoMove(o);break;default:console.log("INVALID OPERATION")}})))}),[e.channel]);var b=function(e,t,n){var r=e,o=t;a.move({from:r,to:o,promotion:n}),d(Object(s.a)(Object(s.a)({},u),{},{fen:a.fen()}))},h=function(e){for(var n=e.sourceSquare,r=e.targetSquare,o=(e.piece,a.move({from:n,to:r})),i=a.moves({verbose:!0}),c=0,l=i.length;c<l;c++)if(-1!==i[c].flags.indexOf("p")&&i[c].from===n)return void b(n,r,"r");null!==o&&(d((function(e){var t,n=e.history,r=e.pieceSquare;return Object(s.a)(Object(s.a)({},u),{},{fen:a.fen(),pgn:null===(t=a.pgn())||void 0===t?void 0:t.split(/\d\./),history:a.history({verbose:!0}),squareStyles:j({pieceSquare:r,history:n})})})),t.updateBoard(o))};return{setBoardPosition:function(e){console.log("BOARD POSITION: ",e),d(Object(s.a)(Object(s.a)({},u),{},{boardPosition:e}))},fen:u.fen,pgn:u.pgn,onDrop:h,onMouseOverSquare:function(e){var t=a.moves({square:e,verbose:!0});if(0!==t.length){for(var n=[],r=0;r<t.length;r++)n.push(t[r].to);!function(e,t){var n=[e].concat(Object(g.a)(t)).reduce((function(e,t){return Object(s.a)(Object(s.a)(Object(s.a)({},e),Object(l.a)({},t,{background:"radial-gradient(circle, rgb(123,97,255,0.5) 20%, transparent 0%)",borderRadius:"50%"})),j({history:u.history,pieceSquare:u.pieceSquare}))}),{});d((function(e){var t=e.squareStyles;return Object(s.a)(Object(s.a)({},u),{},{squareStyles:Object(s.a)(Object(s.a)({},t),n)})}))}(e,n)}},onMouseOutSquare:function(e){d((function(e){var t=e.pieceSquare,n=e.history;return Object(s.a)(Object(s.a)({},u),{},{squareStyles:j({pieceSquare:t,history:n})})}))},squareStyles:u.squareStyles,onDragOverSquare:function(e){d(Object(s.a)(Object(s.a)({},u),{},{dropSquareStyle:"e4"===e||"d4"===e||"e5"===e||"d5"===e?{backgroundColor:"cornFlowerBlue"}:{boxShadow:"inset 0 0 1px 4px rgb(255, 255, 0)"}}))},onSquareClick:function(e){var n;d((function(t){var n=t.history;return Object(s.a)(Object(s.a)({},u),{},{squareStyles:j({pieceSquare:e,history:n}),pieceSquare:e})}));for(var r=a.move({from:u.pieceSquare,to:e}),o=a.moves({verbose:!0}),i=0,c=o.length;i<c;i++)if(-1!==o[i].flags.indexOf("p")&&o[i].from===u.pieceSquare)return void b(u.pieceSquare,e,"r");null!==r&&(d(Object(s.a)(Object(s.a)({},u),{},{fen:a.fen(),pgn:null===(n=a.pgn())||void 0===n?void 0:n.split(/\d\./),history:a.history({verbose:!0}),pieceSquare:""})),t.updateBoard(r))},onSquareRightClick:function(e){return d(Object(s.a)(Object(s.a)({},u),{},{squareStyles:Object(l.a)({},e,{backgroundColor:"deepPink"})}))},undoMove:function(){var e=a.undo();e&&(d(Object(s.a)(Object(s.a)({},u),{},{fen:a.fen(),undoMovesArray:[].concat(Object(g.a)(u.undoMovesArray),[e])})),t.undoMoveMsg([].concat(Object(g.a)(u.undoMovesArray),[e])))},redoMove:function(){if(0!==u.undoMovesArray.length){var e=u.undoMovesArray.pop();if(console.log("REDO: ",e),e){var n=a.move(e);console.log("REDONE: ",n),null!==n&&(d((function(e){var t,n=e.history,r=e.pieceSquare;return Object(s.a)(Object(s.a)({},u),{},{fen:a.fen(),pgn:null===(t=a.pgn())||void 0===t?void 0:t.split(/\d\./),history:a.history({verbose:!0}),squareStyles:j({pieceSquare:r,history:n})})})),t.updateBoard(n))}}}}},y=n(14),S=n.n(y),m=n(29),q=n(30),w=n.n(q),x=n(31),M=n.n(x),k={messageParser:function(e){return{text:(t=e,JSON.stringify(t)),messageType:"TEXT"};var t}},D=function(){var e=Object(r.useState)(null),t=Object(c.a)(e,2),n=t[0],a=t[1],o=w.a.createInstance("f4b36b6c897e41bfaa3904d75da40777"),i={uid:(Math.floor(9e4*Math.random())+1e4).toString(),token:""};Object(r.useEffect)((function(){(function(){var e=Object(m.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:M.a.get("https://agoratokenserver-demo.herokuapp.com/access_token?channel=test&uid=".concat(i.uid)).then((function(e){var t;console.log(e),i.token=(null===(t=e.data)||void 0===t?void 0:t.token)||"",o.login(i).then((function(){console.log("Login successful");var e=o.createChannel("test");e.join(),a(e)}))}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().then((function(){console.log("integrations successful")}))}),[]),Object(r.useEffect)((function(){n&&(null===n||void 0===n||n.on("MemberJoined",(function(e){console.log("New member joined: ",e)})),null===n||void 0===n||n.on("MemberLeft",(function(e){console.log("Member left: ",e)})))}),[n]);return{channel:n,playerMeta:i,sendChannelMessage:function(e,t){var r={uid:i.uid,json:e||{},type:t};console.log(k.messageParser(r)),null===n||void 0===n||n.sendMessage(k.messageParser(r)).then((function(){}))}}},P=function(e){var t=e.Agora;return{updateBoard:function(e){var n={move:e};null===t||void 0===t||t.sendChannelMessage(n,v)},undoMoveMsg:function(e){var n={undoArray:e};null===t||void 0===t||t.sendChannelMessage(n,f)},undoMove:function(e){var t=e.chess,n=e.state,r=e.setState,a=e.undoArray;t.undo()&&r(Object(s.a)(Object(s.a)({},n),{},{fen:t.fen(),undoMovesArray:a}))}}},C=n(15),B=n(16),A=B.a.div(b||(b=Object(C.a)(['\n  display: grid;\n  width: 1000px;\n  height: 600px;\n  max-width: 1440px;\n  background: black;\n  grid-template-columns: 66% 37%;\n  grid-template-areas: "board sidePanel";\n  .board-container {\n    position:relative;\n    grid-area: board;\n    border: 10px solid rgba(255, 255, 255);\n\n    div { \n      div[class$="-spare-pieces"]{\n        position: absolute;\n        width: 536px;\n        display: flex;\n        justify-content: space-around;\n          div{\n            width: 100%;\n            img {\n              width: 45px ;\n              height: 47.28px ;\n            }\n        }\n      }\n      .black-spare-pieces {\n        left: 930px;\n        /* background:grey; */\n      }\n      .white-spare-pieces{\n        left: 930px;\n        bottom: 697.5px;\n        /* background:grey; */\n        \n      }\n    }\n  }\n  \n  \n  .side-panel {\n    grid-area: sidePanel;\n    width: 100%;\n    height: 100%;\n    background: #2b2b34;\n    border: 2px solid rgba(255, 255, 255, 0.1);\n    border-radius: 0 24px 24px 0;\n  }\n']))),E=(B.a.div(h||(h=Object(C.a)(["\n  color: white;\n"]))),n.p+"static/media/wK.3b342df8.svg"),N=n.p+"static/media/wQ.785db365.svg",R=n.p+"static/media/wB.56f72474.svg",W=n.p+"static/media/wR.33cf0258.svg",I=n.p+"static/media/wN.d5fa39eb.svg",K=n.p+"static/media/wP.5f74a9fe.svg",Q=n.p+"static/media/bK.e57316c7.svg",T=n.p+"static/media/bQ.c21470b8.svg",F=n.p+"static/media/bB.1f023e3e.svg",L=n.p+"static/media/bR.2724e583.svg",J=n.p+"static/media/bN.a46c4723.svg",_=n.p+"static/media/bP.d9262a65.svg",U=n(2),V=function(e){var t=Object(r.useState)(),n=Object(c.a)(t,2),a=n[0],o=n[1],i=Object(r.useState)(!1),u=Object(c.a)(i,2),l=(u[0],u[1],D()),g=P({Agora:l}),b=O(l,g),h=b.setBoardPosition,v=b.fen,f=(b.pgn,b.onDrop),p=b.onMouseOverSquare,j=b.onMouseOutSquare,y=b.squareStyles,S=b.onDragOverSquare,m=b.onSquareClick,q=b.onSquareRightClick,w=b.undoMove,x=b.redoMove;Object(r.useEffect)((function(){return M(),window.addEventListener("resize",M),function(){return window.removeEventListener("resize",M)}}),[]);var M=function(){var e;o(null===(e=window.document.getElementById("board-container"))||void 0===e?void 0:e.clientWidth)},k={id:"board-0",position:v,draggable:!0,getPosition:h,lightSquareStyle:{backgroundColor:"#E8EDF9"},darkSquareStyle:{backgroundColor:"#B7C0D8"},pieces:{wK:function(e){var t=e.squareWidth;e.isDragging;return Object(U.jsx)("img",{style:{width:t,height:t},src:E,alt:"wK"})},wQ:function(e){var t=e.squareWidth;e.isDragging;return Object(U.jsx)("img",{style:{width:t,height:t},src:N,alt:"wQ"})},wB:function(e){var t=e.squareWidth;e.isDragging;return Object(U.jsx)("img",{style:{width:t,height:t},src:R,alt:"wB"})},wR:function(e){var t=e.squareWidth;e.isDragging;return Object(U.jsx)("img",{style:{width:t,height:t},src:W,alt:"wR"})},wN:function(e){var t=e.squareWidth;e.isDragging;return Object(U.jsx)("img",{style:{width:t,height:t},src:I,alt:"wN"})},wP:function(e){var t=e.squareWidth;e.isDragging;return Object(U.jsx)("img",{style:{width:t,height:t},src:K,alt:"wP"})},bK:function(e){var t=e.squareWidth;e.isDragging;return Object(U.jsx)("img",{style:{width:t,height:t},src:Q,alt:"bK"})},bQ:function(e){var t=e.squareWidth;e.isDragging;return Object(U.jsx)("img",{style:{width:t,height:t},src:T,alt:"bQ"})},bB:function(e){var t=e.squareWidth;e.isDragging;return Object(U.jsx)("img",{style:{width:t,height:t},src:F,alt:"bB"})},bR:function(e){var t=e.squareWidth;e.isDragging;return Object(U.jsx)("img",{style:{width:t,height:t},src:L,alt:"bR"})},bN:function(e){var t=e.squareWidth;e.isDragging;return Object(U.jsx)("img",{style:{width:t,height:t},src:J,alt:"bN"})},bP:function(e){var t=e.squareWidth;e.isDragging;return Object(U.jsx)("img",{style:{width:t,height:t},src:_,alt:"bP"})}},boardStyle:{width:a,height:a,position:"relative"},width:a,onDrop:f,onMouseOverSquare:p,onMouseOutSquare:j,squareStyles:y,onDragOverSquare:S,onSquareClick:m,onSquareRightClick:q};return Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)(A,{children:[Object(U.jsx)("div",{id:"board-container",className:"board-container",children:Object(U.jsx)(d.a,Object(s.a)({},k))}),Object(U.jsxs)("div",{className:"side-panel",children:[Object(U.jsx)("h1",{onClick:w,children:"Undo"}),Object(U.jsx)("h1",{onClick:x,children:"Redo"}),Object(U.jsx)("div",{})]})]})})};var z=function(){return Object(U.jsx)("div",{className:"app",children:Object(U.jsx)(V,{})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)}))};i.a.render(Object(U.jsx)(a.a.StrictMode,{children:Object(U.jsx)(z,{})}),document.getElementById("root")),X()}},[[67,1,2]]]);
//# sourceMappingURL=main.ab29ae6f.chunk.js.map