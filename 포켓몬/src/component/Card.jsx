import { useNavigate } from "react-router-dom";

export const Card = ({ pokemon }) => {
  const navigate = useNavigate();
  return (
    <section
      onClick={() => navigate(`/detail/${pokemon.id}`)}
      className="
    flex justify-center items-center flex-col
     w-[150px] pb-2.5
     border border-gray-500 rounded-[10px]
     gap-2.5"
    >
      <img src={pokemon.front} className="w-[120px]" />
      <div>{pokemon.name}</div>
    </section>
  );
};
