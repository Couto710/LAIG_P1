/**
* BezierAnimation
* @constructor
*/
class BezierAnimation extends Animation{	
	constructor(scene, id, speed, controlPoints){

		super(scene, id);
		this.controlPoints = controlPoints;
		this.speed = speed;
		this.matrix = mat4.create();

		this.p1 = this.controlPoints[0];
		this.p2 = this.controlPoints[1];
		this.p3 = this.controlPoints[2];
		this.p4 = this.controlPoints[3];

	}

	calcMatrix(){}
}
