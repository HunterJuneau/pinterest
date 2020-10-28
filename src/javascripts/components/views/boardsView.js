import data from '../../helpers/data/boardData';
import card from '../cards/boardCard';

const boardsView = (currentUser) => {
  $('#app').append(`<div class="mb-4" id="user-container">
                      <img src="${currentUser.img}" alt="${currentUser.name}">
                      <h1>${currentUser.name}</h1>
                    </div>`);

  data.getAllBoards().then((response) => {
    if (response.length) {
      response.forEach((item) => {
        if (item.uid === currentUser.uid) {
          $('#app').append(card.boardMaker(item));
        }
      });
    } else {
      $('#app').append('<h2>NO BOARDS!</h2>');
    }
  });
};

export default { boardsView };
