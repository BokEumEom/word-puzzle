// 퍼즐 크기
export const puzzleSize5 = 5;

// 5x5 퍼즐 그리드 (모두 막힘 없음: isBlock=false)
// 각 칸에 acrossStart, downStart가 필요한 칸만 지정
export const puzzleGrid5 = [
  // Row 0
  [
    { isBlock: false, acrossStart: 1, downStart: 1, letter: '' }, // (0,0)
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }, // (0,1)
    { isBlock: false, acrossStart: 2, downStart: 2, letter: '' }, // (0,2)
    { isBlock: false, acrossStart: null, downStart: 3, letter: '' }, // (0,3)
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }, // (0,4)
  ],
  // Row 1
  [
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }, // (1,0)
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }, // (1,1)
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }, // (1,2)
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }, // (1,3)
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }, // (1,4)
  ],
  // Row 2
  [
    { isBlock: false, acrossStart: 4, downStart: null, letter: '' }, // (2,0)
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }, // (2,1)
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }, // (2,2)
    { isBlock: false, acrossStart: null, downStart: 5, letter: '' }, // (2,3)
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }, // (2,4)
  ],
  // Row 3
  [
    { isBlock: false, acrossStart: null, downStart: 4, letter: '' }, // (3,0)
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }, // (3,1)
    { isBlock: false, acrossStart: null, downStart: 5, letter: '' }, // (3,2)
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }, // (3,3)
    { isBlock: false, acrossStart: 6, downStart: null, letter: '' }, // (3,4)
  ],
  // Row 4
  [
    { isBlock: false, acrossStart: 7, downStart: null, letter: '' }, // (4,0)
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }, // (4,1)
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }, // (4,2)
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }, // (4,3)
    { isBlock: false, acrossStart: null, downStart: 6, letter: '' }, // (4,4)
  ],
];

// 가로 단서 예시
export const acrossClues5 = [
  {
    number: 1,
    clue: "가로 #1 힌트 (예: 한글)",
    answer: "한글",
    startRow: 0,
    startCol: 0,
    length: 2, 
  },
  {
    number: 2,
    clue: "가로 #2 힌트 (예: 테스트)",
    answer: "테스트",
    startRow: 0,
    startCol: 2,
    length: 3,
  },
  {
    number: 4,
    clue: "가로 #4 힌트 (예: 사과)",
    answer: "사과",
    startRow: 2,
    startCol: 0,
    length: 2,
  },
  {
    number: 6,
    clue: "가로 #6 힌트 (예: 커피)",
    answer: "커피",
    startRow: 3,
    startCol: 4,
    length: 2,
  },
  {
    number: 7,
    clue: "가로 #7 힌트 (예: 파이썬)",
    answer: "파이썬",
    startRow: 4,
    startCol: 0,
    length: 3,
  },
];

// 세로 단서 예시
export const downClues5 = [
  {
    number: 1,
    clue: "세로 #1 힌트 (예: 하나)",
    answer: "하나",
    startRow: 0,
    startCol: 0,
    length: 4,
  },
  {
    number: 2,
    clue: "세로 #2 힌트 (예: 둘)",
    answer: "둘",
    startRow: 0,
    startCol: 2,
    length: 2,
  },
  {
    number: 3,
    clue: "세로 #3 힌트 (예: 새벽)",
    answer: "새벽",
    startRow: 0,
    startCol: 3,
    length: 2,
  },
  {
    number: 4,
    clue: "세로 #4 힌트 (예: 코딩)",
    answer: "코딩",
    startRow: 2,
    startCol: 0,
    length: 2,
  },
  {
    number: 5,
    clue: "세로 #5 힌트 (예: 안녕)",
    answer: "안녕",
    startRow: 2,
    startCol: 3,
    length: 2,
  },
  {
    number: 6,
    clue: "세로 #6 힌트 (예: 하하)",
    answer: "하하",
    startRow: 3,
    startCol: 4,
    length: 2,
  },
];

