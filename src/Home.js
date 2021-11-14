import React from 'react'
import HomeCardManager from './components/Cards/HomeCardManager'
import Header from './components/Header'

function Home() {
    return (
        <div className="container">
          <Header />
          <HomeCardManager />
        </div>
    )
}

export default Home
