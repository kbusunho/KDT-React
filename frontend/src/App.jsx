import './App.css'
import Header from '../component/Header'
import TodoEditor from '../component/TodoEditor'
import TodoList from '../component/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='App'>
        <Header />
        <TodoEditor />
        <TodoList />
      </div>
  )
}

export default App
