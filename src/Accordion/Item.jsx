import React, { useState } from 'react'

const Item = ({item}) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    } 

  return (
    <div onClick={() => {handleClick()}} style={{width: "100%", border: '1px solid black', cursor: 'pointer'}}>
        <h3>{item.title}</h3>
        {isOpen && <p>{item.body}</p>}
    </div>
  )
}

export default Item

