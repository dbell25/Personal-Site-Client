/**
 * @fileoverview Displays user dashboard.
 * @author Daniel Bell
 */
import React, { Component } from 'react'
import Navbar from './navbar';

export default class User extends Component {
    constructor(props) {
        super(props)
        this.statusMessages = React.createRef();
        this.currentUser = this.props.location.state;
        this.key = 0;
        this.state = {
            view: <p>Nothing To Display Yet</p>,
            loggedIn: true
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="component">
                    <h1>User Dash</h1>
                    {this.state.view}
                </div>
            </div>
        );
    }
}