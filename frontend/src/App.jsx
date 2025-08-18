
import './App.css'

import Header from './components/Header'
import TodoEditor from './components/TodoEditor'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <TodoEditor />
        <TodoList />
      </div>
    </>
  )
}

export default App
