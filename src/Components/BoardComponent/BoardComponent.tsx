import { Component } from 'react'
import ColorComponent from "../ColorComponent/ColorComponent";
import PinPlaceComponent from "../PinPlaceComponent/PinPlaceComponent";

type BoardProps = {
}

type BoardState = {
}

export default class BoardComponent extends Component<BoardProps, BoardState> {

    render() {
        return (

            <div className="w-screen flex justify-center items-center">
                <div id="boardGame" className='w-2/5 h-20 bg-black flex'>
                    <PinPlaceComponent id={"pinPlace1"}/>
                    <PinPlaceComponent id={"pinPlace2"}/>
                    <PinPlaceComponent id={"pinPlace3"}/>
                    <PinPlaceComponent id={"pinPlace4"}/>
                </div>
            </div>
        )
    }
}
