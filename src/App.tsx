import { useGenericData } from "./hooks/useGenericData";
import { PokemonData } from "./types/PokemonData";

const URL = "https://pokeapi.co/api/v2/pokemon/ditto";

function App() {
  const { data, error, isLoading } = useGenericData<PokemonData>(URL);

  return (
    <div>
      {isLoading ? <h2>Loading...</h2> : data && <PokemonCard data={data} />}
    </div>
  );
}

interface PokemonCardProps {
  data: PokemonData;
}

function PokemonCard({ data }: PokemonCardProps) {
  const { name, sprites } = data;

  return (
    <div className="App">
      <header>
        <h1>Pokemon Pedestal</h1>
      </header>

      <main>
        <h1>{name}</h1>
        <img src={sprites.front_default} alt={`frontview of ${name}`} />
      </main>

      <footer>
        <h2>Made by LarsG</h2>
      </footer>
    </div>
  );
}

export default App;
