import axios from 'axios';


const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {

  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'f204ccbe04msh2a22a2f8d8c7d85p13411cjsnf6a56fcaa5a0',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
}


