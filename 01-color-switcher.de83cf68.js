!function(){var t={body:document.body,btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};t.btnStop.disabled=!0,{getRandomHexColor:function(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))},DELLAY:1e3,intervalID:null,start:function(){var n=this;t.btnStart.addEventListener("click",(function(){var o=n;t.btnStart.disabled=!0,t.btnStop.disabled=!1,t.body.style.backgroundColor=n.getRandomHexColor(),n.intervalID=setInterval((function(){t.body.style.backgroundColor=o.getRandomHexColor()}),n.DELLAY)})),t.btnStop.addEventListener("click",(function(){n.stop()}))},stop:function(){t.btnStart.disabled=!1,t.btnStop.disabled=!0,clearInterval(this.intervalID)}}.start()}();
//# sourceMappingURL=01-color-switcher.de83cf68.js.map