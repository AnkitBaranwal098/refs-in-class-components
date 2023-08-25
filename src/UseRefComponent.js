import React, {useRef, useState} from 'react'


function UseRefComponent()
{
    const [counter, setCounter] = useState(0);
    const refDemo = useRef(0)
  return (
    <div>
       <h2>
        Counter using state : {counter}
       </h2>
       <h2>
        Counter using ref : {refDemo.current}
       </h2>

       <button onClick={()=>{setCounter(counter+1)}}>State Counter Update</button>
       <button onClick={()=>{refDemo.current+=1}}>Ref Counter Update</button>
    </div>
  )
}

export default UseRefComponent