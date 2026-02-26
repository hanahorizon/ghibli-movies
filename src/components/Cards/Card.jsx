const Card = ({ movie }) => {
  const { title, image, description, release_date } = movie;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>

        <p className="text-sm text-gray-600 line-clamp-3 mb-3">
          {description}
        </p>

        <span className="text-xs font-medium text-emerald-600">
          {release_date}
        </span>
      </div>
    </div>
  );
};

export default Card;