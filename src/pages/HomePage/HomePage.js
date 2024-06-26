import Card from "../../components/Card/Card";
import { Container } from "./HomePage.styled";
import Header from "../../components/Header/Header";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useContext } from "react";

function HomePage() {
  const { pokelist, pokedex, addToPokedex } = useContext(GlobalStateContext);

  // não mostrar pokemons que estão na pokedex
  const filteredPokelist = () =>
    pokelist.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );

  return (
    <Container>
      <Header />
      <section>
        {filteredPokelist().map((pokemon) => (
          <Card
            key={pokemon.url}
            pokemonUrl={pokemon.url}
            addToPokedex={addToPokedex}
          />
        ))}
      </section>
    </Container>
  );
}

export default HomePage;
