!function(e){var t={};function n(d){if(t[d])return t[d].exports;var u=t[d]={i:d,l:!1,exports:{}};return e[d].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=t,n.d=function(e,t,d){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:d})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n=document.getElementById("add");document.getElementById("total").addEventListener("click",function(){for(var e=document.getElementsByClassName("hoursInput"),t=document.getElementsByClassName("minutesInput"),n=document.getElementsByClassName("secondsInput"),d=0,u=0,a=0,r=0;r<e.length;r++)d+=parseInt(e[r].value),u+=parseInt(t[r].value),a+=parseInt(n[r].value);var c=document.getElementById("hoursResult"),s=document.getElementById("minutesResult"),l=document.getElementById("secondsResult");c.value=d,s.value=u,l.value=a}),n.addEventListener("click",function(){var e=document.createElement("div");e.classList.add("row");var t=document.createElement("input");t.setAttribute("type","text"),t.classList.add("hoursInput");var n=document.createElement("input");n.setAttribute("type","text"),n.classList.add("minutesInput");var d=document.createElement("input");d.setAttribute("type","text"),d.classList.add("secondsInput");var u=document.createElement("span"),a=document.createElement("span"),r=document.createElement("span"),c=document.createTextNode("hours "),s=document.createTextNode("minutes "),l=document.createTextNode("seconds ");u.appendChild(t),u.appendChild(c),a.appendChild(n),a.appendChild(s),r.appendChild(d),r.appendChild(l),e.appendChild(u),e.appendChild(a),e.appendChild(r),document.getElementById("calc").appendChild(e)})}]);