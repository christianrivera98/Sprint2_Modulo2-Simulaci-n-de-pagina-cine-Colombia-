import axios from 'axios';



  // funcion para realizar la peticion get a la api
  export const fetchMovies = async () => {

    try{
      // const API_KEY = "23a6afa0e771969ea423036782880665";
      const API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=23a6afa0e771969ea423036782880665&language=es-MX`;
      const {data} = await axios.get(API_URL);

        console.log(data)
        return data
        

      
    } catch (error) {
      console.log(error);
      return null;

    }
  
  } 

    //console.log('data',results);
    //setSelectedMovie(results[0])
