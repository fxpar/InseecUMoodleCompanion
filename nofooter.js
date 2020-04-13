document.body.style.border = "5px solid green";
console.log("********Hello Footer:**********"+localStorage.getItem("footer"));

chrome.storage.sync.get(['header', 'footer'], function(items) {
      console.log('Settings retrievedFOOTER:'+items.footer);
	  console.log('Settings retrievedHEADER:'+ items.header);
    });

if (localStorage.getItem("footer") === "true"){
	console.log("footer="+localStorage.getItem("footer", footer));
document.getElementById("page-footer").style.display = "none";
}