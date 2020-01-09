import React from 'react';


function Square() {
    const createSquare = () => {

        //edit the square
        // const disabled = !editable;
        // const squareValue = value === '.' ? "" : value;

        //borders
        const style = {};
        const ri = props.rowIndex;
        const ci = props.colIndex;
        
        if(ri > 0 && ri % 3 === 0) {
			style['borderTop'] = '2px solid black';
		}
		if(ci > 0 && ci % 3 === 0) {
			style['borderLeft'] = '2px solid black'
		}
		if(this.props.conflict) {
			if(this.props.editable) {
				style['background'] = 'red';
			} else {
				style['border'] = '1px solid red';
			}
		}

		return (
			<td>
			  <input
				className       = "Square"
			    style           = {style}
			  	type 			= "text"
			  	value 			= {squareValue}
			  	disabled 		= {disabled}
			  	onChange 		= {this.handleSquareValueChange}/>
			</td>
			);
	}

	handleSquareValueChange = (e) => {
		const newSquareValue = e.target.value;
		if(this.isValidInput(newSquareValue)) {
			const ri = this.props.rowIndex;
			const ci = this.props.colIndex;
			this.props.onValueChange(ri, ci, newSquareValue);			
		}
	}

	isValidInput = (i) => {
		return (i === '' || (i.length === 1 && isNumeric(i)));
	}

	return this.generateSquareContent();

}

const isNumeric = (num) => {
		return !isNaN(num);
    }

export default Square;