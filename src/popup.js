chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
	let payload = {
		extension:"background",
		action:"log"
	}
	chrome.tabs.sendMessage(tab.id, payload);
}