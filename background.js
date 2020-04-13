 chrome.runtime.onInstalled.addListener(function() {
	 
    chrome.storage.sync.set({'header': 'false', 'footer': 'true'}, function() {
      console.log('Chrome sync initialized: ');
    });
	
	chrome.storage.sync.get(['header', 'footer'], function(items) {
      console.log('Settings retrievedFOOTER:'+items.footer);
	  console.log('Settings retrievedHEADER:'+ items.header);
    });
	
  });



	chrome.browserAction.onClicked.addListener(function(tab) {
	  
	  chrome.tabs.executeScript({
		code: ''
	  });
	  
	  
	});