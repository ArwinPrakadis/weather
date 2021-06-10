import React, { Component } from 'react'

class weather extends Component {
    render() {
        return (
            <div>
                {this.props.city && this.props.country && this.props.description && this.props.humidity&&
                
                <p>CITY NAME : {this.props.city}
               , COUNTRY : {this.props.country}

              ,  TEMPERATURE : {this.props.temperature}
             ,   HUMIDITY : {this.props.humidity}
              ,  CONDITIONS : {this.props.description}</p>}
              {this.props.error && <p>{this.props.error}</p>}
                
            </div>
        )
    }
}

export default weather
