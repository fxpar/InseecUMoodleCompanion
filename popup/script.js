function initialize(){
	
	chrome.storage.sync.get(['header', 'footer'], function(items) {
				  console.log('Settings retrieved INIT HEADER:'+ items.header);
				  console.log('Settings retrieved INIT FOOTER:'+ items.footer);
				  document.getElementById('checkbox1').checked = items.header;
				  document.getElementById('checkbox2').checked = items.footer;
				});
}

function listenForClicks() {
  document.addEventListener("click", (e) => {



    function Actions(tabs) {
			var extName = chrome.i18n.getMessage("extensionName");

		switch (e.target.id) {
			
			case "button1":
				var myAlert = '**'+extName+'**:'+chrome.i18n.getMessage("action1");
				console.log(myAlert);
			  chrome.tabs.executeScript(tabs[0].id, {
			  code: `
				var target = document.querySelector('[role="banner"]');
				if (target.style.display === "none"){
					target.style.display = "block";
					console.log('**HEADER**:'+target.style.display);
				}else{
					target.style.display = "none";
				}`
			});
			break;
			
			case "button2":
				var myAlert = '**'+extName+'**:'+chrome.i18n.getMessage("action2");
				console.log(myAlert);
			  chrome.tabs.executeScript(tabs[0].id, {
			  code: `
				var target = document.getElementById("page-footer");
				if (target.style.display === "none"){
					target.style.display = "block";
					console.log('**FOOTER**:'+target.style.display);
				}else{
					target.style.display = "none";
				}`
			});
			break;
			
			case "button3":
				var myAlert = '**'+extName+'**:'+chrome.i18n.getMessage("action3");
				console.log(myAlert);
			  chrome.tabs.executeScript(tabs[0].id, {
			  code: `document.querySelector('[data-action="toggle-drawer"]').click();`
			});
			break;
			
			case "button4":
				var myAlert = '**'+extName+'**:'+chrome.i18n.getMessage("action4");
				console.log(myAlert);
			  chrome.tabs.executeScript(tabs[0].id, {
			  code: `document.getElementById("div").classList.remove("NePasImprimer"); document.getElementById("div").classList.remove("ThemeEmeraude"); document.getElementById("div").classList.remove("SansSelectionTexte"); document.getElementById("div").classList.remove("BloquerInterface"); document.body.innerHTML += '<div style="position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000;"></div>'; window.alert('`+myAlert+`');`
			});
			break;
			
			case "checkbox1":
				var header = document.getElementById('checkbox1').checked;
				 chrome.storage.sync.set({'header': header}, function() {
      console.log('Chrome sync Settings saved header');
    });
				console.log('Chrome sync set for:header ='+header);
				chrome.storage.sync.get(['header'], function(items) {
				  console.log('Settings retrieved HEADER:'+ items.header);
				});
			break;			
			
			case "checkbox2":
				var footer = document.getElementById('checkbox2').checked;
				 chrome.storage.sync.set({'footer': footer}, function() {
      console.log('Chrome sync Settings saved footer');
    });
				console.log('Chrome sync set for:footer ='+footer);
				chrome.storage.sync.get(['footer'], function(items) {
				  console.log('Settings retrieved FOOTER:'+ items.footer);
				});
			break;

			
			

		}
		

	  //alert("ok!");
    }


    /**
     * Just log the error to the console.
     */
    function reportError(error) {
      console.log(`Could not Select courses : ${error} `);
    }

    /**
     * Get the active tab,
     * then call "courseActions()" or "reset()" as appropriate.
     */
	 
   // if (e.target.classList.contains("button")) {
		/*
      browser.tabs.query({active: true, currentWindow: true})
        .then(courseActions)
        .then(courseActions)
        .catch(reportError);
		*/
		chrome.tabs.query({
    active: true,
    currentWindow: true
}, function(tabs) {
    Actions(tabs);
    //console.log(tabURL);
});
		
    //}

	
  });
}

/**
 * There was an error executing the script.
 * Display the popup's error message, and hide the normal UI.
 */
function reportExecuteScriptError(error) {
  //document.querySelector("#popup-content").classList.add("hidden");
  //document.querySelector("#error-content").classList.remove("hidden");
  console.error(`Failed to execute HPsel content script: ${error.message}`);
  return "ok";
}




try{
//internationalizePopup();
initialize();
listenForClicks();
}
catch(error){
	reportExecuteScriptError(error);
}

