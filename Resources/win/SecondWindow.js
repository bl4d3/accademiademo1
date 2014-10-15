//SecondWindow
function SecondWindow(){
	var winSecond = Ti.UI.createWindow({
		backgroundColor: "green"
	});
	
	
	var bClose = Ti.UI.createButton({
		title: "button",
		top: "10",
		backgroundColor: "yellow",
		height: "80",
		width: "100",
		left: "5",
		style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN
	});
	
	bClose.addEventListener("click", function(){
		winSecond.close();
		
	});
	
	winSecond.add(bClose);
	
	return winSecond;
}

module.exports = SecondWindow;