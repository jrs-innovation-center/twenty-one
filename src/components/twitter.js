import React from 'react'

const TwitterButton = props => (
  <a
    className="mr2 f6 link dim ph3 pv2 br2 mb2 dib white bg-light-blue"
    href={`https://twitter.com/intent/tweet?text=${props.text}`}
  >
    Tweet
  </a>
)

export default TwitterButton
