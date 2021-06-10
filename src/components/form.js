import React, { Component } from 'react'

class form extends Component {
    render() {
        // handle=()=>
        // {

        // }
        return (
            <div>
                <form onSubmit={this.props.getweather} >
                <input placeholder="City name" name="city"></input>
                
                <input placeholder="Country name" name="country"></input>
                <button>Get weather</button>
                </form>
            </div>
        )
    }
}

export default form
