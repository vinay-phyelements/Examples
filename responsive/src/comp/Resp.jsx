import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
function Resp() {

  const navigate=useNavigate()
  function onebt(){
    navigate('/nav1')
  }
  const[showFullText,setShowFullText]=useState(false);
  const toggleText=()=>{
  setShowFullText(prevState=>!prevState);
  }
  return (
    <div className='container'>
     <nav>
        <ul className="list">
          <button id="btn" onClick={onebt}>One</button>
          <button id="btn">Two</button>
          <button id="btn">Three</button>
          <button id="btn">Four</button>
          <button id="btn">Five</button>
        </ul>
      </nav> 
      <main className="main-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores at
        sint similique, ex quibusdam provident nobis voluptatum qui officia
        aperiam assumenda delectus corporis nemo, repudiandae enim sequi dolor
        inventore veritatis.
      </main>

      <div id="sidebar">
      <span style={{ color: 'blue', fontSize: '30px' }}>Lorem ipsum dolor sit,</span>
        {showFullText?(
        <>
        amet consectetur adipisicing elit. Quis facilis, eaque aspernatur rem
        ducimus minus illo cupiditate, veniam deleniti incidunt excepturi at
        temporibus unde asperiores praesentium! Atque eos voluptatibus voluptas!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        amet consectetur adipisicing elit. Quis facilis, eaque aspernatur rem
        ducimus minus illo cupiditate, veniam deleniti incidunt excepturi at
        temporibus unde asperiores praesentium! Atque eos voluptatibus voluptas!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Lorem ipsum dolor sit, amet
        <div>
          <img
            src="./images/beautiful.jpg"
            alt="Sorry un able to load"
            srcset=""
          />
        </div>
        </>
        ) : (
          <>
            amet consectetur adipisicing elit. Quis facilis, eaque aspernatur rem
            ducimus minus illo cupiditate, veniam deleniti incidunt excepturi at
            temporibus unde asperiores praesentium! Atque eos voluptatibus voluptas{'\u00A0'}
            <button onClick={ toggleText} style={{borderRadius:'10px',backgroundColor:"cyan", border:'none'}}>See More</button>
          </>
        )}
      </div>
      <div id="content1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sequi, sunt
        qui laborum laudantium tempora! Dolore amet molestiae, debitis laborum
        fugiat, architecto minus quaerat animi officia, sunt nemo et nam!
      </div>

      <div id="content2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid magnam
        tenetur animi esse quo optio praesentium quos, qui, aut doloremque rem,
        incidunt unde delectus aspernatur labore maiores minus. Omnis,
        obcaecati!
      </div>

      <div id="content3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
        voluptate dolorum reprehenderit quas optio, odio explicabo aspernatur
        aperiam amet molestias eveniet suscipit tenetur est earum, nihil
        distinctio itaque ex debitis?
      </div>

      <footer>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, ipsa?
      </footer>
    </div>
  )
}

export default Resp
