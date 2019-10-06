import axios from "axios";

const PRO_API_KEY = 'fd9ec7f7-98b0-4768-98fe-6d0d536f4522';
const corsFixUrl = "https://cors-anywhere.herokuapp.com/";  // Cors Issue Fix solution 
const apiURL = corsFixUrl + 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
const headers = {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "cache-control": "no-cache",
  "Access-Control-Allow-Origin": "*",
  "X-CMC_PRO_API_KEY": PRO_API_KEY,
};

export const getListingLatestApi = ({start, limit, convert}) =>
  axios
    .get(
      `${apiURL}?start=${start}&limit=${limit}&convert=${convert}`,
      {
        headers
      }
    )
    .then(res => res.data)
    .catch(error => {
      throw error;
    });



