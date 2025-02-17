// puzzleData.js

export const puzzleSize7 = 7;

/**
 * 7×7 퍼즐 그리드
 * 각 셀 객체: { isBlock: boolean, acrossStart: number|null, downStart: number|null, letter: string }
 */
export const puzzleGrid7 = [
  // Row 0
  [
    { isBlock: false, acrossStart: 1, downStart: 1, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 2, letter: '' },
    { isBlock: true, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 2, downStart: 3, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 4, letter: '' }
  ],
  // Row 1
  [
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: true, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 3, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: true, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 4, downStart: null, letter: '' }
  ],
  // Row 2
  [
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 5, downStart: 5, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 6, letter: '' },
    { isBlock: true, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 6, downStart: 7, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }
  ],
  // Row 3
  [
    { isBlock: true, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 7, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 8, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: true, acrossStart: null, downStart: null, letter: '' }
  ],
  // Row 4
  [
    { isBlock: false, acrossStart: 8, downStart: 9, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: true, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 9, downStart: 10, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 11, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }
  ],
  // Row 5
  [
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: true, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 10, downStart: 12, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: true, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 11, downStart: null, letter: '' }
  ],
  // Row 6
  [
    { isBlock: false, acrossStart: 12, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: true, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 13, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }
  ]
];

// 가로 단서
export const acrossClues7 = [
  {
    number: 1,
    clue: "사람이 살기 위해 지은 건물",
    answer: "집",
    startRow: 0,
    startCol: 0,
    length: 3
  },
  {
    number: 2,
    clue: "글을 쓰거나 그림을 그리는 종이",
    answer: "공책",
    startRow: 0,
    startCol: 4,
    length: 3
  },
  {
    number: 3,
    clue: "운동을 하는 넓은 공간",
    answer: "운동장",
    startRow: 1,
    startCol: 2,
    length: 3
  },
  {
    number: 4,
    clue: "밤하늘에서 반짝이는 것",
    answer: "별",
    startRow: 1,
    startCol: 6,
    length: 1
  },
  {
    number: 5,
    clue: "아침에 일어나서 하는 첫 식사",
    answer: "아침",
    startRow: 2,
    startCol: 1,
    length: 2
  },
  {
    number: 6,
    clue: "음식을 만드는 곳",
    answer: "부엌",
    startRow: 2,
    startCol: 5,
    length: 2
  },
  {
    number: 7,
    clue: "학교에서 공부하는 공간",
    answer: "교실",
    startRow: 3,
    startCol: 1,
    length: 5
  },
  {
    number: 8,
    clue: "하늘에서 내리는 차가운 물방울",
    answer: "비",
    startRow: 4,
    startCol: 0,
    length: 2
  },
  {
    number: 9,
    clue: "달리기를 하는 곳",
    answer: "트랙",
    startRow: 4,
    startCol: 3,
    length: 4
  },
  {
    number: 10,
    clue: "책을 빌려주는 곳",
    answer: "도서실",
    startRow: 5,
    startCol: 2,
    length: 3
  },
  {
    number: 11,
    clue: "학교에서 쉬는 시간",
    answer: "휴식",
    startRow: 5,
    startCol: 6,
    length: 2
  },
  {
    number: 12,
    clue: "물건을 사고파는 곳",
    answer: "시장",
    startRow: 6,
    startCol: 0,
    length: 3
  },
  {
    number: 13,
    clue: "맛있는 음식을 파는 곳",
    answer: "식당",
    startRow: 6,
    startCol: 4,
    length: 3
  }
];

// 세로 단서
export const downClues7 = [
  {
    number: 1,
    clue: "집에서 잠을 자는 방",
    answer: "침실",
    startRow: 0,
    startCol: 0,
    length: 3
  },
  {
    number: 2,
    clue: "하늘을 나는 동물",
    answer: "새",
    startRow: 0,
    startCol: 2,
    length: 2
  },
  {
    number: 3,
    clue: "학교에서 공부하는 사람",
    answer: "학생",
    startRow: 0,
    startCol: 4,
    length: 3
  },
  {
    number: 4,
    clue: "몸을 씻는 곳",
    answer: "욕실",
    startRow: 0,
    startCol: 6,
    length: 3
  },
  {
    number: 5,
    clue: "물건을 넣어두는 가구",
    answer: "서랍",
    startRow: 2,
    startCol: 1,
    length: 3
  },
  {
    number: 6,
    clue: "옷을 보관하는 가구",
    answer: "장롱",
    startRow: 2,
    startCol: 3,
    length: 3
  },
  {
    number: 7,
    clue: "음식을 데우는 기계",
    answer: "전자레인지",
    startRow: 2,
    startCol: 5,
    length: 3
  },
  {
    number: 8,
    clue: "신발을 신고 운동하는 곳",
    answer: "체육관",
    startRow: 4,
    startCol: 4,
    length: 3
  },
  {
    number: 9,
    clue: "비가 올 때 쓰는 물건",
    answer: "우산",
    startRow: 4,
    startCol: 0,
    length: 3
  },
  {
    number: 10,
    clue: "책을 읽는 곳",
    answer: "독서실",
    startRow: 4,
    startCol: 3,
    length: 3
  },
  {
    number: 11,
    clue: "물건을 정리하는 곳",
    answer: "수납장",
    startRow: 4,
    startCol: 5,
    length: 3
  },
  {
    number: 12,
    clue: "학교에서 밥을 먹는 곳",
    answer: "급식실",
    startRow: 5,
    startCol: 2,
    length: 3
  }
];

export const puzzleData7 = {
  puzzleSize: puzzleSize7,
  puzzleGrid: puzzleGrid7,
  acrossClues: acrossClues7,
  downClues: downClues7
};