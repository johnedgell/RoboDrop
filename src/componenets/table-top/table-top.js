import React, {Component} from 'react';
import './style.css'
export default class TableTop extends Component{

	constructor(props){
		super(props)
		this.tableGrid = React.createRef();
		this.context = null
	}

	componentDidMount() {

   		this.context = this.tableGrid.current.getContext('2d');

		this.context.fillStyle = "#238EC1"; 
		this.context.fill();

		const canvasW = mapCanvas.current.getBoundingClientRect().width;
		const canvasH = mapCanvas.current.getBoundingClientRect().height;
		
		this.context.fillRect(0, 0, canvasW ,canvasH)

  		this.context.font = "20px Arial";

   		this.drawMap()

	}

	componentDidUpdate(prevProps) {

		this.context = this.mapCanvas.current.getContext('2d');
		this.drawMap()

	}

	drawMap = () =>{

		let tree = this.state.tree;

  		if(tree.length > 0){

  			this.drawBoxes(tree)
  			
  		}

	}

	drawBoxes = (level) =>{
		
		let scale = this.scale

		for(let block of level){

  				let {x1, y1, width, height, id} = block
  				
  				this.context.fillStyle = (!block.isLand) ?  this.seaColor : this.landColor;
  				this.context.beginPath();
				this.context.lineWidth = .5;
				
				x1 = x1 * this.scale
				y1 = y1 * scale

				width = width * scale
				height = height * scale


				this.context.fillRect(x1, y1, width, height);
				this.context.rect(x1, y1, width, height);
				this.context.stroke();

				this.context.fillStyle = "red";

				this.context.fillText(id, x1, y1);

				if(block.children.length > 0){

					this.drawBoxes(block.children)

				}
  			}
	}

	render() {

  		return (
  			<div className="map-container">
  				<div>
  					<canvas id="tableGrid" ref={this.tableGrid} width="500px" height="400px"></canvas>
  				</div>
  			</div>
  		)
	}

}