const Card = ({ movie }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>

        <p className="text-sm text-gray-600 line-clamp-3 mb-3">
          {movie.description}
        </p>
      </div>
    </div>
  );
};

export default Card;