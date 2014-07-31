var canvas = document.getElementById('canvas');
if (canvas.getContext) {
	var ctx = canvas.getContext('2d');

	ctx.fillStyle = 'rgb(255,0,0)';
	ctx.beginPath();
	ctx.arc(40, 25, 20, 0, Math.PI * 2, true);
	ctx.fill();
	
	ctx.fillStyle = 'rgb(0,0,255)';
	ctx.beginPath();
	//ctx.arc(75, 75, 50, 0, Math.PI * 2, false);
	ctx.arc(110, 25, 20, 0, Math.PI * 2, true);
	ctx.fill();
	
	
	ctx.fillStyle = 'rgb(255,255,0)';
	ctx.beginPath();
	ctx.arc(75, 75, 50, 0, Math.PI * 2, false);
	ctx.moveTo(110, 75);
	ctx.arc(75, 75, 35, 0, Math.PI, false);
	ctx.moveTo(65, 65);
	ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
	ctx.moveTo(95, 65);
	ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
	ctx.stroke();
	ctx.fill();
	
	ctx.fillStyle = 'rgb(255,0,255)';
	ctx.beginPath();
	ctx.arc(75, 88, 20, 0, Math.PI, false);
	ctx.stroke();
	ctx.fill();



}

function getRndColor() {
	var r = 255 * Math.random() | 0, g = 255 * Math.random() | 0, b = 255 * Math.random() | 0;
	return 'rgb(' + r + ',' + g + ',' + b + ')';
}