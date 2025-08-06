import React from 'react'

const Exam1 = ({ name, age }) => {
  return (
    <div>
      나의 이름은 <span style={{ color: 'red' }}>{name}</span>이고 나이는 <span style={{ color: 'blue' }}>{age}</span>살이야.
    </div>
  )
}

export default Exam1
