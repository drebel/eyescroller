let off = true;


chrome.browserAction.onClicked.addListener(async (tab)=>{
	if(off){
		off = false;
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs)=> {
			chrome.tabs.executeScript(tabs[0].id, {
				code: `
				const body = document.getRootNode().body
				const downBox = document.createElement("div")
				downBox.setAttribute('style', 'position: fixed; background-color:red; bottom:0px; height:20%; width:100%')
				console.log(downBox)
				body.appendChild(downBox)
				`
			});
		});
	}
});
