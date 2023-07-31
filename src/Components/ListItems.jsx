import React from 'react'

export default function ListItems(props) {
  return (
    <>
        <div className='list-items-container'>
        <button className='remove-item' onClick={()=>{
          props.onSelect(props.id);
        }}>{props.btnText}</button>
        <li className="list-item">{props.input}</li>
        </div>
    </>
  )
}
