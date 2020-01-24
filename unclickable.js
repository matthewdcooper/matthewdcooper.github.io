let cnv, ctx;
let x, y;
let xv, yv;
let prev_mouse;
let modifier = 0.2;


let magnitude = (x, y) => Math.sqrt(x*x + y*y); 


let getMousePos = (cnv, e) => {
	let rect = cnv.getBoundingClientRect();
	return {
		x: e.clientX - rect.left,
		y: e.clientY - rect.top
	};
};


function link(x, y) {
	ctx.fillStyle = "blue";
	ctx.fillText("click here", x-95, y+10);
};


function background(col) {
	ctx.fillStyle = col;
	ctx.fillRect(0, 0, cnv.width, cnv.height);
}


window.onload = function() {
	cnv = document.getElementById('cnv');
	ctx = cnv.getContext('2d');
	cnv.width = window.innerWidth;
	cnv.height = window.innerHeight;
	cnv.addEventListener('mousemove', function(e) {
		if (prev_mouse === undefined) {
			prev_mouse = getMousePos(cnv, e);
			return;
		}
		let mouse = getMousePos(cnv, e);
		
		// Check the mouse is moving toward the link.
		if (Math.abs(x - prev_mouse.x) < Math.abs(x - mouse.x) ||
				Math.abs(y - prev_mouse.y) < Math.abs(y - mouse.y)) {
			prev_mouse = mouse;
			return;		
		}
		
		// Where is the mouse relative to the link?
		let dx = x - mouse.x;
		let dy = y - mouse.y;
		let dist = magnitude(dx, dy);
		
		// In what direction has the mouse moved, and how much?
		let mdx = prev_mouse.x - mouse.x;
		let mdy = prev_mouse.y - mouse.y;
		let mdist = magnitude(mdx, mdy);
			
		x += dx / dist * mdist * modifier;
		y += dy / dist * mdist * modifier;
		
		modifier += 0.05;

		prev_mouse = mouse;
		
		background('#eee');
		link(x, y);
	});
	
	x = cnv.width / 2;
	y = cnv.height / 3;
	ctx.font = "30px mono";
	background('#eee');
	link(x, y);
};
