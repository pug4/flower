const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.globalCompositeOperation = "lighter";
hue = Math.random() * 350;
let tens = Math.random() * 10;
let ones = Math.random() * 1;

let number = 0;
let scale = 40;

function drawFlower() {
	// changes the shape of the flower
	let angle = number * tens + ones;

	let radius = scale * Math.sqrt(number);
	let positionX = radius * Math.sin(angle) + canvas.width / 2;
	let positionY = radius * Math.cos(angle) + canvas.height / 2;

	ctx.fillStyle = "hsl(" + hue + ", 100%, 50%)";
	ctx.strokeStyle = "pink";
	ctx.lineWidth = 1;
	ctx.beginPath();
	//ctx.arc(positionX, positionY, 5, 0, Math.PI * 2);
	ctx.rect(positionX, positionY, 20, 20);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	number += 0.1;
	hue++;
}

function animate() {
	//Draw each frame
	//ctx.clearRect(0,0, canvas.width, canvas.height);
	drawFlower();

	if (number > 50) {
		return;
	}
	requestAnimationFrame(animate);
}

animate();
