import React, { Component } from 'react';

class project extends Component {
    renderIcons() {
        if (!this.props.noIcons) {
            return (
                <div className="Techs">
                    <a data-tooltip="Repository" className="" href={this.props.githubUrl}><i class="circular github icon" /></a>
                    <a data-tooltip="Demo" class="links" href={this.props.demoUrl}><i class="circular chrome icon" /></a>
                </div>
            )
        }
    }

    renderpic(){
        if(this.props.img){
            return(
                <img class="ui large image" alt="pic" src={this.props.img} />
            )
        }
    }
    render() {
        return (
            <div class="ui two column very relaxed grid">
                <div class="column">
                    <h3 className="header">{this.props.title}</h3>
                    <p>{this.props.description}</p>
                    {this.renderIcons()}
                </div>
                <div class="column">
                    {this.renderpic()}
                </div>
            </div>
        );
    }
}

export default project;