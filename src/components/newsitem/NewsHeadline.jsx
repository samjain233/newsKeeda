import React, { Component } from "react";
import Spinner from "../Spinner/Spinner";
import Newsitem from "./Newsitem";
import InfiniteScroll from "react-infinite-scroll-component";

export class NewsHeadline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResult: 0,
    };
    document.title = `${this.props.category.toUpperCase()} - NewsMonkey`;
  }

  async componentDidMount() {
    //executes after the render function
    this.setState({
      loading: true,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=d362129cfcc543739f19b8e7ffd5204a&page=1&pageSize=${this.props.pageSize}`;
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
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      this.props.category
    }&apiKey=d362129cfcc543739f19b8e7ffd5204a&page=${
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
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      this.props.category
    }&apiKey=d362129cfcc543739f19b8e7ffd5204a&page=${
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

  fetchMoreData = async () => {
    // this.setState({
    //   loading: true,
    // });
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      this.props.category
    }&apiKey=d362129cfcc543739f19b8e7ffd5204a&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      page: this.state.page + 1,
      // loading: false,
    });
  };

  render() {
    return (
      <>
        {/* {this.state.loading && (
          <div className="flex justify-center">
            <Spinner />
          </div>
        )} */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length != this.totalResults}
          loader={<Spinner />}
        >
          <div>
            <div className="flex justify-center items-center ">
              <div className="flex flex-row flex-wrap justify-left mx-[5vw]">
                {!this.state.loading &&
                  this.state.articles.map((element) => {
                    return (
                      <Newsitem
                        title={element.title}
                        description={element.description}
                        imageurl={element.urlToImage}
                        url={element.url}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default NewsHeadline;
