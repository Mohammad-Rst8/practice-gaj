"use client"
import React from 'react'
interface IButtonProps{
    content:string | React.ReactNode,
    onClick? :React.MouseEventHandler<HTMLButtonElement>,
    className?:string 
}
function Button({content , onClick, className}:IButtonProps) {

  return (
    <button onClick={onClick} style={{boxShadow: "0 0 10px rgba(0,0,0,0.2)"}} className={`rounded-3xl font-bold transition-all cursor-pointer ${className}`}>{content}</button>
  )
}

export default Button