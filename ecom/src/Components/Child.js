import {React,memo} from 'react'

function Child({Learning,count}) {
    console.log('Child component');
  return (
    <div>
      
    </div>
  )
}

export default memo(Child)
