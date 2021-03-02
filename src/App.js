import './App.css'
import Intro from './components/introBlock/Intro'
import Advantages from './components/advantagesBlock/Advantages'
import Games from './components/gamesBlock/Games'

function App() {
  return (
    <div className='App'>
      <Intro></Intro>
      <Advantages></Advantages>
      <Games></Games>
    </div>
  )
}

export default App
