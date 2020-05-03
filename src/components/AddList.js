import React, { Component } from 'react'

class Addlist extends Component {
    state = {
        title: '',
        id: ''
    }
    onchangeAction = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    submitAction = (e) => {
        e.preventDefault();
        console.log(this.state.title)
        this.props.addAction(this.state)
        this.setState({
            title: ''
        })
    }
    render() {
        return (
            <div className="add-list">
                <form onSubmit={this.submitAction}>
                    <input type="text" onChange={this.onchangeAction} value={this.state.title} />
                    <button className="add-btn">Add</button>
                </form>
            </div>
        )
    }
}

export default Addlist