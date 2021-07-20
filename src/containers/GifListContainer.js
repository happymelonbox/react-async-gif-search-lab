import React from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component{
   state = {
    items: [],
    }


    render(){
        return(
            <div>
            < GifSearch fetchGifs = {this.fetchGifs}/>
            < GifList itemList={this.state.items}/>
            </div>
        )
    }

    
    fetchGifs = (query='alexgrey') => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=85J8k25QZ1HMpd5USykcg16ObvZTDiZh&rating=g&limit=3`)
        .then(resp=>resp.json())
        .then(({data})=>{
            this.setState({
                items: data.map( gif => ({url: gif.images.original.url}))
            })
        })
    }

    componentDidMount(){
        this.fetchGifs()
    }
}
export default GifListContainer