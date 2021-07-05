import React, {Component} from "react";
import "../styles/Body.scss";
class Body extends Component{
    render(){
        return(
            <div className="body">
                <div>
                    <h2>Transform your brand</h2>
                    <p className="desc">We are a full-service agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing gr you.</p>
                    <button>LEARN MORE</button>
                </div>
                <div>Photu</div>
            </div>
        );
    }
}

export default Body;