/**
* LinearAnimation
* @constructor
*/
class LinearAnimation extends Animation{
	constructor(scene, id, speed, controlPoints){

		super(scene, id);
		this.controlPoints = controlPoints;
		this.speed = speed;
	}
}


