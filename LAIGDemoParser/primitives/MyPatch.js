function MyPatch(scene, args) {
	this.args=args || ("0", 1, // degree on U: 2 control vertexes U
					 1, // degree on V: 2 control vertexes on V
					[	// U = 0
						[ // V = 0..1;
							 [-2.0, -2.0, 0.0, 1 ],
							 [-2.0,  2.0, 0.0, 1 ]
							
						],
						// U = 1
						[ // V = 0..1
							 [ 2.0, -2.0, 0.0, 1 ],
							 [ 2.0,  2.0, 0.0, 1 ]							 
						]
					]);

	this.id = this.args[0];
	this.degree1 = this.args[1];
	this.degree2 = this.args[2];
	this.controlvertexes = this.args[3];
	this.translation = this.args[4];
	
	this.makeSurface(id,degree1,degree2,controlvertexes,translation);
			
};

MyPatch.prototype.getKnotsVector = function(degree) {
	
	var v = new Array();
	for (var i=0; i<=degree; i++) {
		v.push(0);
	}
	for (var i=0; i<=degree; i++) {
		v.push(1);
	}
	return v;  
}


MyPatch.prototype.makeSurface = function (id, degree1, degree2, controlvertexes, translation) {
		
	var knots1 = this.getKnotsVector(degree1); 
	var knots2 = this.getKnotsVector(degree2);
		
	var nurbsSurface = new CGFnurbsSurface(degree1, degree2, knots1, knots2, controlvertexes); // TODO  (CGF 0.19.3): remove knots1 and knots2 from CGFnurbsSurface method call. Calculate inside method.
	getSurfacePoint = function(u, v) {
		return nurbsSurface.getPoint(u, v);
	};

	//var obj = new CGFnurbsObject(this, getSurfacePoint, 20, 20 );
	//this.surfaces.push(obj);
}      
	
	