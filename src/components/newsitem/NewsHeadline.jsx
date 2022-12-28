import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class NewsHeadline extends Component {
    constructor(){
        super();
        this.state={
            articles : [],
            loading : false
        }
    }

    async componentDidMount() {
        //executes after the render function
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=d362129cfcc543739f19b8e7ffd5204a";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles : parsedData.articles});

    }

    render() {
        return (
            <div>
                {this.state.articles.map((element)=>{
                    return <Newsitem title={element.title} description={element.description} imageurl={element.urlToImage} />
                })}
                
            </div>
        )
    }
}

export default NewsHeadline
