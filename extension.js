function inject(){
	let prediction = true;
	// console.log(prediction)
	if (prediction) {
		var x = prediction.x;
		var y = prediction.y;
	
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs)=> {
			chrome.tabs.executeScript(tabs[0].id, {
				code: `
				console.log(downBox.getBoundingClientRect())
				`
			});
		});
	}
}
// window.addEventListener("load", (event) => {

//   });

chrome.browserAction.onClicked.addListener(async (tab)=>{

	chrome.tabs.query({ active: true, currentWindow: true }, (tabs)=> {
		chrome.tabs.executeScript(tabs[0].id, {
			code: `				
			let downBox = document.createElement("div")
			downBox.setAttribute('style', 'position: fixed; background-color:red; bottom:0px; height:20%; width:100%')
			downBox.setAttribute('id', 'downBox')
			console.log(downBox)
			document.getRootNode().body.appendChild(downBox)
			`
		});
	});
	setInterval(inject, 1000)
});

// window.onload = async function() {

//     //start the webgazer tracker
//     await webgazer.setRegression('ridge') /* currently must set regression and tracker */
//         //.setTracker('clmtrackr')
//         .setGazeListener(function(data, clock) {
//           //   console.log(data); /* data is an object containing an x and y key which are the x and y prediction coordinates (no bounds limiting) */
//           //   console.log(clock); /* elapsed time in milliseconds since webgazer.begin() was called */
//         })
//         .saveDataAcrossSessions(true)
//         .begin();
//         webgazer.showVideoPreview(true) /* shows all video previews */
//             .showPredictionPoints(true) /* shows a square every 100 milliseconds where current prediction is */
//             .applyKalmanFilter(true); /* Kalman Filter defaults to on. Can be toggled by user. */

//     //Set up the webgazer video feedback.
//     var setup = function() {

//         //Set up the main canvas. The main canvas is used to calibrate the webgazer.
//         var canvas = document.getElementById("plotting_canvas");
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
//         canvas.style.position = 'fixed';
//     };
//     setup();

// };

// // Set to true if you want to save the data even if you reload the page.
// window.saveDataAcrossSessions = true;

// window.onbeforeunload = function() {
//     webgazer.end();
// }

// /**
//  * Restart the calibration process by clearing the local storage and reseting the calibration point
//  */
// function Restart(){
//     document.getElementById("Accuracy").innerHTML = "<a>Not yet Calibrated</a>";
//     webgazer.clearData();
//     ClearCalibration();
//     PopUpInstruction();
// }



// chrome.tabs.sendMessage(tabs[0].id,"your message"); 

// content-script/content.js

// chrome.runtime.onMessage.addListener(function (response, sendResponse) {
//           console.log(response);
// });

// function rng(rngBox) {
// 	let num = Math.floor(Math.random() * 100) + 1;
// 	rngBox.textContent = String(num);
// }

// let table = document.getRootNode().body.children[1].children[0].children[0].children[2];
// let classname = table.children[3].className.replaceAll(" ", ".");
// let rngBox = document.createElement(classname);
// rngBox.style.cssText = "flex: 0 0 auto; border-right: 2px solid black; width: 144px; font-size: 60px; text-align: center;"
// table.appendChild(rngBox);
// rng(rngBox);
// setInterval(rng, 3000, rngBox);