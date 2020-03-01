import React from 'react';
import './style.css'

export default function Layout(props) {
  return (
    <div className="view-panel-container">
    	<div className="left-column">
    		{props.left}
    	</div>
    	<div className="right-column">
    		<div className="output">{props.output}</div>
            <div className="lower">
                {props.lower}
            </div>
    	</div>
    	
    </div>
  )
}