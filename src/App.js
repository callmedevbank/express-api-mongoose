import {Header} from "./Components/Header/Header"
import {Overview} from "./Components/overview/Overview"
import {Storefront} from "./Components/storefront/Storefront"
import styled from "styled-components"

function App() {
  return(
    
<Box>
<Header/>
<Overview/>
<Storefront/>
</Box>


  )
}


export default App;

const Box = styled.div`
`
