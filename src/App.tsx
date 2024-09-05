import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import useCharacters from "./hooks/useCharacters";
import { CharacterCards } from "./components/CharacterCard/CharacterCards";

const App: React.FC = () => {

  const { characters, loading, error } = useCharacters()

  if (error) {
    <div>Error : {error}</div>
  }

  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <div className="container">
        <div className="row">
          Filter component will be placed here
          <div className="col-lg-8 col-12">
            <div className="row">
              {loading ? "Loading" : <CharacterCards characters={characters}/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
