import React, { Component } from 'react';

export class Newsitem extends Component {
    render() {
        let {title, description , imageurl , url} = this.props;
        return (
            <>
                <div className='card-body m-4 border-solid border-2 border-orange-400 p-4 w-[40vw] lg:w-[27vw] shadow-md'>
                    <div className='card-image'>
                        <img src={imageurl} alt="" />
                    </div>
                    <div className='card-short_content'>
                        <h3 className='card-title font-bold'>{title}</h3>
                        <p className='card-content'>{description}</p>
                    </div>
                    <div className='read-more-button my-5'>
                       <a href={url} className="p-4 bg-orange-400 text-white hover:bg-orange-500 transition-colors duration-100">Read More</a>     
                    </div>
                </div>
            </>
        )
    }
}

export default Newsitem
