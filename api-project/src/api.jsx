import axios from 'axios';
const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID 5FGNDnqSmjw6EM584MmS-0U39pfsxxyLNNWxNeQhXrc',
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
