import React, { Component } from "react";
import Spinner from "../Spinner/Spinner";
import Newsitem from "./Newsitem";

export class NewsHeadline extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    //executes after the render function
    this.setState({
      loading: true,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=d362129cfcc543739f19b8e7ffd5204a&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResult: parsedData.totalResults,
      loading: false,
    });
  }

  handleprev = async () => {
    this.setState({
      loading: true,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=d362129cfcc543739f19b8e7ffd5204a&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };

  handlenext = async () => {
    this.setState({
      loading: true,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=d362129cfcc543739f19b8e7ffd5204a&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      loading: false,
    });
  };

  render() {
    return (
      <div>
        {this.state.loading && (
          <div className="flex justify-center">
            <Spinner />
          </div>
        )}
        {!this.state.loading && this.state.articles.map((element) => {
          return (
            <Newsitem
              title={element.title}
              description={element.description}
              imageurl={element.urlToImage}
            />
          );
        })}
        <div className="next_prev_container">
          <button
            disabled={this.state.page <= 1}
            className="bg-yellow-500 p-2 m-2"
            onClick={this.handleprev}
          >
            &larr; PREVIOUS
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResult / this.props.pageSize)
            }
            className="bg-green-600 p-2 m-2"
            onClick={this.handlenext}
          >
            NEXT &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default NewsHeadline;
