import React from "react";

class Collapse extends React.Component {
    constructor (props) {
        super(props)

        // При декомпозиции неккоретно работет isShown = undefined
        // назначение по отдельности работает
        // const {text, isShown} = this.props

        this.text = this.props.text
        this.isShown = this.props.opened

        this.state = {
            text: this.props.text,
            isShown : this.props.opened
        }
    }

    tumblerHandler = (e) => {
        const ariaExpandedValue = e.target.getAttribute("aria-expanded")

        if (ariaExpandedValue === "true") {
            this.isShown = !this.isShown
            document.querySelector('.collapse').className = "collapse hide"
            e.target.setAttribute("aria-expanded", this.isShown)
            e.target.innerText = "Show text"
        }
        else if (ariaExpandedValue === "false") {
            this.isShown = !this.isShown
            document.querySelector('.collapse').className = "collapse show"
            e.target.setAttribute("aria-expanded", this.isShown)
            e.target.innerText = "Hide text"
        }
    }

    render() {
        return (
            <div>
                <p>
                    <a className="btn btn-primary" data-bs-toggle="collapse" href="#" role="button"
                       aria-expanded={this.isShown} onClick={this.tumblerHandler}>
                        {this.isShown ? "Hide text" : "Show text"}</a>
                </p>
                <div className="collapse show">
                    <div className="card card-body">
                        {this.text}
                    </div>
                </div>
            </div>
        )
    }
}

export default Collapse