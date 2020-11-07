import React, { Component } from 'react'

class HeaderComponet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div> <a href="https://javaguides.net" className="navbar-brand">Employee Management App</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}
export default HeaderComponet