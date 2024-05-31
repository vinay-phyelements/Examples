import React from 'react'
import Sample from './Sample';

function Trial(props) {
  return (
    <div>
      Hello {props.name}
      <Sample name={props.name}/>
    </div>
  )
}

export default Trial
