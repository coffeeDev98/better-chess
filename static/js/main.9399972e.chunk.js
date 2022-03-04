(this["webpackJsonpbetter-chess"]=this["webpackJsonpbetter-chess"]||[]).push([[0],{47:function(e,n,t){},48:function(e,n,t){},81:function(e,n,t){"use strict";t.r(n);var o=t(2),r=t.n(o),i=t(34),a=t.n(i),c=(t(47),t(48),t(0)),s=t(3),d=t(35),u=t.n(d),l=t(36),b=t(14),f=t(5),p="abcdefgh".split("");function g(e){return"[object Object]"===Object.prototype.toString.call(e)}function h(e){return"string"===typeof e}function v(e){if(!function(e){var n,t;return!1!==g(e)&&(void 0===(n=e.constructor)||!1!==g(t=n.prototype)&&!1!==t.hasOwnProperty("isPrototypeOf"))}(e))return!1;for(var n in e)if(e.hasOwnProperty(n)&&(!h(o=n)||-1===o.search(/^[a-h][1-8]$/)||(!h(t=e[n])||-1===t.search(/^[bw][KQRNBP]$/))))return!1;var t,o;return!0}function j(e){var n=e.split("");return"w"===n[0]?n[1].toUpperCase():n[1].toLowerCase()}var O,m,x,y,w,S,q,P,M,k,N=function(e){if(!v(e))return!1;for(var n="",t=8,o=0;o<8;o++){for(var r=0;r<8;r++){var i=p[r]+t;e.hasOwnProperty(i)?n+=j(e[i]):n+="1"}7!==o&&(n+="/"),t-=1}return n=function(e){return e.replace(/11111111/g,"8").replace(/1111111/g,"7").replace(/111111/g,"6").replace(/11111/g,"5").replace(/1111/g,"4").replace(/111/g,"3").replace(/11/g,"2")}(n)},E=function(e){if(!function(e){if(!h(e))return!1;var n=(e=function(e){return e.replace(/8/g,"11111111").replace(/7/g,"1111111").replace(/6/g,"111111").replace(/5/g,"11111").replace(/4/g,"1111").replace(/3/g,"111").replace(/2/g,"11")}(e=e.replace(/ .+$/,""))).split("/");if(8!==n.length)return!1;for(var t=0;t<8;t++)if(8!==n[t].length||-1!==n[t].search(/[^kqrnbpKQRNBP1]/))return!1;return!0}(e))return!1;for(var n,t=(e=e.replace(/ .+$/,"")).split("/"),o={},r=8,i=0;i<8;i++){for(var a=t[i].split(""),c=0,s=0;s<a.length;s++){if(-1!==a[s].search(/[1-8]/))c+=parseInt(a[s],10);else o[p[c]+r]=(n=a[s]).toLowerCase()===n?"b"+n.toUpperCase():"w"+n.toUpperCase(),c+=1}r-=1}return o},C="BOARD_MOVE_UPDATE",R="BOARD_MOVE_UNDO",B=function(){var e,n=Object(o.useState)({history:[],plyNumber:0,moveNumber:0,lastMove:void 0}),t=Object(s.a)(n,2),r=t[0],i=t[1];Object(o.useEffect)((function(){console.log("usePGN: ",r)}),[r]);var a=function(n,t){e={fen:t,color:n.color,flags:n.flags,from:n.from,next:void 0,piece:n.piece,ply:++r.plyNumber,moveNumber:"w"===n.color?++r.moveNumber:r.moveNumber,previous:r.lastMove||void 0,san:n.san,to:n.to,rav:void 0,ravs:[]}},d=function e(n,t){return n.forEach((function(o){var i;o.rav&&e(o.rav,t),o.fen===(null===(i=r.lastMove)||void 0===i?void 0:i.fen)&&(o.next=t,n.push(t))})),n},u=function e(n){return console.log("usePGN STATE.LASTMOVE: ",r.lastMove),console.log("usePGN TRAVERSING: ",n),n.map((function(n){var t,o;return console.log("usePGN CHECKING: ",n),n.rav?e(n.rav):n.fen===(null===(t=r.lastMove)||void 0===t||null===(o=t.previous)||void 0===o?void 0:o.fen)&&n})).filter((function(e){return!1!==e}))[0]};return{history:r.history,lastMove:r.lastMove,addMove:function(n,t){if(a(n,t),e)if(0===r.history.length)i(Object(c.a)(Object(c.a)({},r),{},{history:[e],lastMove:e}));else if(r.history.length>0&&r.lastMove){var o=d(r.history,e);i(Object(c.a)(Object(c.a)({},r),{},{lastMove:e,history:o})),console.log("usePGN NEWHISTORY: ",o)}},addVariation:function(n,t,o){console.log("usePGN addVariation called"),a(t,o),n&&i(Object(c.a)(Object(c.a)({},r),{},{history:r.history.map((function(t){if(t.fen===n.fen&&e){var o=t;return o.rav=[e],o}return t})),lastMove:e}))},undoMove:function(){var e,n;console.log("usePGN LASTMOVE: ",u(r.history)),i(Object(c.a)(Object(c.a)({},r),{},{lastMove:u(r.history),plyNumber:--r.plyNumber,moveNumber:(null===(e=r.lastMove)||void 0===e?void 0:e.color)&&("b"===(null===(n=r.lastMove)||void 0===n?void 0:n.color)?--r.moveNumber:r.moveNumber)||r.moveNumber}))}}},D=t(22),A="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",I=function(e){var n=e.pieceSquare,t=e.history,o=(t.length&&t[t.length-1].from,t.length&&t[t.length-1].to);return Object(c.a)(Object(f.a)({},n,{backgroundColor:"rgba(123,97,255,0.5)"}),t.length&&Object(f.a)({},o,{backgroundColor:"rgba(123,97,255,0.5)"}))},L=function(e,n){var t=Object(o.useState)(new D(A)),r=Object(s.a)(t,1)[0],i=B(),a=Object(o.useState)(!1),d=Object(s.a)(a,2),u=d[0],p=d[1],g=Object(o.useState)({turn:r.turn()||"w",fen:"start",orientation:"white",pendingMove:void 0,dropSquareStyle:{},squareStyles:{},pieceSquare:"",square:"",history:[],boardPosition:{},pgn:"",undoMovesArray:[]}),h=Object(s.a)(g,2),v=h[0],j=h[1];Object(o.useEffect)((function(){r&&Object.fromEntries(new URLSearchParams(window.location.search).entries()).fen&&(r.load(Object.fromEntries(new URLSearchParams(window.location.search).entries()).fen),j(Object(c.a)(Object(c.a)({},v),{},{fen:Object.fromEntries(new URLSearchParams(window.location.search).entries()).fen})))}),[r]),Object(o.useEffect)((function(){console.log("POSITION: ",v.boardPosition,r.in_check(),r.turn()),r.in_check()&&m(r.turn())}),[v.boardPosition]),Object(o.useEffect)((function(){console.log("UNDO MOVES: ",v.undoMovesArray)}),[v.undoMovesArray]),Object(o.useEffect)((function(){var t;e.channel&&(null===(t=e.channel)||void 0===t||t.on("ChannelMessage",(function(e){var t,o=(t=e.text,JSON.parse(t));switch(o.type){case C:x({sourceSquare:o.json.move.from,targetSquare:o.json.move.to});break;case R:var a={chess:r,state:v,setState:j,undoArray:o.json.undoArray};i.undoMove(),n.undoMove(a);break;default:console.log("INVALID OPERATION")}})))}),[e.channel]),Object(o.useEffect)((function(){console.log("PGN: ",v.pgn)}),[v.pgn]);var O=function(){return p(!0)},m=function(e){var n=Object.keys(v.boardPosition).find((function(n){return v.boardPosition[n]==="".concat(e,"K")}));console.log("INCHECK: ",Object.keys(v.boardPosition).find((function(n){return v.boardPosition[n]==="".concat(e,"K")}))),j(Object(c.a)(Object(c.a)({},v),{},{squareStyles:Object(c.a)(Object(c.a)({},v.squareStyles),{},Object(f.a)({},n,{backgroundColor:"red"}))}))},x=function(e){var t,o,a,s=e.sourceSquare,d=e.targetSquare,u=(e.piece,r.move({from:s,to:d}));console.log("MOVE: ",u);for(var l=r.moves({verbose:!0}),b=0,f=l.length;b<f;b++)if(-1!==l[b].flags.indexOf("p")&&l[b].from===s)return j(Object(c.a)(Object(c.a)({},v),{},{pendingMove:{sourceSquare:s,targetSquare:d}})),void O();if(null!==u){void 0!==(null===(t=i.lastMove)||void 0===t?void 0:t.next)&&(null===(o=i.lastMove)||void 0===o||null===(a=o.next)||void 0===a?void 0:a.san)!==u.san?i.addVariation(i.lastMove,u,r.fen()):i.addMove(u,r.fen()),j((function(e){var n=e.history,t=e.pieceSquare;return Object(c.a)(Object(c.a)({},v),{},{turn:r.turn(),fen:r.fen(),pgn:r.pgn(),history:r.history({verbose:!0}),squareStyles:I({pieceSquare:t,history:n})})}));var p=[];l.forEach((function(e){r.move(e),p.push(r.fen()),r.undo()})),console.log("FENS: ",p),n.updateBoard(u)}};return{turn:v.turn,fen:v.fen,pgn:v.pgn,history:v.history,orientation:v.orientation,squareStyles:v.squareStyles,pendingMove:v.pendingMove,promotionModal:u,setBoardPosition:function(e){j(Object(c.a)(Object(c.a)({},v),{},{boardPosition:e}))},reset:function(){r.reset(),j(Object(c.a)(Object(c.a)({},v),{},{fen:A,boardPosition:E(A)}))},flip:function(){j(Object(c.a)(Object(c.a)({},v),{},{orientation:"white"===v.orientation?"black":"white"}))},onDrop:x,onMouseOverSquare:function(e){var n=r.moves({square:e,verbose:!0});if(console.log("MOVES: ",n),0!==n.length){var t,o=[],i=Object(l.a)(n);try{for(i.s();!(t=i.n()).done;){var a=t.value;o.push(a.to)}}catch(s){i.e(s)}finally{i.f()}!function(e,n){var t=[e].concat(Object(b.a)(n)).reduce((function(e,n){return Object(c.a)(Object(c.a)(Object(c.a)({},e),Object(f.a)({},n,{background:"radial-gradient(circle, rgb(123,97,255,0.5) 20%, transparent 0%)",borderRadius:"50%"})),I({history:v.history,pieceSquare:v.pieceSquare}))}),{});j((function(e){var n=e.squareStyles;return Object(c.a)(Object(c.a)({},v),{},{squareStyles:Object(c.a)(Object(c.a)({},n),t)})}))}(e,o)}},onMouseOutSquare:function(e){!function(){var e=Object.keys(v.boardPosition).find((function(e){return v.boardPosition[e]==="".concat(r.turn(),"K")}));j((function(n){var t=n.pieceSquare,o=n.history;return Object(c.a)(Object(c.a)({},v),{},{squareStyles:r.in_check()&&e?Object(f.a)({},e,v.squareStyles[e]):I({pieceSquare:t,history:o})})}))}()},onDragOverSquare:function(e){j(Object(c.a)(Object(c.a)({},v),{},{dropSquareStyle:"e4"===e||"d4"===e||"e5"===e||"d5"===e?{backgroundColor:"cornFlowerBlue"}:{boxShadow:"inset 0 0 1px 4px rgb(255, 255, 0)"}}))},onSquareClick:function(e){j((function(n){var t=n.history;return Object(c.a)(Object(c.a)({},v),{},{squareStyles:Object(c.a)(Object(c.a)({},v.squareStyles),I({pieceSquare:e,history:t})),pieceSquare:e})}));for(var t=r.move({from:v.pieceSquare,to:e}),o=r.moves({verbose:!0}),a=0,s=o.length;a<s;a++)if(o[a].flags.includes("p")&&o[a].from===v.pieceSquare)return j(Object(c.a)(Object(c.a)({},v),{},{pendingMove:{sourceSquare:v.pieceSquare,targetSquare:e}})),void O();null!==t&&(i.addMove(t,r.fen()),j(Object(c.a)(Object(c.a)({},v),{},{turn:r.turn(),fen:r.fen(),pgn:r.pgn(),history:r.history({verbose:!0}),pieceSquare:""})),n.updateBoard(t))},onSquareRightClick:function(e){return j(Object(c.a)(Object(c.a)({},v),{},{squareStyles:Object(f.a)({},e,{backgroundColor:"deepPink"})}))},undoMove:function(){var e=r.undo();e&&(i.undoMove(),j(Object(c.a)(Object(c.a)({},v),{},{fen:r.fen(),undoMovesArray:[].concat(Object(b.a)(v.undoMovesArray),[e])})),n.undoMoveMsg([].concat(Object(b.a)(v.undoMovesArray),[e])))},redoMove:function(){if(0!==v.undoMovesArray.length){var e=v.undoMovesArray.pop();if(console.log("REDO: ",e),e){var t=r.move(e);console.log("REDONE: ",t),null!==t&&(j((function(e){var n=e.history,t=e.pieceSquare;return Object(c.a)(Object(c.a)({},v),{},{fen:r.fen(),pgn:r.pgn(),history:r.history({verbose:!0}),squareStyles:I({pieceSquare:t,history:n})})})),n.updateBoard(t))}}},promotion:function(e,n,t){var o=e,i=n;r.move({from:o,to:i,promotion:t}),j(Object(c.a)(Object(c.a)({},v),{},{fen:r.fen(),pendingMove:void 0})),p(!1)}}},F=t(18),T=t.n(F),K=t(37),W=t(38),V=t.n(W),z=t(39),Q=t.n(z),_={messageParser:function(e){return{text:(n=e,JSON.stringify(n)),messageType:"TEXT"};var n}},G=function(){var e=Object(o.useState)(null),n=Object(s.a)(e,2),t=n[0],r=n[1],i=V.a.createInstance("f4b36b6c897e41bfaa3904d75da40777"),a={uid:(Math.floor(9e4*Math.random())+1e4).toString(),token:""};Object(o.useEffect)((function(){(function(){var e=Object(K.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Q.a.get("https://agoratokenserver-demo.herokuapp.com/access_token?channel=test&uid=".concat(a.uid)).then((function(e){var n;console.log(e),a.token=(null===(n=e.data)||void 0===n?void 0:n.token)||"",i.login(a).then((function(){console.log("Login successful");var e=i.createChannel("test");e.join(),r(e)}))}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().then((function(){console.log("integrations successful")}))}),[]),Object(o.useEffect)((function(){t&&(null===t||void 0===t||t.on("MemberJoined",(function(e){console.log("New member joined: ",e)})),null===t||void 0===t||t.on("MemberLeft",(function(e){console.log("Member left: ",e)})))}),[t]);return{channel:t,playerMeta:a,sendChannelMessage:function(e,n){var o={uid:a.uid,json:e||{},type:n};console.log(_.messageParser(o)),null===t||void 0===t||t.sendMessage(_.messageParser(o)).then((function(){}))}}},U=function(e){var n=e.Agora;return{updateBoard:function(e){var t={move:e};null===n||void 0===n||n.sendChannelMessage(t,C)},undoMoveMsg:function(e){var t={undoArray:e};null===n||void 0===n||n.sendChannelMessage(t,R)},undoMove:function(e){var n=e.chess,t=e.state,o=e.setState,r=e.undoArray;n.undo()&&o(Object(c.a)(Object(c.a)({},t),{},{fen:n.fen(),undoMovesArray:r}))}}},H=t(22),J="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",$="8/8/8/8/8/8/8/8",X=function(){var e=Object(o.useState)(new H(J)),n=(Object(s.a)(e,1)[0],Object(o.useState)({fen:J,orientation:"white",dropSquareStyle:{},squareStyles:{},pieceSquare:"",square:"",history:[],boardPosition:E(J),pgn:[]})),t=Object(s.a)(n,2),r=t[0],i=t[1];Object(o.useEffect)((function(){console.log("BOARD_POSITION: ",N(r.boardPosition))}),[r.boardPosition]);return{fen:r.fen,pgn:r.pgn,boardPosition:r.boardPosition,orientation:r.orientation,onDrop:function(e){var n,t=e.sourceSquare,o=e.targetSquare,a=e.piece;console.log("EDITOR_ON_DROP: ",t,o,a),n="spare"===t?Object(c.a)(Object(c.a)({},r.boardPosition),{},Object(f.a)({},o,a)):Object(c.a)(Object(c.a)({},Object.fromEntries(Object.entries(r.boardPosition).filter((function(e){var n=Object(s.a)(e,2),o=n[0];n[1];return o!==t})))),{},Object(f.a)({},o,a)),console.log("BOARD_POSITION: ",n),i(Object(c.a)(Object(c.a)({},r),{},{fen:N(n)||r.fen,boardPosition:n}))},setBoardPosition:function(e){i(Object(c.a)(Object(c.a)({},r),{},{fen:N(e)||r.fen,boardPosition:e}))},setFenPosition:function(e){i(Object(c.a)(Object(c.a)({},r),{},{fen:e,boardPosition:E(e)}))},reset:function(){i(Object(c.a)(Object(c.a)({},r),{},{fen:J,boardPosition:E(J)}))},clear:function(){i(Object(c.a)(Object(c.a)({},r),{},{fen:$,boardPosition:E($)}))},flip:function(){i(Object(c.a)(Object(c.a)({},r),{},{orientation:"white"===r.orientation?"black":"white"}))}}},Y=t(6),Z=t(7),ee=Object(Z.a)(O||(O=Object(Y.a)(["\n  background-color: #2b2b34;\n  width: 386px;\n  border-radius: 0px 16px 16px 0px;\n"]))),ne=Z.b.div(m||(m=Object(Y.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  ","\n"])),(function(e){return e.editorMode&&ee})),te=Z.b.div(x||(x=Object(Y.a)(["\n  div {\n    padding: 14px;\n    cursor: pointer;\n  }\n"]))),oe=Z.b.div(y||(y=Object(Y.a)(["\n  div {\n    padding: 14px;\n    cursor: pointer;\n  }\n"]))),re=Z.b.div(w||(w=Object(Y.a)(["\n  position: relative;\n  /* width: 176px; */\n  /* height: 242px; */\n  background: #2b2b34;\n  border: 1.46px solid #424242;\n  box-sizing: border-box;\n  padding: 10px 0px;\n  .title {\n    display: flex;\n    margin-left: 10px;\n    img {\n      margin-right: 3px;\n    }\n    font-weight: bold;\n    font-size: 18px;\n    line-height: 21px;\n    color: #ffffff;\n    margin-bottom: 11px;\n  }\n  .pgn-section {\n    width: 100%;\n    padding: 10px;\n    /* .error {\n      display: none;\n      height: 0px;\n    }\n    .outerBoard {\n      display: none;\n      height: 0px; \n    }*/\n    .moves {\n      color: white;\n      font-size: 10px;\n      move-number {}\n      move {\n        color: white;\n      }\n    }\n    .comment {\n      .commentRadio {\n        color: white;\n        display: flex;\n        flex-direction: row;\n        justify-content: flex-start;\n        align-items: center;\n        margin: 5px 0px;\n          margin-right: 12px;\n        }\n      }\n    }\n  }\n"]))),ie=Z.b.div(S||(S=Object(Y.a)(["\n  position: relative;\n  /* bottom: -52px; */\n  bottom: -1px;\n  left: -1.46px;\n  /* width: 176px; */\n  height: 51px;\n  background: #2b2b34;\n  border: 1.46px solid #424242;\n  /* border-top: 0px; */\n  border-bottom: 0px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  padding: 13.14px;\n  img {\n    cursor: pointer;\n  }\n"]))),ae=Z.b.div(q||(q=Object(Y.a)(["\n  padding: 26px;\n  height: 100%;\n  .title {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 24px;\n    line-height: 29px;\n    color: #ffffff;\n  }\n  .divider {\n    width: 100%;\n    height: 0.5px;\n    background: #ffffff;\n    opacity: 0.1;\n    margin: 13.5px 0;\n    margin-bottom: 156px;\n  }\n  .slider {\n    width: 100%;\n    height: 32px;\n    background: #e8edf9;\n    border-radius: 10px;\n    display: flex;\n    /* margin-bottom: 156px; */\n    div {\n      width: 50%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n  }\n  label {\n    margin-bottom: 8px;\n    font-weight: 500;\n    font-size: 13px;\n    line-height: 16px;\n    text-transform: uppercase;\n    color: #ffffff;\n    opacity: 0.4;\n  }\n  .input-fen {\n    display: flex;\n    width: 100%;\n    margin-bottom: 24px;\n    input {\n      width: 100%;\n      height: 32px;\n      border-radius: 8px;\n    }\n  }\n  .output-fen {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 32px;\n    border-radius: 8px;\n    background: #ffffff;\n    overflow: hidden;\n    margin-bottom: 24px;\n    text-overflow: ellipsis;\n  }\n  .btn-panel {\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n    button {\n      width: 32%;\n      height: 40px;\n      color: #ffffff;\n      font-weight: 600;\n      font-size: 17px;\n      line-height: 20px;\n      background: #5656ff;\n      border: 1px solid rgba(255, 255, 255, 0.4);\n      box-sizing: border-box;\n      border-radius: 10px;\n    }\n  }\n"]))),ce=Object(Z.a)(P||(P=Object(Y.a)(['\n  div[class$="-spare-pieces"] {\n    position: absolute;\n    width: 340px;\n    display: flex;\n    justify-content: space-between;\n    div[data-testid^="spare-"]:nth-child(odd) {\n      background: #b7c0d8;\n    }\n    div[data-testid^="spare-"]:nth-child(even) {\n      background: #e8edf9;\n    }\n    div {\n      /* width: 100%; */\n      margin: 2px;\n      border-radius: 12px;\n      div {\n        img {\n          padding: 8px 10px;\n          width: 26px !important;\n          height: 28px !important;\n        }\n      }\n    }\n  }\n']))),se=Z.b.div(M||(M=Object(Y.a)(["\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: #2b2b34;\n  padding: 10px;\n  border-radius: 12px;\n  z-index: 6;\n  div:nth-child(odd) {\n    background: #b7c0d8;\n  }\n  div:nth-child(even) {\n    background: #e8edf9;\n  }\n  div {\n    margin: 2px;\n    border-radius: 12px;\n    img {\n      cursor: pointer;\n      padding: 8px 10px;\n      width: 26px;\n      height: 28px;\n    }\n  }\n"]))),de=Z.b.div(k||(k=Object(Y.a)(['\n  display: flex;\n  /* width: 1000px; */\n  /* height: fit-content; */\n  max-width: 1440px;\n  background: black;\n  grid-template-columns: 66% 37%;\n  grid-template-areas: "board sidePanel";\n  .board-container {\n    position: relative;\n    min-width: 500px;\n    min-height: 500px;\n    grid-area: board;\n    border: 10px solid rgba(255, 255, 255);\n    div {\n      ',"\n      .black-spare-pieces {\n        left: ",";\n        bottom: ",";\n\n        /* background:grey; */\n      }\n      .white-spare-pieces {\n        left: ",";\n        bottom: ",";\n        /* background:grey; */\n      }\n    }\n  }\n\n  "," {\n    grid-area: sidePanel;\n    /* width: 100%; */\n    /* height: 100%; */\n    ",", "," {\n      background: #2b2b34;\n      border: 2px solid rgba(255, 255, 255, 0.1);\n      border-radius: 0 8px 8px 0;\n    }\n  }\n"])),(function(e){return e.editorMode&&ce}),(function(e){return e.dimension?"".concat(e.dimension+32,"px"):"0px"}),(function(e){return e.dimension?"".concat(e.dimension-130,"px"):"0px"}),(function(e){return e.dimension?"".concat(e.dimension+32,"px"):"0px"}),(function(e){return e.dimension?"".concat(e.dimension-190,"px"):"0px"}),ne,te,oe),ue=t.p+"static/media/undoMove.586eb02f.svg",le=t.p+"static/media/redoMove.c6f42448.svg",be=t.p+"static/media/history.8223d0ff.svg",fe=t.p+"static/media/resetBoard.7af0fcde.svg",pe=t.p+"static/media/flipBoard.c1ef8478.svg",ge=t.p+"static/media/loadGame.28f8774a.svg",he=t.p+"static/media/wK.3b342df8.svg",ve=t.p+"static/media/wQ.785db365.svg",je=t.p+"static/media/wB.56f72474.svg",Oe=t.p+"static/media/wR.33cf0258.svg",me=t.p+"static/media/wN.d5fa39eb.svg",xe=t.p+"static/media/wP.5f74a9fe.svg",ye=t.p+"static/media/bK.e57316c7.svg",we=t.p+"static/media/bQ.c21470b8.svg",Se=t.p+"static/media/bB.1f023e3e.svg",qe=t.p+"static/media/bR.2724e583.svg",Pe=t.p+"static/media/bN.a46c4723.svg",Me=t.p+"static/media/bP.d9262a65.svg",ke=t.p+"static/media/arrowLeft.7e025148.svg",Ne=t.p+"static/media/arrowRight.ae8c68ee.svg",Ee=t(13),Ce=t(1),Re=function(e){var n=e.pgn,t=e.mode,r={pgn:n,timerTime:"1",startPlay:null===n||void 0===n?void 0:n.split(/\d\./).join("").split(" ").filter((function(e){return""!==e})).length,showResult:!0,boardSize:"160",showFen:!1,showCoords:!1,figurine:!0,movesHeight:"78px"},i="board-0";return Object(o.useLayoutEffect)((function(){switch(t){case"view":Object(Ee.pgnView)(i,r);break;case"edit":Object(Ee.pgnEdit)(i,r);break;case"print":Object(Ee.pgnPrint)(i,r)}})),Object(Ce.jsx)("div",{id:i})},Be=function(e,n){return e.pgn===n.pgn},De=r.a.memo(Re,Be),Ae=function(e){var n=e.undoMove,t=e.redoMove,o=e.flip,r=e.reset,i=e.setSidePanelSection;return Object(Ce.jsxs)(Ce.Fragment,{children:[Object(Ce.jsxs)(te,{children:[Object(Ce.jsx)("div",{onClick:n,children:Object(Ce.jsx)("img",{src:ue,alt:"Undo"})}),Object(Ce.jsx)("div",{onClick:t,children:Object(Ce.jsx)("img",{src:le,alt:"Redo"})}),Object(Ce.jsx)("div",{children:Object(Ce.jsx)("img",{src:be,alt:"History",onClick:function(){i("history")}})}),Object(Ce.jsx)("div",{children:Object(Ce.jsx)("img",{src:fe,alt:"Reset",onClick:r})}),Object(Ce.jsx)("div",{children:Object(Ce.jsx)("img",{src:pe,alt:"Flip",onClick:o})})]}),Object(Ce.jsx)(oe,{children:Object(Ce.jsx)("div",{children:Object(Ce.jsx)("img",{src:ge,alt:"Load"})})})]})},Ie=function(e){var n,t,r=Object(o.useState)(),i=Object(s.a)(r,2),a=i[0],d=i[1],l=Object(o.useState)("true"===Object.fromEntries(new URLSearchParams(window.location.search).entries()).editorMode||!1),b=Object(s.a)(l,2),f=b[0],p=(b[1],Object(o.useState)("menu")),g=Object(s.a)(p,2),h=g[0],v=g[1],j=G(),O=U({Agora:j}),m=X(),x=L(j,O),y=x.turn,w=x.setBoardPosition,S=x.reset,q=x.flip,P=x.orientation,M=x.pendingMove,k=x.fen,N=x.pgn,E=(x.history,x.promotionModal),C=x.onDrop,R=x.onMouseOverSquare,B=x.onMouseOutSquare,D=x.squareStyles,A=x.onDragOverSquare,I=x.onSquareClick,F=x.onSquareRightClick,T=x.undoMove,K=x.redoMove,W=x.promotion;Object(o.useEffect)((function(){return V(),window.addEventListener("resize",V),function(){return window.removeEventListener("resize",V)}}),[]),Object(o.useEffect)((function(){var e,o=null===(e=window.document.getElementById("board-container"))||void 0===e?void 0:e.querySelector("div");n=null===o||void 0===o?void 0:o.firstElementChild,t=null===o||void 0===o?void 0:o.lastElementChild,n&&t&&(n.classList.add("black-spare-pieces"),t.classList.add("white-spare-pieces"),n.setAttribute("style",""),t.setAttribute("style",""))}),[window.document.getElementById("board-container")]);var V=function(){var e;d(null===(e=window.document.getElementById("board-container"))||void 0===e?void 0:e.clientWidth)},z={wK:function(e){var n=e.squareWidth;e.isDragging;return Object(Ce.jsx)("img",{style:{width:n,height:n},src:he,alt:"wK"})},wQ:function(e){var n=e.squareWidth;e.isDragging;return Object(Ce.jsx)("img",{style:{width:n,height:n},src:ve,alt:"wQ"})},wB:function(e){var n=e.squareWidth;e.isDragging;return Object(Ce.jsx)("img",{style:{width:n,height:n},src:je,alt:"wB"})},wR:function(e){var n=e.squareWidth;e.isDragging;return Object(Ce.jsx)("img",{style:{width:n,height:n},src:Oe,alt:"wR"})},wN:function(e){var n=e.squareWidth;e.isDragging;return Object(Ce.jsx)("img",{style:{width:n,height:n},src:me,alt:"wN"})},wP:function(e){var n=e.squareWidth;e.isDragging;return Object(Ce.jsx)("img",{style:{width:n,height:n},src:xe,alt:"wP"})},bK:function(e){var n=e.squareWidth;e.isDragging;return Object(Ce.jsx)("img",{style:{width:n,height:n},src:ye,alt:"bK"})},bQ:function(e){var n=e.squareWidth;e.isDragging;return Object(Ce.jsx)("img",{style:{width:n,height:n},src:we,alt:"bQ"})},bB:function(e){var n=e.squareWidth;e.isDragging;return Object(Ce.jsx)("img",{style:{width:n,height:n},src:Se,alt:"bB"})},bR:function(e){var n=e.squareWidth;e.isDragging;return Object(Ce.jsx)("img",{style:{width:n,height:n},src:qe,alt:"bR"})},bN:function(e){var n=e.squareWidth;e.isDragging;return Object(Ce.jsx)("img",{style:{width:n,height:n},src:Pe,alt:"bN"})},bP:function(e){var n=e.squareWidth;e.isDragging;return Object(Ce.jsx)("img",{style:{width:n,height:n},src:Me,alt:"bP"})}},Q=Object(c.a)(Object(c.a)(Object(c.a)({id:"board-0",position:f?m.boardPosition:k,dropOffBoard:f?"trash":"snapback",draggable:!0,lightSquareStyle:{backgroundColor:"#E8EDF9"},darkSquareStyle:{backgroundColor:"#B7C0D8"},pieces:z,boardStyle:{width:a,height:a,position:"relative"},width:a,getPosition:f?m.setBoardPosition:w},f?{onDrop:m.onDrop}:{onDrop:C}),{},{orientation:f?m.orientation:P||"white"},!f&&{onMouseOverSquare:R,onMouseOutSquare:B,squareStyles:D,onDragOverSquare:A,onSquareClick:I,onSquareRightClick:F}),{},{sparePieces:f}),_=Object(Ce.jsxs)(se,{children:[Object(Ce.jsx)("div",{children:Object(Ce.jsx)("img",{src:"w"===y?ve:we,alt:"",width:a&&a/8,height:a&&a/8,onClick:function(){M&&W(M.sourceSquare,M.targetSquare,"q")}})}),Object(Ce.jsx)("div",{children:Object(Ce.jsx)("img",{src:"w"===y?je:Se,alt:"",width:a&&a/8,height:a&&a/8,onClick:function(){M&&W(M.sourceSquare,M.targetSquare,"b")}})}),Object(Ce.jsx)("div",{children:Object(Ce.jsx)("img",{src:"w"===y?Oe:qe,alt:"",width:a&&a/8,height:a&&a/8,onClick:function(){M&&W(M.sourceSquare,M.targetSquare,"r")}})}),Object(Ce.jsx)("div",{children:Object(Ce.jsx)("img",{src:"w"===y?me:Pe,alt:"",width:a&&a/8,height:a&&a/8,onClick:function(){M&&W(M.sourceSquare,M.targetSquare,"n")}})})]});return Object(Ce.jsxs)(de,{dimension:a,editorMode:f,children:[Object(Ce.jsxs)("div",{id:"board-container",className:"board-container",children:[E&&_,Object(Ce.jsx)(u.a,Object(c.a)({},Q))]}),Object(Ce.jsx)(ne,{editorMode:f,children:f?Object(Ce.jsxs)(ae,{children:[Object(Ce.jsx)("div",{className:"title",children:"Board Settings"}),Object(Ce.jsx)("div",{className:"divider"}),Object(Ce.jsx)("label",{htmlFor:"inputFen",children:"Fen"}),Object(Ce.jsx)("div",{className:"input-fen",children:Object(Ce.jsx)("input",{name:"inputFen",type:"text",value:null===m||void 0===m?void 0:m.fen,onChange:function(e){m.setFenPosition(e.target.value)}})}),Object(Ce.jsxs)("div",{className:"btn-panel",children:[Object(Ce.jsx)("button",{onClick:m.reset,children:"Reset"}),Object(Ce.jsx)("button",{onClick:m.clear,children:"Clear"}),Object(Ce.jsx)("button",{onClick:null===m||void 0===m?void 0:m.flip,children:"Flip"})]})]}):Object(Ce.jsx)(Ce.Fragment,{children:function(){switch(h){case"menu":return Object(Ce.jsx)(Ae,{undoMove:T,redoMove:K,reset:S,flip:q,setSidePanelSection:v});case"history":return Object(Ce.jsxs)(re,{children:[Object(Ce.jsxs)("div",{className:"title",children:[Object(Ce.jsx)("img",{src:be,alt:""}),"History"]}),Object(Ce.jsx)("div",{className:"pgn-section",children:N&&Object(Ce.jsx)(De,{pgn:N,mode:"edit"})}),Object(Ce.jsxs)(ie,{children:[Object(Ce.jsx)("img",{src:ke,alt:"",onClick:function(){v("menu")}}),Object(Ce.jsx)("img",{src:Ne,alt:""})]})]});default:return Object(Ce.jsx)(Ae,{undoMove:T,redoMove:K,reset:S,flip:q,setSidePanelSection:v})}}()})})]})};var Le=function(){return Object(Ce.jsx)("div",{className:"app",children:Object(Ce.jsx)(Ie,{})})},Fe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,82)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),o(e),r(e),i(e),a(e)}))};a.a.render(Object(Ce.jsx)(r.a.StrictMode,{children:Object(Ce.jsx)(Le,{})}),document.getElementById("root")),Fe()}},[[81,1,2]]]);
//# sourceMappingURL=main.9399972e.chunk.js.map