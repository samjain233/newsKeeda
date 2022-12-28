import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title, description , imageurl} = this.props;
        return (
            <>
                <div className='card-body m-4'>
                    <div className='card-image'>
                        <img src={imageurl} alt="" />
                    </div>
                    <div className='card-short_content'>
                        <h3 className='card-title'>{title}</h3>
                        <p className='card-content'>{description}</p>
                    </div>
                    <div className='read-more-button'>

                    </div>
                </div>
            </>
        )
    }
}

export default Newsitem
