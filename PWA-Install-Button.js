(({button:t,onInstall:n})=>{let i=null;var e=()=>{i&&(t.disabled=!0,i.prompt().then(e=>{"accepted"===e.outcome&&o()}).finally(()=>{t.disabled=!1}),i=null)},l=e=>{e.preventDefault(),i=e,t.hidden=!1};const o=()=>{t.hidden=!0,t.removeEventListener("click",e),window.removeEventListener("beforeinstallprompt",l)};t instanceof HTMLElement&&(t.hidden=!0,t.addEventListener("click",e),window.addEventListener("beforeinstallprompt",l));const d=e=>{t instanceof HTMLElement&&o(),"function"==typeof n&&n(e),window.removeEventListener("appinstalled",d)};window.addEventListener("appinstalled",d)})({
  button: document.getElementById("app_install_button")||Object.assign(document.body.appendChild(document.createElement("button")),{hidden:!0,type:"button",className:"pwa-button",innerHTML:"<svg class='flash' viewBox='0 0 18 22'><path d='M17 6V16C17 20 16 21 12 21H6C2 21 1 20 1 16V6C1 2 2 1 6 1H12C16 1 17 2 17 6Z'></path><path d='M11 4.5H7'></path><path d='M8.99995 18.1C9.85599 18.1 10.55 17.406 10.55 16.55C10.55 15.694 9.85599 15 8.99995 15C8.14391 15 7.44995 15.694 7.44995 16.55C7.44995 17.406 8.14391 18.1 8.99995 18.1Z'></path></svg>"}), onInstall(){ /** * Do something on app installed * i.e. Display a Thank You message in UI */ } });