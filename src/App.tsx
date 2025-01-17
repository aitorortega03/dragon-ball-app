import './App.css'
import CharacterList from './components/CharacterList'

const App = () => {

  return (
    <div className="min-h-screen bg-slate-900">
      <h1 className="text-4xl text-center py-8 text-light">Dragon Ball App</h1>
      <CharacterList />
    </div>
  )
}

export default App
