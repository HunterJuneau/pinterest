import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllBoards = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/boards.json`)
    .then((response) => {
      const allBoards = response.data;
      const boards = [];
      if (allBoards) {
        Object.keys(allBoards).forEach((boardId) => {
          boards.push(allBoards[boardId]);
        });
      }
      resolve(boards);
    })
    .catch((error) => reject(error));
});

export default { getAllBoards };
