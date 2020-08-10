import React from 'react'
import { LoaderBase, LoaderContainer } from '../../styles'

function Loader() {
  return (
    <LoaderContainer>
      <LoaderBase>
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </LoaderBase>
    </LoaderContainer>
  )
}

export default Loader
