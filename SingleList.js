import React from 'react'

const Single_List = ( { image,name,info, setArt } ) => {
return (
    <>
        <div style={{height:'400px'}} className="container border shadow p-3 col-lg-4">
            <div className="image" style={{height:'50%'}}>
                <img style={{width:'100%',height:'100%',objectFit:'cover'}} src={image} alt="" />
            </div>
            <div className="name">
                <h1> {name} </h1>
            </div>
            <div className="info">
                <p> {info} </p>
            </div>
        </div>
    </>
)
}

export default Single_List
