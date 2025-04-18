'use client'

import { Block } from '../interfaces/interfaces'
import { motion } from 'framer-motion'
import SingleCard from './SingleCard'
import { useState, useRef } from 'react'

export default function Cards({ blockchain }: { blockchain: Block[] | undefined }) {
  const minZoom = 1
  const maxZoom = 3
  const [zoom, setZoom] = useState(minZoom)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    if (e.deltaY < 0) {
      setZoom((prev) => Math.min(prev + 0.1, maxZoom))
    } else {
      setZoom((prev) => Math.max(prev - 0.1, minZoom))
    }
  }

  return (
    <div
      ref={containerRef}
      className="w-screen h-[calc(100vh-100px)] overflow-hidden relative"  // full viewport minus 100px footer
      onWheel={handleWheel}
      style={{ touchAction: 'none' }} // disable native panning
    >
      {/* This motion.div fills its parent, so you can grab *anywhere* */}
      <motion.div
        drag
        dragConstraints={containerRef}
        dragElastic={0.2}
        style={{
          scale: zoom,
          x: 0,
          y: 0,
        }}
        className="absolute inset-0 cursor-grab"
      >
        <div className="flex gap-4 p-4 pr-8 w-max">
          {blockchain?.map((block) => (
            <motion.div
              key={block.index}
              drag
              whileDrag={{ scale: 1.05 }}
              dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
            >
              <SingleCard block={block} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
