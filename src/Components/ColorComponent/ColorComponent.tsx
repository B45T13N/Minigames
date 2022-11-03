import { Component } from 'react'

type ColorProps = {
    id: number,
    color: string
    image_path: string
}

type ColorState = {
}

export default class ColorComponent extends Component<ColorProps, ColorState> {

    render() {
        return (
            <div id={this.props.color} className="w-6/12 flex justify-between place-items-center" data-path={this.props.image_path}>
                <img src={this.props.image_path} alt="" />
                {this.props.color}
            </div>

        )
    }
}
