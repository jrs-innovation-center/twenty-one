import React from 'react'

export default ({ onClick, children }) => (
  <a
    className="br2 f6 link dim ph3 pv2 mb2 dib white bg-dark-green mh3"
    onClick={onClick}
    href="#"
  >
    {children}
  </a>
)
