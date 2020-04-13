document.body.style.border = "5px solid green";
console.log("********Hello Footer:**********"+localStorage.getItem("footer"));

chrome.storage.sync.get(['header'], function(items) {
	
	console.log('Settings retrievedHEADER:'+ items.header);
	if (items.header === true){
		console.log("header="+items.header);
		var target = document.querySelector('[role="banner"]');
		target.style.display = "none";
	}
});


chrome.storage.sync.get(['footer'], function(items) {
	
	console.log('Settings retrievedFOOTER:'+items.footer);
	if (items.footer === true){
		console.log("footer="+items.footer);
		document.getElementById("page-footer").style.display = "none";
	}
	
});