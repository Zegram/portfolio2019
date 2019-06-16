import React, { Component } from 'react';

class stack extends Component {
    render() {
        return (
            <div style={{ marginTop: "30px" }} className="ui stacked compact segment">
                <h3 style={{ marginBottom: "40px" }}>Stack</h3>
                <span className="IconPadding" data-tooltip="React"><i className="big blue react icon" /></span>
                <span className="IconPadding" data-tooltip="Javascript"><i className="big blue js icon" /></span>
                <span className="IconPadding" data-tooltip="HTML5"><i className="big blue html5 icon" /></span>
                <span className="IconPadding" data-tooltip="CSS3"><i className="big blue css3 alternate icon" /></span>
                <span className="IconPadding" data-tooltip="Git"><i className="big blue git icon" /></span>
                <span className="IconPadding" data-tooltip="Npm"><i className="big blue npm icon" /></span>
                <span className="IconPadding" data-tooltip="Node.js"><i className="big blue node js icon" /></span>
            </div>
        );
    }
}

export default stack;