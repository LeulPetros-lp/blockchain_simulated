import React, { useState } from 'react'


function Draggable({ id, x, y, text, onDrag}: { id: number, x: number, y: number, text:string, onDrag: ( id: number, newX: number, newY: number )=> void}) {

    const [isDragging, setIsDragging] = useState(false)
    const [offset, setOffset] = useState({ x: 0, y: 0})


    const handleMouseDown = (e: MouseEvent) => {
        setIsDragging(true)
        setOffset({
            x: e.clientX - x,
            y: e.clientY - y
        })
    }

    const handleMouseMove = (e: MouseEvent) => {
        if(!isDragging) return;

        const newX = e.clientX - offset.x
        const newY = e.clientY - offset.y

        onDrag(id, newX, newY)
    }

    const handleMouseUp = () => {
        setIsDragging(false)
    }


  return (
    <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{
            position: 'absolute',
            top: y,
            left: x,
            width: 150,
            height: 100,
            backgroundColor: 'white',
            border: '1px solid black',
            borderRadius: 8,
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            cursor: isDragging ? 'grabbing' : 'grab',
            userSelect: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}

    >
        {text}
    </div>
  )
}

export default Draggable