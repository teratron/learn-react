import React from 'react'

//import { cat } from './cat.jpg'

class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img src="/cat/cat.png" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} alt="cat" width="100" />
        );
    }
}

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>

                {/*
            Вместо статического представления того, что рендерит <Mouse>,
            используем рендер-проп для динамического определения, что надо отрендерить.
            */}
                {this.props.render(this.state)}
            </div>
        );
    }
}

export default class MouseTracker extends React.Component {
    render() {
        return (
            <div>
                <h1>Перемещайте курсор мыши!</h1>
                <Mouse render={mouse => (<Cat mouse={mouse} />)} />
            </div>
        );
    }
}