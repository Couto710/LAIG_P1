/**
 * MyGraphLeaf class, representing a leaf in the scene graph.
 * @constructor
**/

function MyGraphLeaf(graph, xmlelem, args) {
	this.graph = graph;

	switch(xmlelem)
	{
		case "rectangle":
		this.primitive = new MyQuad(this.graph.scene, args);
		break;

		case "cylinder":
		this.primitive = new MyCylinder(this.graph.scene, args);
		break;

		case "sphere":
		this.primitive = new MySphere(this.graph.scene, args);
		break;

		case "triangle":
		this.primitive = new MyTriangle(this.graph.scene, args);
		break;
	}
}

