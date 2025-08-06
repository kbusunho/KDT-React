// App.jsx
import './App.css'
import Counter from './components/Counter'
import Exam1 from './components/Exam1'
import Exam2 from './components/Exam2'
import Exam3 from './components/Exam3'

function App() {
  const User = {
    name: "Elice",
    age: 20
  }

  return (
    <div>
      <Exam1 {...User} />
      <Exam2 />
      <Exam3 />
      <Counter />
    </div>
  )
}

export default App
