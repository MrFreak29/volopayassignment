import React, { useState } from 'react'


const Card = (props) => {
    const [data, setdata] = useState(props.data)

    return (
        <>
            {props.data ? props.data.map((card, index) => {
                let progress = {
                    width: `${((card.spent.value / (card.spent.value + card.available_to_spend.value)) * 100)}%`,
                    height: 10,
                    borderRadius: 10,
                    backgroundColor: '#ea4868',
                    marginLeft: 20,
                    marginRight: 20,
                    marginTop: -10,
                }
                return (
                    <div className='card' key={index}>
                        <div className='cardHead'>
                            <div>
                                <h3 className='cardTitle'>{card.name}</h3>
                                <div className='budgetName'><p className='ml-0'>Rajesh</p>&nbsp; - &nbsp;<p className='ml-0'>{card.budget_name}</p></div>
                            </div>
                            <div className='imgDiv'>
                                {card.card_type == "burner" ?
                                    <img className='burnerImg' src={process.env.PUBLIC_URL + "/fire.png"} /> :
                                    <img className='burnerImg' src={process.env.PUBLIC_URL + "/roundabout.png"} />}
                            </div>

                        </div>
                        {card.card_type == "burner" ?
                            <div className='cardTypeRow budgetName'><p className='ml-0 cardType'>BURNER</p><p className='ml-0'>Expires: {card.expiry}</p></div>
                            :
                            <div className='cardTypeRow budgetName'><p className='ml-0 cardType'>SUBSCRIPTION</p><p className='ml-0'>August Limit: {card.limit} SGD</p></div>
                        }
                        <div className='progressBar'></div>
                        <div style={progress}></div>
                        <div className='spentRow'>
                            <div className='spentRow1'>
                                <div className='circle'></div><p className='ml-0'>Spent</p>
                            </div>
                            <p className='ml-0 fWeigh'>{`${card.spent.value} ${card.spent.currency}`}</p>
                        </div>
                        <div className='spentRow'>
                            <div className='spentRow1'>
                                <div className='circle2'></div><p className='ml-0'>Available to spend</p>
                            </div>
                            <p className='ml-0 fWeigh'>{`${card.available_to_spend.value} ${card.available_to_spend.currency}`}</p>
                        </div>

                    </div>
                )
            }) : null}

        </>
    )
}

export default Card