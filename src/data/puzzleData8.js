// puzzleData.js

export const puzzleSize8 = 8;

/**
 * 8×8 퍼즐 그리드
 * 각 셀 객체: { isBlock: boolean, acrossStart: number|null, downStart: number|null, letter: string }
 */
export const puzzleGrid8 = [
  // Row 0
  [
    { isBlock: false, acrossStart: 1, downStart: 1, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: true, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 2, downStart: 2, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 3, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 4, letter: '' }
  ],
  // Row 1
  [
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 3, downStart: 5, letter: '' },
    { isBlock: true, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 6, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 7, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }
  ],
  // Row 2
  [
    { isBlock: false, acrossStart: 4, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 8, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: true, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 5, downStart: 9, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 10, letter: '' }
  ],
  // Row 3
  [
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: true, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 6, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 11, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 12, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }
  ],
  // Row 4
  [
    { isBlock: false, acrossStart: 7, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 13, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 14, letter: '' },
    { isBlock: true, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 8, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }
  ],
  // Row 5
  [
    { isBlock: false, acrossStart: 9, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 15, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 16, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 17, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }
  ],
  // Row 6
  [
    { isBlock: false, acrossStart: 10, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: true, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 11, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 18, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }
  ],
  // Row 7
  [
    { isBlock: false, acrossStart: 12, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 13, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: true, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 14, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }
  ]
];

// 가로 단서
export const acrossClues8 = [
  {
    number: 1,
    clue: "물건을 담는 네모난 상자",
    answer: "상자",
    startRow: 0,
    startCol: 0,
    length: 2
  },
  {
    number: 2,
    clue: "추운 겨울에 하는 운동",
    answer: "스키",
    startRow: 0,
    startCol: 3,
    length: 2
  },
  {
    number: 3,
    clue: "앞으로 나아가는 움직임",
    answer: "전진",
    startRow: 1,
    startCol: 1,
    length: 2
  },
  {
    number: 4,
    clue: "학교에서 공부하는 학생",
    answer: "학생",
    startRow: 2,
    startCol: 0,
    length: 2
  },
  {
    number: 5,
    clue: "달리기를 하는 곳",
    answer: "운동장",
    startRow: 2,
    startCol: 5,
    length: 3
  },
  {
    number: 6,
    clue: "책을 빌려 읽는 곳",
    answer: "도서관",
    startRow: 3,
    startCol: 2,
    length: 3
  },
  {
    number: 7,
    clue: "물건을 사고파는 곳",
    answer: "시장",
    startRow: 4,
    startCol: 0,
    length: 2
  },
  {
    number: 8,
    clue: "음식을 만드는 곳",
    answer: "주방",
    startRow: 4,
    startCol: 6,
    length: 2
  },
  {
    number: 9,
    clue: "학교에서 급식을 먹는 곳",
    answer: "식당",
    startRow: 5,
    startCol: 0,
    length: 2
  },
  {
    number: 10,
    clue: "하늘에서 내리는 물방울",
    answer: "비",
    startRow: 6,
    startCol: 0,
    length: 1
  },
  {
    number: 11,
    clue: "공부를 하는 곳",
    answer: "교실",
    startRow: 6,
    startCol: 4,
    length: 2
  },
  {
    number: 12,
    clue: "운동을 하는 넓은 공간",
    answer: "체육관",
    startRow: 7,
    startCol: 0,
    length: 3
  },
  {
    number: 13,
    clue: "책상 위에 놓는 조명",
    answer: "스탠드",
    startRow: 7,
    startCol: 2,
    length: 3
  },
  {
    number: 14,
    clue: "물건을 정리하는 가구",
    answer: "서랍",
    startRow: 7,
    startCol: 5,
    length: 2
  }
];

// 세로 단서
export const downClues8 = [
  {
    number: 1,
    clue: "종이를 넣어두는 곳",
    answer: "서류함",
    startRow: 0,
    startCol: 0,
    length: 3
  },
  {
    number: 2,
    clue: "운동화를 신고 하는 운동",
    answer: "스포츠",
    startRow: 0,
    startCol: 3,
    length: 3
  },
  {
    number: 3,
    clue: "책상 위에 올려두는 것",
    answer: "필통",
    startRow: 0,
    startCol: 5,
    length: 2
  },
  {
    number: 4,
    clue: "글씨를 쓰는 도구",
    answer: "연필",
    startRow: 0,
    startCol: 7,
    length: 2
  },
  {
    number: 5,
    clue: "옷을 보관하는 가구",
    answer: "장롱",
    startRow: 1,
    startCol: 1,
    length: 2
  },
  {
    number: 6,
    clue: "몸을 씻는 공간",
    answer: "욕실",
    startRow: 1,
    startCol: 4,
    length: 2
  },
  {
    number: 7,
    clue: "신발을 신는 공간",
    answer: "현관",
    startRow: 1,
    startCol: 6,
    length: 2
  },
  {
    number: 8,
    clue: "음식을 데우는 기계",
    answer: "전자레인지",
    startRow: 2,
    startCol: 2,
    length: 4
  },
  {
    number: 9,
    clue: "운동을 가르치는 선생님",
    answer: "체육",
    startRow: 2,
    startCol: 5,
    length: 2
  },
  {
    number: 10,
    clue: "학교에서 배우는 과목",
    answer: "수학",
    startRow: 2,
    startCol: 7,
    length: 2
  },
  {
    number: 11,
    clue: "책을 읽는 곳",
    answer: "독서실",
    startRow: 3,
    startCol: 3,
    length: 3
  },
  {
    number: 12,
    clue: "음식을 만드는 사람",
    answer: "요리사",
    startRow: 3,
    startCol: 6,
    length: 3
  },
  {
    number: 13,
    clue: "학교에서 수업하는 곳",
    answer: "교실",
    startRow: 4,
    startCol: 1,
    length: 2
  },
  {
    number: 14,
    clue: "밥을 먹는 곳",
    answer: "식당",
    startRow: 4,
    startCol: 4,
    length: 2
  },
  {
    number: 15,
    clue: "책을 파는 곳",
    answer: "서점",
    startRow: 5,
    startCol: 2,
    length: 2
  },
  {
    number: 16,
    clue: "병을 고치는 곳",
    answer: "병원",
    startRow: 5,
    startCol: 3,
    length: 2
  },
  {
    number: 17,
    clue: "물건을 사는 곳",
    answer: "상점",
    startRow: 5,
    startCol: 5,
    length: 2
  },
  {
    number: 18,
    clue: "책을 보관하는 가구",
    answer: "책장",
    startRow: 6,
    startCol: 6,
    length: 2
  }
];

export const puzzleData8 = {
  puzzleSize: puzzleSize8,
  puzzleGrid: puzzleGrid8,
  acrossClues: acrossClues8,
  downClues: downClues8
};