import { useEffect, useState } from 'react'
import ToggleTheme from './components/ToggleTheme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
         <ToggleTheme />
    </div>
  )
}

export default App
