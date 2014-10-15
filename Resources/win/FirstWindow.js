function FirstWindow(){
	
	var SecondWindow = require("win/SecondWindow");
	var winSecond  = new SecondWindow();

	var win = Ti.UI.createWindow({
		backgroundColor: "red"
	});
	
	var b = Ti.UI.createButton({
		title: "button",
		top: "10",
		backgroundColor: "yellow",
		height: "80",
		width: "100",
		left: "5",
		style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN
	});
	
	b.addEventListener("click", function(){
		Ti.API.info('button b clicked');
		winSecond.open();
	});
	
	win.add(b);
	return win;
};

module.exports = FirstWindow;
