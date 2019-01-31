class ImageStack{
	constructor( _img, pos_x, pos_y, size_x, size_y ) {
		this.posx = pos_x; //X value for image position
		this.posy = pos_y; //Y value for image position
		this.sizex = size_x; //X value for size of cropped image
		this.sizey = size_y; //Y value for size of cropped image
		this.img = _img; //self explanitory
	}

	display() { //Survey says!
		image(this.img, this.posx, this.posy, this.sizex, this.sizey, this.posx, this.posy, this.sizex, this.sizey);
	}
}