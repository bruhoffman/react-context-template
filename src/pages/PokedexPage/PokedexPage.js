import Card from "../../components/Card/Card";
import { Container } from "./PokedexPage.styled";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/url";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useContext } from "react";

function PokedexPage() {
  const { pokedex, removeFromPokedex } = useContext(GlobalStateContext);

  return (
    <Container>
      <Header />
      <section>
        {pokedex.map((pokemon) => (
          <Card
            key={pokemon.name}
            pokemonUrl={`${BASE_URL}/${pokemon.name}`}
            removeFromPokedex={removeFromPokedex}
          />
        ))}
      </section>
    </Container>
  );
}

export default PokedexPage;
