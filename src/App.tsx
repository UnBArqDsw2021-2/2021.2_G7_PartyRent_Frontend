import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <h1>PartyRent</h1>
      </header>
      
      <Button 
      title='Descubra os nossos produtos'
      color='#5b3ea1'
      />
    </div>
  )
}

export default App
