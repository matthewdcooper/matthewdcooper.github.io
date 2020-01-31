

class Box {
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}

	draw() {
		ctx.beginPath();
		ctx.rect(this.x, this.y, this.w, this.h);
		ctx.stroke();
	}

	drawConnection(box) {
		// draw a connection 'pipe' from this to box
		// assuming that this.x < box.x

		let startx = this.x + randint(2, this.w-2);
		let starty = this.y;
		if (this.higherThan(box)) {
			starty = this.y + this.h;
		}
		let midx = startx;
		let midy = box.y + randint(2, box.h-2);
		let endx = box.x;
		let endy = midy;

		circle(startx, starty);
		circle(endx, endy);
		ctx.beginPath();
		ctx.moveTo(startx, starty);
		ctx.lineTo(midx, midy);
		ctx.lineTo(endx, endy);
		ctx.stroke();


	}

	center() {
		// return center coordinates of this box
		return {x: this.x + this.w/2,
			y: this.y + this.h/2}

	}

	higherThan(box) {
		return this.center().y < box.center().y;
	}

}



function circle(x, y) {
	ctx.beginPath();
	ctx.arc(x, y, 1, 0, 2 * Math.PI, false);
	ctx.stroke();

}

function randint(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}




function drawBanner() {

	window.canvas = document.getElementById('banner');
	let html = document.getElementsByTagName('html')[0];
	let h1 = document.getElementsByTagName('h1')[0];
	canvas.width = html.clientWidth;
	canvas.height = h1.clientHeight * 2;
	window.ctx = canvas.getContext('2d');

	//ctx.translate(0.5, 0.5);
	ctx.fillStyle = '#3A8387';
	ctx.strokeStyle = '#799D8E';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.lineWidth = 2;
	
	let boxes = [];

	for (let i = 0; i < 100; i++) {
		let x = randint(0, canvas.width);
		let y = randint(0, canvas.height);
		let w = randint(10, 50);
		let h = randint(10, 50);
		boxes.push(new Box(x, y, w, h));
	}

	boxes.sort((a, b) => a.x > b.x);

	for (let i = 1; i < boxes.length; i++) {
		boxes[i-1].draw();
		boxes[i-1].drawConnection(boxes[i]);
	}
	boxes[boxes.length-1].draw();







}
