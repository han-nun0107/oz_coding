import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPokemonById } from "../RTK/selector";

export default function Detail() {
  const { pokemonId } = useParams();
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="
    flex flex-col
    justify-center items-center
    border bodrer-[gray] rounded-[10px]
    p-[30px]"
    >
      <div className="text-[24px] mb-[10px]">{pokemon.name}</div>
      <div className="whitespace-pre-wrap text-center">
        {pokemon.description}
      </div>
      <img className="w-[200px]" src={pokemon.front} />
    </div>
  );
}
