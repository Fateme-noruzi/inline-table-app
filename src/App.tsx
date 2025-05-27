import { PortTable } from 'features/port-list'
import './App.css'
import { ActivityPort } from 'features/port-activity/port-activity'

function App() {

  return (
    <><PortTable />
      <ActivityPort />
    </>
  )
}

export default App
