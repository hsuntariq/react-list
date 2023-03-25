import React, { useState } from 'react'
import { data } from './data'
import SingleList from './SingleList';

const Listings = () => {
    const [art, setArt] = useState(data);

return (
    <>
        <div className="container my-5">
        <button onClick={()=>setArt([])} className="d-flex justify-content-center btn btn-danger w-25 m-auto text-capitalize">
            delete art
        </button>
    </div>
        <div className="row d-flex" style={{flexWrap:'wrap',gap:'2rem'}}>
            {art.map((item) => {
                return (
                    <>
                        <SingleList key={item.id} {...item} />
                        
                    </>
                )
            })}
        </div>
    </>
)
}

export default Listings
