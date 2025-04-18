import React from 'react'
import { motion } from 'framer-motion'

function DraggableCardCanvas() {
  return (
    <motion.div
    drag
    whileDrag={{ scale: 1.05 }}
    style={{
      width: 200,
      height: 100,
      background: '#fff',
      border: '1px solid #333',
      borderRadius: 8,
      padding: 20,
    }}
  >
    Drag me smoothly!
  </motion.div>
  )
}

export default DraggableCardCanvas