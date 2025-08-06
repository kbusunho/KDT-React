import React, { useState } from 'react'

const Exam3 = () => {
  const [input, setInput] = useState('')

  const onChangeInput = (e) => {
    setInput(e.target.value)
  }

  const onClickClear = () => {
    setInput('')
  }

  return (
    <div>
      <h2>input 실습</h2>
      <input value={input} onChange={onChangeInput} type="text" />
      <button onClick={onClickClear}>click하면 글씨 사라짐.</button>
    </div>
  )
}

export default Exam3
