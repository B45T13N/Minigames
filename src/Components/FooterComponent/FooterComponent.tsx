import React, { Component } from 'react'

export default class FooterComponent extends Component {
    render() {
        return (
            <footer className='h-1/6 w-screen items-center  justify-between bg-slate-500 flex'>
                <div className='h-100px'>
                    <h6 className='text-center'>Bienvenue sur Minigames.io</h6>
                </div>
            </footer>
        )
    }
}
