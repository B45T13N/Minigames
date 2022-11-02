import React, { Component } from 'react'
import internal from 'stream'

type ColorProps = {
    id: number,
    color: string
}

type ColorState = {
}

export default class ColorComponent extends Component<ColorProps, ColorState> {

    render() {
        return (
            <h2>{this.props.id} {this.props.color}</h2>
        )
    }
}
