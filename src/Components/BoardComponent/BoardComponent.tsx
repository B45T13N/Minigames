<<<<<<< HEAD
import React, { Component, ReactElement, ReactNode } from 'react'
import ReactDOM from 'react-dom';
import { JsxElement } from 'typescript'
import './BoardComponent.css';

=======
import { Component } from 'react'
import ColorComponent from "../ColorComponent/ColorComponent";
import PinPlaceComponent from "../PinPlaceComponent/PinPlaceComponent";
>>>>>>> 811636325465b2fa2596e3995978a5ca76ab8763

type BoardProps = {
}

type BoardState = {
    turn: number,
    boardGameLine: ReactElement,
    boardGame: [{ id: number, value: ReactElement }]
}

export default class BoardComponent extends Component<BoardProps, BoardState> {
    state: BoardState = {
        turn: 0,
        boardGameLine: <div id="boardGameLine" className='boardGameLine w-full h-20 bg-black flex'>
            <div id='pinPlace1' className='w-1/4  bg-gray-400 flex items-center justify-center'>
                <div className='bg-black w-3 h-3 rounded-full'></div>
            </div>
            <div id='pinPlace2' className='w-1/4 bg-gray-400 flex items-center justify-center'>
                <div className='bg-black w-3 h-3 rounded-full'></div>
            </div>
            <div id='pinPlace3' className='w-1/4 bg-gray-400 flex items-center justify-center'>
                <div className='bg-black w-3 h-3 rounded-full'></div>
            </div>
            <div id='pinPlace4' className='w-1/4  bg-gray-400 flex items-center justify-center'>
                <div className='bg-black w-3 h-3 rounded-full'></div>
            </div>
        </div>,
        boardGame: [{
            id: 0,
            value: <div id="boardGameLine" className='boardGameLine w-full h-20 bg-black flex'>
                <div id='pinPlace1' className='w-1/4  bg-gray-400 flex items-center justify-center'>
                    <div className='bg-black w-3 h-3 rounded-full'></div>
                </div>
                <div id='pinPlace2' className='w-1/4 bg-gray-400 flex items-center justify-center'>
                    <div className='bg-black w-3 h-3 rounded-full'></div>
                </div>
                <div id='pinPlace3' className='w-1/4 bg-gray-400 flex items-center justify-center'>
                    <div className='bg-black w-3 h-3 rounded-full'></div>
                </div>
                <div id='pinPlace4' className='w-1/4  bg-gray-400 flex items-center justify-center'>
                    <div className='bg-black w-3 h-3 rounded-full'></div>
                </div>
            </div>
        },]
    };

    goToNextTurn() {
        let tmpTurn = this.state.turn + 1;
        this.setState({
            turn: tmpTurn,
            boardGameLine: <div id="boardGameLine" className='boardGameLine w-full h-20 bg-black flex'>
                <div id='pinPlace1' className='w-1/4  bg-gray-400 flex items-center justify-center'>
                    <div className='bg-black w-3 h-3 rounded-full'></div>
                </div>
                <div id='pinPlace2' className='w-1/4 bg-gray-400 flex items-center justify-center'>
                    <div className='bg-black w-3 h-3 rounded-full'></div>
                </div>
                <div id='pinPlace3' className='w-1/4 bg-gray-400 flex items-center justify-center'>
                    <div className='bg-black w-3 h-3 rounded-full'></div>
                </div>
                <div id='pinPlace4' className='w-1/4  bg-gray-400 flex items-center justify-center'>
                    <div className='bg-black w-3 h-3 rounded-full'></div>
                </div>
            </div>,
        });
        let tmpTable = this.state.boardGame;
        let tmpObject = {
            id: this.state.turn, value: this.state.boardGameLine
        };
        tmpTable.push(tmpObject);
        this.setState({
            boardGame: tmpTable,
        })

    }

    render() {
        return (

            <div className="w-screen flex justify-center items-center">
<<<<<<< HEAD
                <div id="boardGame" className='w-2/5 bg-black flex flex-col'>
                    {this.state.boardGame.map(object => (
                        <div id=''>{object.value}</div>
                    ))}
=======
                <div id="boardGame" className='w-2/5 h-20 bg-black flex'>
                    <PinPlaceComponent id={"pinPlace1"}/>
                    <PinPlaceComponent id={"pinPlace2"}/>
                    <PinPlaceComponent id={"pinPlace3"}/>
                    <PinPlaceComponent id={"pinPlace4"}/>
>>>>>>> 811636325465b2fa2596e3995978a5ca76ab8763
                </div>
                <button onClick={this.goToNextTurn.bind(this)}>Next turn !</button>
            </div>
        )
    }
}
