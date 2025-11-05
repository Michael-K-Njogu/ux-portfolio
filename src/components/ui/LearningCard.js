import React from "react"
import { BoxArrowUpRight } from "react-bootstrap-icons"

class LearningCard extends React.Component {
    render() {
        return (
                <div className="learning-card">
                    <div className="learning-card-img">
                    <img src={this.props.icon} alt={this.props.alt} />
                    </div>
                    <div className="learning-card-text">
                    <h5>{this.props.title}</h5>
                    <p>{this.props.source}</p>                  
                    {this.props.link ?
                    <a href={this.props.link} rel="nofollow noreferrer" target="_blank">
                        View credential
                        <span className="bootstrap-icon">
                            <BoxArrowUpRight size={16} className="ms-2" />
                        </span>
                    </a>
                    :
                    <span>In progress</span>
                    }
                    </div>
                </div>
        )
    }
}

export default LearningCard