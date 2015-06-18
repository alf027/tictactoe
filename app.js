(function init () {

  function moveCheck(num, arr, turn) {
    if (winCheck(arr) === true) {
      localStorage[turn]++;
      alert(turn + ' is the winner!');
      document.location.reload()
    } else if (num === 9) {
      alert('no winner try again');
      document.location.reload()
    }
  }
  function play(target, turn) {
    var turnObj = {
      'x': "fa fa-times fa-5x",
      'o': "fa fa-circle-o fa-5x"
    };

    target.dataset.avail = 'no';
    target.childNodes[0].className = turnObj[turn]
    target.childNodes[0].style.display = 'inline-block';
    playerMoves[turn].push(target.dataset.loc);
    moveCount++;
    moveCheck(moveCount, playerMoves[turn], turn);

  }
  function popScore() {
    if (!localStorage.x && !localStorage.o) {
      localStorage.x = 0;
      localStorage.o = 0;
    }
    document.getElementById('score').innerHTML = "X's Score: " + localStorage.x + ' | ' + "O's Score: " + localStorage.o
  }
  function winCheck(arr) {
    var combos = {
      1: ['1,1', '1,2', '1,3'],
      2: ['2,1', '2,2', '2,3'],
      3: ['3,1', '3,2', '3,3'],
      4: ['1,1', '2,1', '3,1'],
      5: ['1,2', '2,2', '3,2'],
      6: ['1,3', '2,3', '3,3'],
      7: ['1,1', '2,2', '3,3'],
      8: ['1,3', '2,2', '3,1']

    };
    var result = false;
    for (var prop in combos) {

      var winCount = 0;
      arr.forEach(function (e) {
        combos[prop].forEach(function (winE) {
          if (e === winE) {
            winCount++;
          }
        });
        if (winCount === 3) {
          result = true
        }
      })
    }
    return result;
  }

  var moveCount = 0;
  var playerMoves = {
    'x': [],
    'o': []
  };
  var turn = 'x';

  popScore();

  document.querySelector('body').addEventListener('click', function (event) {

    var target = event.target;

    if (target.dataset.avail === 'yes') {

      play(target, turn);
      turn = turn === 'x' ? 'o' : 'x';

    } else if(target.id === 'reset') {
      localStorage.setItem('x',0);
      localStorage.setItem('o',0);
      popScore();
    }
  });
})();





