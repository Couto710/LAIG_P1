/**
* CircularAnimation
* @constructor
*/
class CircularAnimation extends Animation{
	constructor(scene, id, speed, center, radius, startang, rotang){
		super(scene, id);
		this.speed = speed;
		this.center = center;
		this.radius = radius;
		this.startang = startang;
		this.rotang = rotang;
	}
}

