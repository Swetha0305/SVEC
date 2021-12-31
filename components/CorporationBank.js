import React, { Component } from 'react'

export default class CorporationBank extends Component {
    render() {
        return (
            <div>
                <h1>Corporation Bank is loscated @{this.props.located}</h1>
            </div>
        )
    }
}
