(this["webpackJsonptic-tac"]=this["webpackJsonptic-tac"]||[]).push([[0],{13:function(e,t,a){},7:function(e,t,a){e.exports=a(8)},8:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(2),s=a(4),u=a(3),i=a(0),c=a.n(i),l=a(6),o=a.n(l);a(13);function h(e){return c.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var m=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={squares:Array(9).fill(null),xTurn:!0},n}return Object(n.a)(a,[{key:"renderSquare",value:function(e){var t=this;return c.a.createElement(h,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"handleClick",value:function(e){var t=this.state.squares.slice();"X"===t[e]||"O"===t[e]||this.winCheck(t)||(t[e]=this.state.xTurn?"X":"O",this.setState({squares:t,xTurn:!this.state.xTurn}))}},{key:"winCheck",value:function(e){var t=e;if(t[4]&&(t[0]===t[4]&&t[0]===t[8]||t[2]===t[4]&&t[2]===t[6]))return 1;for(var a=0;a<t.length/3;a++)if(t[a]&&t[a]===t[a+3]&&t[a]===t[a+6]||t[3*a]&&t[3*a]===t[3*a+1]&&t[3*a]===t[3*a+2])return 1;return null}},{key:"render",value:function(){var e=this,t=this.winCheck(this.state.squares)?(this.state.xTurn?"O":"X")+" wins":"Next player: "+(this.state.xTurn?"X":"O");return c.a.createElement("div",null,c.a.createElement("div",{className:"status"},t),c.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),c.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),c.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)),c.a.createElement("button",{className:"new-game",onClick:function(){return e.setState({squares:Array(9).fill(null),xTurn:!0})}},"NEW GAME"))}}]),a}(c.a.Component),d=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"game"},c.a.createElement("div",{className:"game-board"},c.a.createElement(m,null)),c.a.createElement("div",{className:"game-info"}))}}]),a}(c.a.Component);o.a.render(c.a.createElement(d,null),document.getElementById("root"))}},[[7,1,2]]]);
//# sourceMappingURL=main.17d48ce9.chunk.js.map