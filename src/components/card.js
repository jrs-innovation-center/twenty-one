import React from 'react'

const back =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Card_back_02.svg/1000px-Card_back_02.svg.png'

const Card = props => {
  return <img className="card animated flip" src={props.image} />
}

export default Card
