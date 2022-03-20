import { useState } from "react"
import React from 'react'

export default function Filter(props) {
    const [burner, setburner] = useState(false)
    const [subscription, setsubscription] = useState(false)


    return (
        <>
            {props.isShow ?
                <div className='filterDiv'>
                    <div className='filterHead'>
                        <p>Filters</p>
                    </div>
                    <p className='cardTypehead'>Type</p>
                    <div className='ckeckDiv'>
                        <div className='checkBoxes'>
                            <input type="checkbox" name="burner" value={burner} checked={burner} onChange={() => !burner ? setburner(true) : setburner(false)} />
                            <p className='ml-0'>&nbsp;Burner</p>
                        </div>
                        <div className='checkBoxes'>
                            <input type="checkbox" name="subscription" value={subscription} checked={subscription} onChange={() => !subscription ? setsubscription(true) : setsubscription(false)} />
                            <p className='ml-0'>&nbsp;Subscription</p>
                        </div>
                    </div>
                    <div className='actionDiv'>
                        <button className="applyBtn" onClick={() => props.applyFilter({ "burner": burner, "subscription": subscription })}>Apply</button>
                        <button className="clearBtn" onClick={() => {
                            setburner(false)
                            setsubscription(false)
                            props.clearFilter()
                        }}>Clear</button>
                    </div>

                </div> : null
            }
        </>
    )
}
