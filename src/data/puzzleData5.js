// puzzleData.js

export const puzzleSize5 = 5;

/**
 * 5×5 퍼즐 그리드
 * 각 셀 객체: { isBlock: boolean, acrossStart: number|null, downStart: number|null, letter: string }
 */
export const puzzleGrid5 = [
  // Row 0
  [
    { isBlock: false, acrossStart: 1, downStart: 1, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: true, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 2, downStart: 2, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }
  ],
  // Row 1
  [
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 3, downStart: 3, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: true, acrossStart: null, downStart: null, letter: '' }
  ],
  // Row 2
  [
    { isBlock: true, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 4, downStart: 4, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }
  ],
  // Row 3
  [
    { isBlock: false, acrossStart: 5, downStart: 5, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: true, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 6, downStart: 6, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }
  ],
  // Row 4
  [
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: true, acrossStart: null, downStart: null, letter: '' }
  ]
];

// 가로 단서
export const acrossClues5 = [
  {
    number: 1,
    clue: "돌다리를 ○○ 보고 건너라",
    answer: "두드려",
    startRow: 0,
    startCol: 0,
    length: 3
  },
  {
    number: 2,
    clue: "짝을 이루어 함께 함",
    answer: "쌍쌍",
    startRow: 0,
    startCol: 3,
    length: 2
  },
  {
    number: 3,
    clue: "건강에 좋은 채소나 과일로 만든 음료",
    answer: "주스",
    startRow: 1,
    startCol: 2,
    length: 2
  },
  {
    number: 4,
    clue: "시험이나 경기에서 이김",
    answer: "승리",
    startRow: 2,
    startCol: 1,
    length: 2
  },
  {
    number: 5,
    clue: "서로 마주보며 이야기를 나눔",
    answer: "대화",
    startRow: 3,
    startCol: 0,
    length: 2
  },
  {
    number: 6,
    clue: "숫자를 더하거나 빼는 것",
    answer: "계산",
    startRow: 3,
    startCol: 3,
    length: 2
  }
];

// 세로 단서
export const downClues5 = [
  {
    number: 1,
    clue: "모든 일에는 ○○가 있다",
    answer: "두서",
    startRow: 0,
    startCol: 0,
    length: 2
  },
  {
    number: 2,
    clue: "글자를 쓰거나 그림을 그리는 도구",
    answer: "연필",
    startRow: 0,
    startCol: 3,
    length: 3
  },
  {
    number: 3,
    clue: "자신의 생각이나 느낌을 글로 표현",
    answer: "수필",
    startRow: 1,
    startCol: 2,
    length: 3
  },
  {
    number: 4,
    clue: "음식을 만드는 곳",
    answer: "주방",
    startRow: 2,
    startCol: 1,
    length: 3
  },
  {
    number: 5,
    clue: "물건값을 지불하고 사는 것",
    answer: "대금",
    startRow: 3,
    startCol: 0,
    length: 2
  },
  {
    number: 6,
    clue: "학교나 회사에서 하는 공부",
    answer: "공부",
    startRow: 3,
    startCol: 3,
    length: 2
  }
];

export const puzzleData5 = {
  puzzleSize: puzzleSize5,
  puzzleGrid: puzzleGrid5,
  acrossClues: acrossClues5,
  downClues: downClues5
};