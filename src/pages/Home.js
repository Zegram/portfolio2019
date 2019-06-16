import React, { Component } from 'react';
import Stack from "../components/stack";
import Intro from "../components/intro";
import Contact from "../components/contact";
import Projects from "../components/projects";
import Footer from "../components/footer";

class Home extends Component {
    render() {
        return (
            <div className="ui container">
                <Intro />

                <div className="ui grid">
                    <div className="five wide column"><Stack /></div>
                    <div className="four wide column"><Contact /></div>
                </div>
                <Projects />

                <Footer />
            </div>
        );
    }
}

export default Home;