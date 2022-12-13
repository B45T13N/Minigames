import { Component } from 'react';
import Draggable, {DraggableData, DraggableProps} from 'react-draggable';

import './ColorComponent.css';

type ColorProps = {
    id: number,
    color: string
    image_path: string
}

type ColorState = {
    deltaPosition: {
        x: 0, y: 0
    },
    controlledPosition: {
        x: 0, y: 0
    }
}

export default class ColorComponent extends Component<ColorProps, ColorState> {

    checkPinPosition = (e: any, position: any) => {
        const {x, y} = position;
        this.setState({controlledPosition: {x, y}});
    }

    registerPinPosition = () => {
        console.log(this.state.controlledPosition);
    }

    render() {
        var divStyle = {
            backgroundImage: `url(${this.props.image_path})`,
        }
        return (
            <Draggable
                onDrag = {this.checkPinPosition}
                onStop = {this.registerPinPosition}
            >
                <div id={this.props.color} style={divStyle} className="pins w-1/4 h-2/4" data-path={this.props.image_path}>
                </div>
            </Draggable>

        )
    }
}
