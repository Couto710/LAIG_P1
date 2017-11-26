/**
* BezierAnimation
* @constructor
*/
class BezierAnimation extends Animation{	
	constructor(scene, id, speed, controlPoints){

		super(scene, id);
		this.controlPoints = controlPoints;
		this.speed = speed;
	}
}
