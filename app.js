//var turn = 'x';
//var xChoices = [];
//var oChoices = [];
//var moveCount = 0;

function moveCheck(num,arr,turn) {
  if (num === 9 && winCheck(arr)===true) {
    alert(turn + ' is the winner!');
    document.location.reload()
  } else if (num === 9){
    alert('no winner try again');
    document.location.reload()
  }
}
var playerMoves = {
  'x':[],
  'y':[]
}

function play(target,turn){
  //var turn = 'x';
  var xChoices = [];
  var oChoices = [];
  var moveCount = 0;
  var turnObj = {
    'x':"fa fa-times fa-5x",
    'y':"fa fa-circle-o fa-5x"
  }






}

document.querySelector('body').addEventListener('click', function (event) {

  var target = event.target;

  if (target.dataset.avail === 'yes') {
    if (turn === 'x') {
      target.dataset.avail = 'no';
      target.childNodes[0].className = "fa fa-times fa-5x";
      target.childNodes[0].style.display = 'inline-block';
      xChoices.push(target.dataset.loc);
      moveCount++;
      //if (winCheck(xChoices) === true) {
      //  alert(turn + ' is the winner!');
      //  document.location.reload()
      //}
      moveCheck(moveCount,xChoices,turn);
      turn = 'o'
    } else {
      target.childNodes[0].className = "fa fa-circle-o fa-5x";
      target.childNodes[0].style.display = 'inline-block';
      oChoices.push(target.dataset.loc);
      moveCount++;
      //if (winCheck(oChoices) === true) {
      //  alert(turn + ' is the winner!');
      //  document.location.reload()
      //}
      moveCheck(moveCount,xChoices,turn);
      turn = 'x'
    }


  }
});


var arr =
  ['x', 'x', 'x', 'o', 'o', 'x', 'o', 'o', 'x'];

var wins = {};

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


