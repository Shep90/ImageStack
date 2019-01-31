let stack_array = [];
var img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15;

function preload() {
	img0 = loadImage("Cristina Ricci 0.jpg");
	img1 = loadImage("Cristina Ricci 1.jpg");
	img2 = loadImage("Cristina Ricci 2.jpg");
	img3 = loadImage("Cristina Ricci 3.jpg");
	img4 = loadImage("Cristina Ricci 4.jpg");
	img5 = loadImage("Cristina Ricci 5.jpg");
	img6 = loadImage("Cristina Ricci 6.jpg");
	img7 = loadImage("Cristina Ricci 7.jpg");
	img8 = loadImage("Cristina Ricci 8.jpg");
	img9 = loadImage("Cristina Ricci 9.jpg");
	img10 = loadImage("Cristina Ricci 10.jpg");
	img11 = loadImage("Cristina Ricci 11.jpg");
	img12 = loadImage("Cristina Ricci 12.jpg");
	img13 = loadImage("Cristina Ricci 13.jpg");
	img14 = loadImage("Cristina Ricci 14.jpg");
	img15 = loadImage("Cristina Ricci 15.jpg");
}

function setup() {
	
	createCanvas(800, 1024);
	
	let pic_array = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];
	
	for (let i = 0; i < 16; i++) {
		let Pos_x = round(random(0, 1004));
		let Pos_y = round(random(0, 780));
		let Size_x = round(random(200, 1024 - Pos_x));
		let Size_y = round(random(200, 800 - Pos_x));
		let pic = random(pic_array);
		let b = new ImageStack(pic, Pos_x, Pos_y, Size_x, Size_y);
		stack_array.push(b);
		
	}
}

function draw() {
	background(220);
	image(img0, 0, 0);
	tint(255, 200); 
	for (let i = 0; i < stack_array.length; i++) {
		stack_array[i].display();
	}
}