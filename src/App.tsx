import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Button, ButtonGroup } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Button colorScheme='blue'>Button</Button>
    </div>
  )
}

export default App
