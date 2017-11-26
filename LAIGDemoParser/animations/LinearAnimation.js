/**
* LinearAnimation
* @constructor
*/
class LinearAnimation extends Animation{
	constructor(scene, id, speed, controlPoints){

		super(scene, id);
		this.controlPoints = controlPoints;
		this.speed = speed;
		this.matrix = mat4.create();

		this.sectionTimes = [];
		this.sectionStats = [];

		this.totaldistance = 0;
		for(var i = 0; i < this.controlPoints.length - 1; i++){
			//distance and time
			var distance = Math.sqrt(
				Math.pow(this.controlPoints[i+1][0] - this.controlPoints[i][0], 2) + 
				Math.pow(this.controlPoints[i+1][1] - this.controlPoints[i][1], 2) + 
				Math.pow(this.controlPoints[i+1][2] - this.controlPoints[i][2], 2));

			this.totaldistance += distance;
			
			var stime = this.totaldistance / this.speed;
			this.sectionTimes.push(stime);

			//partial speeds
			var velx = (this.controlPoints[i+1][0] - this.controlPoints[i][0]) / stime;
			var vely = (this.controlPoints[i+1][1] - this.controlPoints[i][1]) / stime;
			var velz = (this.controlPoints[i+1][2] - this.controlPoints[i][2]) / stime;

			var angle = Math.acos((this.controlPoints[i+1][0] - this.controlPoints[i][0]) / distance);

			this.sectionStats.push([velx, vely, velz, angle]);
		}

		this.span = this.totaldistance / this.speed;
	}

	calcMatrix(time, section){

		var time = time;
		if (section > 0)
			time -= this.sectionTimes[section];

		if(section < this.controlPoints.length - 1){

			var x = time * this.sectionStats[section][0];
			var y = time * this.sectionStats[section][1];
			var z = time * this.sectionStats[section][2];

			mat4.identity(this.matrix);
			mat4.translate(this.matrix, this.matrix, [x, y, z]);
		}

	}
}


