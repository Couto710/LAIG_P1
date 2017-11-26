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

			var sptime = distance / this.speed;
			//partial speeds
			var velx = (this.controlPoints[i+1][0] - this.controlPoints[i][0]) / sptime;
			var vely = (this.controlPoints[i+1][1] - this.controlPoints[i][1]) / sptime;
			var velz = (this.controlPoints[i+1][2] - this.controlPoints[i][2]) / sptime;

			var angle = Math.acos((this.controlPoints[i+1][0] - this.controlPoints[i][0]) / distance);

			this.sectionStats.push([velx, vely, velz, angle]);
		}

		this.span = this.totaldistance / this.speed;
	}

	calcMatrix(time, section){

		console.log("section     " + section);
		console.log("tempos      " + this.sectionTimes);
		console.log(this.sectionStats);

		var ntime = time;
		if (section > 0)
			ntime -= this.sectionTimes[section-1];


		console.log("ntime          " + ntime);

		if(section < this.controlPoints.length - 1){

			var x = ntime * this.sectionStats[section][0];
			var y = ntime * this.sectionStats[section][1];
			var z = ntime * this.sectionStats[section][2];

			console.log("desloca     " + [x, y, z]);

			mat4.identity(this.matrix);
			mat4.translate(this.matrix, this.matrix, [x, y, z]);
			mat4.translate(this.matrix, this.matrix, [this.controlPoints[section][0], this.controlPoints[section][1], this.controlPoints[section][2]]);
		}
		return this.matrix;
	}
}


