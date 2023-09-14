export let doc=document,
qsa=(s,o=doc)=>o?.querySelectorAll(s),
qs=(s,o=doc)=>o?.querySelector(s);

export function loadCSS(n,e,o,d){"use strict";var t=window.document.createElement("link"),i=e||window.document.getElementsByTagName("script")[0],l=window.document.styleSheets;return t.rel="stylesheet",t.href=n,t.media="only x",d&&(t.onload=d),i.parentNode.insertBefore(t,i),t.onloadcssdefined=function(n){for(var e,o=0;o<l.length;o++)l[o].href&&l[o].href===t.href&&(e=!0);e?n():setTimeout(function(){t.onloadcssdefined(n)})},t.onloadcssdefined(function(){t.media=o||"all"}),t}

export function onloadCSS(n,e){
	n.onload=function(){
		n.onload=null,e&&e.call(n)
	},"isApplicationInstalled"in navigator&&"onloadcssdefined"in n&&n.onloadcssdefined(e);
}

export const toast = {
  async load(){
    return new Promise(resolve => {
      if(qs('[toast]')) { resolve(true);return }

      let script = document.createElement("script")
      script.src = "/assets/js/js-snackbar.min.js"
      script.setAttribute("toast","")
      qs('body').appendChild(script)
      
      script.onload = () => {
        let style = loadCSS("/assets/css/js-snackbar.min.css")
        onloadCSS(style, _ => {
          resolve(true)
        })
        
      }
    })
  },
  show(message){
    setTimeout(()=>{
      SnackBar({
        position: "bl",
        message: message,
      })
    },10)
    
  }
}