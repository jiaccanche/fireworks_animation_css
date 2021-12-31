var contentToCopy;
function copyDataToClipboard(e) {
    e.preventDefault(); // default behaviour is to copy any selected text
    e.clipboardData.setData("text/plain", contentToCopy);
}
function copy(content) {
    contentToCopy = content;
    document.addEventListener("copy", copyDataToClipboard);
    try {
        document.execCommand("copy");
    } catch (exception) {
        console.error("Copy to clipboard failed");
    } finally {
        document.removeEventListener("copy", copyDataToClipboard);
    }
}


var changeName = function(){
  var name = getUrlParam('name','A todos'); 
  name = decodeURIComponent(name);
  console.log(name);
  document.getElementById("name").innerHTML = name;
  
}

var addPerson =  async function(){
  var person = prompt("Por favor introduce un nombre:","" );
  var copyText = "";
  if (person == null || person == "") {
    copyText = "User cancelled the prompt.";
    alert("Algo salio mal");
  } else {
    copyText = "https://bit.ly/3HrH0DS?name=" + encodeURIComponent(person);
    await copy(copyText);
    // Remove it as its not needed anymore
    alert("Copiado");
    /* Alert the copied text */
    
  }
}

var loadMain = function(){
  changeName();
  document.getElementById("namebtn").addEventListener("click",addPerson);
 
}

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
  });
  return vars;
}

function getUrlParam(parameter, defaultvalue){
  var urlparameter = defaultvalue;
  if(window.location.href.indexOf(parameter) > -1){
      urlparameter = getUrlVars()[parameter];
      }
  return urlparameter;
}

function createInput(copyText){
  return new Promise(copyText => {
   
  
    // Output the array into it
    document.getElementById("dummy_id").value=copyText;
  
    // Copy its contents
    dummy.select();
  });
 
}
//
window.onload = loadMain 