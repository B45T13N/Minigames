import React, {Component, useRef} from 'react';

type PinPlaceProps = {
    id: string
}

type PinPlaceState = {
    divRectangleValue: DOMRect
}
export default class PinPlaceComponent extends Component<PinPlaceProps, PinPlaceState> {
    componentDidMount() {
        
    }
    render() {
        return (
            <div id={this.props.id} className='w-1/4 border-solid border-2 border-black bg-gray-400 flex items-center justify-center'>
                <div className='bg-black w-3 h-3 rounded-full'>

                </div>
            </div>
        );
    }
}
