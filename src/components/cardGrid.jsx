import React from 'react'

const cardGrid = () => {

    const [movie, setMovieData] = useState([]);

    useEffect(() => {
        const fetchMovies = async() => {
            try {
                const res = await fetch("https://ghibliapi.vercel.app/films");
                const data = await res.json();
                setMovieData(data);
            }

            catch (error) {
                console.error("Error fetching movies:", error);
            };
        }
    })
  return (
    <div>cardGrid</div>
  )
}

export default cardGrid