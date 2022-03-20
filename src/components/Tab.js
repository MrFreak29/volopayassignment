import React from 'react'
import { Navigate } from 'react-router-dom';

export default function Tab(props) {
    console.log(props);
    return (
        <div className='tab'>
            {/* {props.active == "Yours" ? <Navigate to="/yours" replace /> :
                props.active == "Blocked" ? <Navigate to="/Blocked" replace /> :
                    <Navigate to="/All" replace />
            } */}
            <div className='tabHeader'>
                <div className='tabMenu'>
                    <span className={props.active == "Yours" ? "borderbtm" : null} onClick={() => {
                        props.setActive("Yours")
                    }}><b>Yours</b></span>
                    <span className={props.active == "All" ? "borderbtm" : null} onClick={() => props.setActive("All")}><b>All</b></span>
                    <span className={props.active == "Blocked" ? "borderbtm" : null} onClick={() => props.setActive("Blocked")}><b>Blocked</b></span>
                </div>
            </div>
            <div className='SerachFiltrRow'>
                <input className='search' placeholder='Search by card name' onChange={(e) => props.search(e)} />
                <button className='addCard2' onClick={props.filter}><img className='filterImg' src={process.env.PUBLIC_URL + "./filter.png"} />Filter</button>
            </div>
            <div className='cardContainer'>
                {props.children}
            </div>
        </div>
    )
}
