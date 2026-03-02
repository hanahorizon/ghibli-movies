// src/app/movies/[id]/page.jsx
import Link from "next/link";

const MovieDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`https://ghibliapi.vercel.app/films/${id}`);
  const movie = await res.json();

  return (
    <main className="min-h-screen bg-zinc-900 text-white">

      {/* Back Button */}
      <div className="px-8 py-6">
        <Link
          href="/"
          className="text-zinc-400 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2 w-fit"
        >
          ← Back to Movies
        </Link>
      </div>

      {/* Hero Banner */}
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={movie.movie_banner}
          alt=""
          className="w-full h-full object-cover"
        />
        {/* dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 -mt-20 pb-24">
        <div className="flex flex-col md:flex-row gap-10 items-start">

          {/* Poster */}
          <div className="shrink-0">
            <img
              src={movie.image}
              alt={movie.title}
              className="w-44 rounded-lg shadow-2xl border border-zinc-700"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-5 pt-24 md:pt-0 mt-4">

            {/* Title */}
            <div>
              <h1 className="text-4xl font-bold text-white leading-tight">
                {movie.title}
              </h1>
              <p className="text-zinc-500 text-sm italic mt-1">
                {movie.original_title} · {movie.original_title_romanised}
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-zinc-800 text-zinc-300 text-xs px-3 py-1 rounded-full border border-zinc-700">
                🎬 {movie.director}
              </span>
              <span className="bg-zinc-800 text-zinc-300 text-xs px-3 py-1 rounded-full border border-zinc-700">
                🎥 {movie.producer}
              </span>
              <span className="bg-zinc-800 text-zinc-300 text-xs px-3 py-1 rounded-full border border-zinc-700">
                📅 {movie.release_date}
              </span>
              <span className="bg-zinc-800 text-zinc-300 text-xs px-3 py-1 rounded-full border border-zinc-700">
                ⭐ {movie.rt_score}%
              </span>
            </div>

            <hr className="border-zinc-700" />

            {/* Description */}
            <p className="text-zinc-400 leading-relaxed text-sm">
              {movie.description}
            </p>

          </div>
        </div>
      </div>
    </main>
  );
};

export default MovieDetails;