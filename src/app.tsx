import {BrowserRouter} from 'react-router-dom'
import Navbar from './navigation/navbar.tsx'
import Routing from './navigation/routing.tsx'
import Footer from './navigation/footer.tsx'
import {ChakraProvider} from '@chakra-ui/react'

function App() {

  return (
      <ChakraProvider>
          <BrowserRouter>
              <Navbar/>
              <Routing/>
              <Footer/>
          </BrowserRouter>
      </ChakraProvider>
  )
}

export default App
