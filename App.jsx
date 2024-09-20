import Chat from "src\components\chat\Chat";
import Detail from "src\components\detail\Detail";
import List from "src\components\list\List";
const App = () => {
  return (
    <div className='container'>
      <List/>
      <Chat/>
      <Detail/>
    </div>
  )
}

export default App