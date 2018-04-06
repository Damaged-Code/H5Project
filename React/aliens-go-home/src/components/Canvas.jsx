import React from 'react'
import Sky from './Sky'
import Grounds from './Grounds'
import CannonBase from './CannonBase'
import CannonPipe from './CannonPipe'
import PropTypes from 'prop-types'

const Canvas = props => {
  const style = {
    border: '1px solid black',
  }
  const viewBox = [
    window.innerWidth / -2,
    100 - window.innerHeight,
    window.innerWidth,
    window.innerHeight,
  ]
  return (
    <svg
      id="
    aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={props.trackMouse}
      viewBox={viewBox}
    >
      <Sky />
      <Grounds />
      <CannonPipe rotation={45} />
      <CannonBase />
    </svg>
  )
}
Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired,
}

export default Canvas
