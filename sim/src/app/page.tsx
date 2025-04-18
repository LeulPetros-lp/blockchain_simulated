// page.tsx
"use client"

import React, { useEffect, useState } from 'react'
import SingleCard from './components/SingleCard'
import { Block } from './interfaces/interfaces'
import axios from 'axios'
import Footer from './components/AddButton'
import Cards from './components/Cards'

function page() {
  const [blockchain, setBlockChain] = useState<Block[]>()

  const getChain = async () => {
    try {
      const response = await axios.get('http://localhost:8080/chain')
      setBlockChain(response.data)
    } catch (e: any) {
      console.log(e)
    }
  }

  useEffect(() => {
    getChain()
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow overflow-hidden">
        <Cards blockchain={blockchain} />
      </main>

      <Footer />
    </div>
  )
}

export default page
