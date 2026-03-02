import Link from "next/link";

const Card = ({ movie }) => {
  return (
    <Link href={`/movies/${movie.id}`}>
      <div className="h-full cursor-pointer bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
        <img src={movie.image} alt={movie.title} className="w-full h-56 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold">{movie.title}</h3>
          <p className="text-gray-400 text-sm mt-1">{movie.release_date}</p>
          <p className="text-gray-300 text-sm mt-2 line-clamp-3">{movie.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;


