import React from 'react'
import Button from 'react-bootstrap/Button';
const UseStateDemo = () => {
    const count=0

  return (
    <>
      <Button>+</Button>
      <span>{count}</span>
      <Button>-</Button>
    </>
  )
}

export default UseStateDemo
