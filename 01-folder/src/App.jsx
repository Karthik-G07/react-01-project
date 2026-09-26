import React from 'react'
import Card from './Companants/Card'

const App = () => {
  return (
    <div className='parent'>
   
    
    <Card user="karthi"  image="https://images.unsplash.com/photo-1773332585749-5146862ba746?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" />
    <Card user="vishnu" image="https://images.unsplash.com/photo-1779896411979-35844de55d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"  />
   <Card user="manoj" image="https://images.unsplash.com/photo-1782145695535-a1510cfc555d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D" />
    
    </div>
    
  )
}

export default App
