import { Component, Fragment } from 'react'


export default class HeaderComponent extends Component {
    render() {
        return (
            <header className='h-1/6 w-screen items-center justify-between bg-slate-500 flex'>
                <h1 className="text-3xl font-bold w-3/4 underline pl-5">Minigames.io</h1>
                <nav className='w-1/4 pl-5'>
                    <ul className='flex justify-evenly'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/mastermind">Mastermind</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}