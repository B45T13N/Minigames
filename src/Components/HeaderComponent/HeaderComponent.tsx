import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <h1 className="text-3xl font-bold underline">Bienvenue sur Minigames.io</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/mastermind">Mastermind</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
