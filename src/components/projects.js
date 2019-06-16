import React, { Component } from 'react';
import Project from "./project";
import img1 from "../img/videos.png";
import img2 from "../img/pics.png";
import img3 from "../img/rools.png";
import img4 from "../img/ael.png";
import img5 from "../img/ritualsabotage.jpg";

class projects extends Component {
    state = { id: 0 }

    renderProject() {
        const { id } = this.state;
        switch (id) {
            case 0: {
                return (
                    <Project 
                    description="These are some of the projects ive done while being a web developer. You can find all my public projects in my github."
                    noIcons={true} />
                    )
            }

            case 1: {
                return(
                    <Project 
                    title="Prototype" 
                    description="Prototype made for AEL for the possibility of a real project in the future. Worked together closely with the customer to create a working application with required features."
                    img={img4} 
                    noIcons={true} />
                )
            }

            case 2: {
                return(
                    <Project 
                    title="Log work optimization application"
                    description="Customer project made for optimization of field work in sawmills in Finland. My responsibility was the front end of the web application and mobile application. For more information about this, ask me directly." 
                    img={img3} 
                    githubUrl=""
                    demoUrl="" 
                    noIcons={true}/>
                )
            }

            case 3: {
                return (
                    <Project
                        title="Youtube App"
                        description="Practice project. Uses axios to fetch data from googles API. The site has functional video search and video player."
                        img={img1}
                        githubUrl="https://github.com/Zegram/videos"
                        demoUrl="https://zegram.github.io/videos/" />
                )
            }

            case 4: {
                return(
                    <Project 
                    title="Pictures"
                    description="Application that uses axios to search picture data from unsplash API and display it."
                    img={img2}
                    githubUrl="https://github.com/Zegram/pics"
                    demoUrl="https://zegram.github.io/pics/" />
                )
            }

            case 5: {
                return(
                    <Project name="Ritual Sabotage" 
                    description="Finnish Game Jam 2016 Entry. While my main focus is in Web Development, I was kind of proud what we did in that one weekend. Ritual Sabotage is a game done in C# (Unity game engine) with a group of 4 people. My main work in this project was coding the game functionality."
                    img={img5}
                    githubUrl="https://github.com/zeropointx/FGJ2016"
                    demoUrl="https://globalgamejam.org/2016/games/ritual-sabotage" />
                )
            }
            default: return <div></div>
        }
    }

    changePage = (id) => { this.setState({ id }) }

    renderTab = (id, name) => {
        const className = this.state.id === id ? "Selected active item Tab" : "active item Tab";
        return(
            <div onClick={() => this.changePage(id)} className={className}>{name}</div>
        )
    }

    render() {
        return (
            <div style={{ marginTop: "50px" }}>
                <div className="ui top attached tabular menu">
                    {this.renderTab(0, "Projects")}
                    {this.renderTab(1, "AEL")}
                    {this.renderTab(2, "Log Work")}
                    {this.renderTab(3, "Youtube App")}
                    {this.renderTab(4, "Pictures")}
                    {this.renderTab(5, "Ritual Sabotage")}
                </div>
                <div className="ui bottom attached active tab segment">
                    {this.renderProject()}
                    <div className="ui vertical divider" />
                </div>
            </div>
        );
    }
}

export default projects;