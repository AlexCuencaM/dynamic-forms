import BasicTabs from "./components/Tabs/Tabs"
import { FormInputRepository } from "./data/Repository/FormInputRepository"
import { FormRepository } from "./data/Repository/FormRepository"
import { FormTypeDataRepository } from "./data/Repository/FormTypeDataRepository"
import { OptionRepository } from "./data/Repository/OptionsRepository"

function App() {
  return (
    <>
      <h1>Dynamic forms</h1>
      <BasicTabs 
        optionRepository={OptionRepository} 
        formRepository={FormRepository} 
        formTypeDataRepository={FormTypeDataRepository}
        formInputRepository={FormInputRepository}
      />
    </>
  )
}

export default App
