import React from 'react'
import '../index.css'

const InputField = ({size}) => {
  let x = '';
  if(size === 'small'){
    x = 'px-3 py-0'
  }
  else if(size === 'medium'){
    x = 'px-5 py-2'
  }
  else{
    x = 'px-7 py-3'
  }
  return (
    <div>
      <input type="text" className={`${x} border-2`} placeholder='Enter some input...'/>
    </div>
  )
}

export default InputField