'use strict';

import axios from 'axios';

/*
 * Method (GET).
 */

const BASE_URL = 'https://api.thecatapi.com/v1/images';
const KEY =
  'live_QWpcFK8RDQNixTwCH3rDYVV7QVkC4CMtlgILvCFvVqu3G5nagZEgozDLY8826ZG3';

// const getComments = () =>
//   fetch(`${BASE_URL}/comments`, { method: 'GET' }).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });

// (`${BASE_URL}?api_key=${KEY}`)
const getComments = () => axios.get(`${BASE_URL}?api_key=${KEY}`);

getComments()
  .then(response => console.log(response))
  .catch(console.warn);
