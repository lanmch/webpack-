'use strict';

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './search.less';
// import img from './images/img.jpg';
// import icon from './images/icon.jpeg';
// import '../../common';

const React = require('react');
const img = require('./images/img.jpg');
const icon = require('./images/icon.jpeg');
require('./search.less');

class Search extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            Text: null
        }
    }
    jsLazyLoad() {
        import('./test').then((text) => {
            this.setState({
                Text: text.default
            })
        });
    }
    render() {
        const { Text } = this.state;
        return <div className="text">
            <div>this is the title</div>
            <div>这是标题</div>
            <div>改动2211</div>
            {
                Text ? 
                <Text /> : null
            }
            <img className="icon" src={icon} alt='' />
            <img src={img} alt=''  onClick={this.jsLazyLoad.bind(this)} />
        </div>;
    }
}

module.exports = <Search />;