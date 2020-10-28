import boardsView from '../components/views/boardsView';

const viewHelper = (id, arg) => {
  $('#app').html('');

  switch (id) {
    case 'boards-link':
      return boardsView.boardsView(arg);
    default:
      return console.warn('Nothing clicked');
  }
};

const viewListener = (view, arg) => {
  viewHelper(view, arg);
};

export default { viewListener };
