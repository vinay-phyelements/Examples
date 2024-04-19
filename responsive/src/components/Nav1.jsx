import React, { useState } from 'react'

function Nav1() {
    const[count,setCount]=useState(0)
    const btnone=()=>{
        setCount(count+1);
    }
  return (
    <div style={{textAlign:"right"}}>
       <button onClick={btnone}>Click</button> 
      Count is {count}
    </div>
  )
}

export default Nav1
