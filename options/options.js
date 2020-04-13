

function save_options() {
  //var option1 = document.getElementById('option1').value;
  

  
	var header = document.getElementById('header').checked;
	localStorage.setItem("header", header);
	
	
	var footer = document.getElementById('footer').checked;
	localStorage.setItem("footer", footer);
	
  chrome.storage.sync.set({'header': header, 'footer': footer}, function() {
      console.log('Chrome sync Settings saved');
    });

	
	var status = document.getElementById('status');
    status.textContent = 'options saved!';
}

function test_alert() {

	var status = document.getElementById('status');
    status.textContent = 'test successful!';
	document.getElementById("footer").style.color = "blue";

}


document.getElementById('save').addEventListener('click',
    save_options);
	
document.getElementById('testAlert').addEventListener('click',
    test_alert);