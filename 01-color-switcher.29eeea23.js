!function(){const t={body:document.body,btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};t.btnStop.disabled=!0;({getRandomHexColor:()=>`#${Math.floor(16777215*Math.random()).toString(16)}`,DELLAY:1e3,intervalID:null,start(){t.btnStart.addEventListener("click",(()=>{t.btnStart.disabled=!0,t.btnStop.disabled=!1,t.body.style.backgroundColor=this.getRandomHexColor(),this.intervalID=setInterval((()=>{t.body.style.backgroundColor=this.getRandomHexColor()}),this.DELLAY)})),t.btnStop.addEventListener("click",(()=>{this.stop()}))},stop(){t.btnStart.disabled=!1,t.btnStop.disabled=!0,clearInterval(this.intervalID)}}).start()}();
//# sourceMappingURL=01-color-switcher.29eeea23.js.map
