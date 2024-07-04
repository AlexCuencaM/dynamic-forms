import BasicTabs from "./components/Tabs/Tabs"
import { OptionRepository } from "./data/Repository/OptionsRepository"

function App() {
  return (
    <> 
      <h1>Vite + React</h1>
      <BasicTabs repository={OptionRepository}/>
    </>
  )
}

export default App
