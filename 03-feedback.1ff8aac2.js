function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var o,r,i,u,a,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function E(e){return c=e,a=setTimeout(j,t),l?b(e):u}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function j(){var e=v();if(S(e))return O(e);a=setTimeout(j,function(e){var n=t-(e-f);return s?m(n,i-(e-c)):n}(e))}function O(e){return a=void 0,p&&o?b(e):(o=r=void 0,u)}function T(){var e=v(),n=S(e);if(o=arguments,r=this,f=e,n){if(void 0===a)return E(f);if(s)return a=setTimeout(j,t),b(f)}return void 0===a&&(a=setTimeout(j,t)),u}return t=y(t)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=f=r=a=void 0},T.flush=function(){return void 0===a?u:O(v())},T}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form");b.addEventListener("input",e(t)((function(e){const t={email:b.elements.email.value,message:b.elements.message.value};localStorage.setItem("FEEDBACK_KEY",JSON.stringify(t))}),500)),b.addEventListener("submit",(function(e){console.log(JSON.parse(localStorage.getItem("FEEDBACK_KEY"))),e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("FEEDBACK_KEY")}));!function(){const e=JSON.parse(localStorage.getItem("FEEDBACK_KEY")),t=document.querySelector(".feedback-form input"),n=document.querySelector(".feedback-form textarea");e&&(t.value=e.email,n.value=e.message)}();
//# sourceMappingURL=03-feedback.1ff8aac2.js.map
