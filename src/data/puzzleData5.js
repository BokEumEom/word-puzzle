// 퍼즐 크기
export const puzzleSize5 = 5;

// 5x5 퍼즐 그리드 (isBlock=false: 모든 칸 사용 가능)
export const puzzleGrid5 = [
  // Row 0
  [
    { isBlock: false, acrossStart: 1, downStart: 1, letter: '' }, // (0,0)
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }, // (0,1)
    { isBlock: false, acrossStart: 2, downStart: 2, letter: '' }, // (0,2)
    { isBlock: false, acrossStart: null, downStart: 3, letter: '' }, // (0,3)
    { isBlock: false, acrossStart: null, downStart: 4, letter: '' }, // (0,4)
  ],
  // Row 1
  [
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }, // (1,0)
    { isBlock: false, acrossStart: null, downStart: 5, letter: '' }, // (1,1)
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }, // (1,2)
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }, // (1,3)
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }, // (1,4)
  ],
  // Row 2
  [
    { isBlock: false, acrossStart: 3, downStart: null, letter: '' }, // (2,0)
    { isBlock: false, acrossStart: null, downStart: 6, letter: '' }, // (2,1)
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }, // (2,2)
    { isBlock: false, acrossStart: null, downStart: 7, letter: '' }, // (2,3)
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }, // (2,4)
  ],
  // Row 3
  [
    { isBlock: false, acrossStart: null, downStart: 3, letter: '' }, // (3,0)
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }, // (3,1)
    { isBlock: false, acrossStart: null, downStart: 8, letter: '' }, // (3,2)
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }, // (3,3)
    { isBlock: false, acrossStart: 5, downStart: null, letter: '' }, // (3,4)
  ],
  // Row 4
  [
    { isBlock: false, acrossStart: 6, downStart: null, letter: '' }, // (4,0)
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }, // (4,1)
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }, // (4,2)
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }, // (4,3)
    { isBlock: false, acrossStart: null, downStart: 5, letter: '' }, // (4,4)
  ],
];

// **가로 단서**
export const acrossClues5 = [
  {
    number: 1,
    clue: "우리나라의 이름 (가로)",
    answer: "대한",
    startRow: 0,
    startCol: 0,
    length: 2,
  },
  {
    number: 2,
    clue: "배가 고플 때 먹는 것 (가로)",
    answer: "음식",
    startRow: 0,
    startCol: 2,
    length: 3,
  },
  {
    number: 3,
    clue: "사람이 걷는 곳 (가로)",
    answer: "도로",
    startRow: 2,
    startCol: 0,
    length: 2,
  },
  {
    number: 5,
    clue: "책을 빌릴 수 있는 곳 (가로)",
    answer: "도서관",
    startRow: 3,
    startCol: 4,
    length: 3,
  },
  {
    number: 6,
    clue: "입는 옷 (가로)",
    answer: "한복",
    startRow: 4,
    startCol: 0,
    length: 2,
  },
];

// **세로 단서**
export const downClues5 = [
  {
    number: 1,
    clue: "우리나라의 수도 (세로)",
    answer: "서울",
    startRow: 0,
    startCol: 0,
    length: 4,
  },
  {
    number: 2,
    clue: "하늘에서 내리는 것 (세로)",
    answer: "비",
    startRow: 0,
    startCol: 2,
    length: 2,
  },
  {
    number: 3,
    clue: "밤하늘에 반짝이는 것 (세로)",
    answer: "별",
    startRow: 0,
    startCol: 3,
    length: 2,
  },
  {
    number: 4,
    clue: "사람들이 공부하는 곳 (세로)",
    answer: "학교",
    startRow: 0,
    startCol: 4,
    length: 4,
  },
  {
    number: 5,
    clue: "책이 많은 장소 (세로)",
    answer: "도서관",
    startRow: 2,
    startCol: 4,
    length: 3,
  },
  {
    number: 6,
    clue: "한국의 전통 옷 (세로)",
    answer: "한복",
    startRow: 2,
    startCol: 1,
    length: 2,
  },
  {
    number: 7,
    clue: "높은 건물 (세로)",
    answer: "빌딩",
    startRow: 2,
    startCol: 3,
    length: 2,
  },
  {
    number: 8,
    clue: "과일 중에서 가장 인기 있는 것 (세로)",
    answer: "사과",
    startRow: 3,
    startCol: 2,
    length: 2,
  },
];
