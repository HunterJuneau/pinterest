const boardMaker = (boardObject) => {
  const domString = `<div class="card" style="width: 18rem;" id=${boardObject.uid}>
                      <div class="card-body">
                        <h5 class="card-title">${boardObject.name}</h5>
                        <a href="#" class="btn btn-primary see-cows" id=${boardObject.uid}>View Board</a>
                        <a href="#" id="${boardObject.uid}" class="btn btn-danger delete-board">Delete Board</a>
                      </div>
                    </div>`;

  return domString;
};

export default { boardMaker };
