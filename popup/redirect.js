var currentlang = chrome.i18n.getMessage("lang");
console.log("+++LANG+++ "+currentlang);
var popupUrl = chrome.runtime.getURL("popup/popup-"+currentlang+".html");
window.location.href = popupUrl;