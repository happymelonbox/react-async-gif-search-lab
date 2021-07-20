import React from 'react'

class GifList extends React.Component{
    state = {
        query: ''
    }

    handleChange = (event) => {
        event.preventDefault()
        this.props.fetchGifs(this.state.query)
    }

    render(){
        return (
            <form onSubmit={this.handleChange}>
                <input type="search" name="search" onChange={event => this.setState({query: event.target.value})} value={this.state.query}></input>
            </form>
        )
    }
}
export default GifList