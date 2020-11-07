import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
    }
    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted">All rights Reserved 2020 @ChandraKaranam</span>
                </footer>
            </div>
        )
    }
}
export default FooterComponent