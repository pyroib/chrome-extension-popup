chrome.runtime.onMessage.addListener(callBack);

function callBack(messsage, sender, sendRequest){
	console.log(messsage.extension); 
}