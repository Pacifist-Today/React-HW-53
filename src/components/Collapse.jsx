import React from "react";

class Collapse extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            text: this.props.text,
            isShown : this.props.opened
        }
    }

    tumblerHandler = () => {
            this.setState(state => {
                return  {isShown: !this.state.isShown}
            })
    }

    render() {
        return (
            <div>
                <p>
                    <a className="btn btn-primary" data-bs-toggle="collapse" href="#" role="button"
                       aria-expanded={this.state.isShown} onClick={this.tumblerHandler}>
                        {this.state.isShown ? "Hide text" : "Show text"}</a>
                </p>
                <div className={this.state.isShown ? "collapse show" : "collapse hide"}>
                    <div className="card card-body">
                        {this.state.text}
                    </div>
                </div>
            </div>
        )
    }
}

export default Collapse