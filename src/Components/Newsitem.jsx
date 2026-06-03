import React from 'react'

export default function Newsitem(props) {
    return (

        <div className='col-x1-2 col-lg-3 col-md-4 col-sm-6'>
            <div className="card" >
                <img src={props.pic ?? "/images/noimage.jpg"} height={200} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <div> <p>{props.source}</p> <p>{new Date(props.date).toLocaleDateString()}</p> </div>
                    <p className="card-text">{props.description}</p>
                    <a href={props.url} target='_blank' className="btn btn-primary">Read Full Article</a>
                </div>
            </div>
        </div>

    )
}
