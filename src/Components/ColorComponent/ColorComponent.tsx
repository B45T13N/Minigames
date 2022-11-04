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
            <div id={this.props.color} className="w-1/4 flex justify-evenly place-items-center" data-path={this.props.image_path}>
                <img src={this.props.image_path} alt="" className='h-2/4' />
            </div>

        )
    }
}
