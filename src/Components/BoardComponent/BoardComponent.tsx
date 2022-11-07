import { Component } from 'react'

type BoardProps = {
}

type BoardState = {
}

export default class BoardComponent extends Component<BoardProps, BoardState> {

    render() {
        return (

            <div className="w-screen flex justify-center items-center">
                <div id="boardGame" className='w-2/5 h-20 bg-black flex'>
                    <div id='pinPlace1' className='w-1/4 border-solid border-2 border-black bg-gray-400 flex items-center justify-center'>
                        <div className='bg-black w-3 h-3 rounded-full'>

                        </div>
                    </div>
                    <div id='pinPlace2' className='w-1/4 border-x-0 border-r-2 border-solid border-2 border-black bg-gray-400 flex items-center justify-center'>
                        <div className='bg-black w-3 h-3 rounded-full'>

                        </div>
                    </div>
                    <div id='pinPlace3' className='w-1/4 border-x-0 border-solid border-2 border-black bg-gray-400 flex items-center justify-center'>
                        <div className='bg-black w-3 h-3 rounded-full'>

                        </div>
                    </div>
                    <div id='pinPlace4' className='w-1/4 border-solid border-2 border-black bg-gray-400 flex items-center justify-center'>
                        <div className='bg-black w-3 h-3 rounded-full'>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
