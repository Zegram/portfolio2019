import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class contact extends Component {

    onClick = (e) => {
        document.execCommand('JoelMit@Outlook.com');
    }

    render() {
        return (
            <div style={{ marginTop: "30px" }} className="ui stacked segment">
                <h3 style={{ marginBottom: "40px" }}>Contact</h3>
                <span className="IconPadding" data-tooltip="Github"><a href="https://github.com/Zegram"><i className="big blue github icon" /></a></span>

                <CopyToClipboard text="JoelMit@Outlook.com" onCopy={() => this.setState({copied: true})}>
                <span onClick={this.onClick} className="Cursor IconPadding" data-tooltip="E-Mail (Copy to clipboard)"><i className="big blue mail icon" /></span>
                </CopyToClipboard>
            </div>
        );
    }
}

export default contact;