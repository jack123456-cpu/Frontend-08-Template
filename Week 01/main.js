// 规则
const pattern = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

/**
 *
 *  创建棋盘
 * @param {*} pattern
 */
function init(pattern) {
  const board = document.querySelector('#board');
  board.innerHTML = '';
  for (let i = 0; i < pattern['length']; ++i) {
    for (let j = 0; j < pattern[i]['length']; ++j) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.textContent =
        pattern[i][j] === 1 ? '⭕️' : pattern[i][j] === 2 ? '❌' : '';
      cell.addEventListener('click', () => move(j, i));
      board.appendChild(cell);
    }
    const br = document.createElement('br');
    board.appendChild(br);
  }
}

function move(x, y) {
  pattern[y][x] = color;
  if (check(pattern, color)) {
    alert(color === 2 ? '❌ is win' : '⭕️ is win');
  }
  color = 3 - color;
  init(pattern);
  if (willWin(pattern, color)) {
    console.log(color === 2 ? '❌ will win' : '⭕️ will win');
  }
}

function check(pattern, color) {
  for (let i = 0; i < 3; ++i) {
    let win = true;
    for (let j = 0; j < 3; ++j) {
      if (pattern[j][i] !== color) {
        win = false;
        break;
      }
    }
    if (win) {
      return win;
    }
  }
  for (let i = 0; i < 3; ++i) {
    let win = true;
    for (let j = 0; j < 3; ++j) {
      if (pattern[i][j] !== color) {
        win = false;
        break;
      }
    }
    if (win) {
      return win;
    }
  }
  // 斜线的情况 0,0 1,1 2,2
  {
    let win = true;
    for (let i = 0; i < 3; ++i) {
      if (pattern[i][i] !== color) {
        win = false;
      }
    }
    if (win) {
      return win;
    }
  }
  // 0,2  1,1 2,0
  {
    let win = true;
    for (let i = 0; i < 3; ++i) {
      if (pattern[i][2 - i] !== color) {
        win = false;
      }
    }
    if (win) {
      return win;
    }
  }
}

function clone(pattern) {
  return JSON.parse(JSON.stringify(pattern));
}

function willWin(pattern, color) {
  for (let i = 0; i < pattern['length']; ++i) {
    for (let j = 0; j < pattern[i]['length']; ++j) {
      if (pattern[i][j]) continue;

      const temp = clone(pattern);
      temp[i][j] = color;
      if (check(temp, color)) {
        return true;
      }
    }
  }
  return false;
}

let color = 1;

init(pattern);
