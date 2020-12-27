// 规则
const pattern = [[2, 0, 1], [0, 1, 1], [0, 0, 0]];

/**
 *
 *  创建棋盘
 * @param {*} pattern
 */
function init(pattern) {
  const board = document.querySelector('#board');
  for (let i = 0; i < pattern['length']; ++i) {
    for (let j = 0; j < pattern[i]['length']; ++j) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.textContent =
        pattern[i][j] === 2 ? '⭕️' : pattern[i][j] === 1 ? '❌' : '';
      board.appendChild(cell);
    }
    const br = document.createElement('br');
    board.appendChild(br);
  }
}

init(pattern);
