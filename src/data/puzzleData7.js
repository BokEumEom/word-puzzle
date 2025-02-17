// 퍼즐 크기
export const puzzleSize7 = 7;

// 7x7 퍼즐 그리드
export const puzzleGrid7 = [
  [
    { isBlock: false, acrossStart: 1, downStart: 1, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 2, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 3, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: true, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 4, downStart: 4, letter: '' },
  ],
  [
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 5, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: true, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 6, downStart: 5, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 6, letter: '' },
  ],
  [
    { isBlock: false, acrossStart: 7, downStart: null, letter: '' },
    { isBlock: true, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 8, downStart: 7, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: true, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 9, downStart: 8, letter: '' },
  ],
  [
    { isBlock: false, acrossStart: 10, downStart: 9, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: true, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 11, downStart: 10, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 12, downStart: 11, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
  ],
  [
    { isBlock: true, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 13, downStart: 12, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 14, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 13, letter: '' },
    { isBlock: true, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 15, downStart: 14, letter: '' },
  ],
  [
    { isBlock: false, acrossStart: 16, downStart: 15, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: true, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 17, downStart: 16, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 18, downStart: 17, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
  ],
  [
    { isBlock: false, acrossStart: 19, downStart: 18, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 20, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 19, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: true, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 21, downStart: 20, letter: '' },
  ],
];

// 가로 단서
export const acrossClues7 = [
  { number: 1, clue: "한국의 수도", answer: "서울", startRow: 0, startCol: 0, length: 2 },
  { number: 2, clue: "일주일의 시작", answer: "월요일", startRow: 0, startCol: 2, length: 3 },
  { number: 4, clue: "바람이 세게 부는 계절", answer: "겨울", startRow: 0, startCol: 6, length: 2 },
  { number: 5, clue: "아침에 먹는 음식", answer: "토스트", startRow: 1, startCol: 1, length: 4 },
  { number: 7, clue: "노래를 부르는 곳", answer: "노래방", startRow: 2, startCol: 0, length: 3 },
  { number: 10, clue: "책을 읽을 수 있는 곳", answer: "도서관", startRow: 3, startCol: 0, length: 3 },
  { number: 13, clue: "고기를 구워 먹는 곳", answer: "바베큐", startRow: 4, startCol: 1, length: 3 },
];

// 세로 단서
export const downClues7 = [
  { number: 1, clue: "가을에 떨어지는 것", answer: "낙엽", startRow: 0, startCol: 0, length: 3 },
  { number: 3, clue: "추운 날씨", answer: "겨울", startRow: 0, startCol: 3, length: 2 },
  { number: 4, clue: "파란 하늘", answer: "하늘", startRow: 0, startCol: 6, length: 3 },
  { number: 5, clue: "음식을 먹을 때 사용하는 도구", answer: "젓가락", startRow: 1, startCol: 4, length: 3 },
  { number: 7, clue: "빛을 밝히는 물체", answer: "전등", startRow: 2, startCol: 2, length: 3 },
  { number: 10, clue: "컴퓨터와 연결된 기기", answer: "마우스", startRow: 3, startCol: 3, length: 3 },
  { number: 12, clue: "눈이 내리는 계절", answer: "겨울", startRow: 4, startCol: 1, length: 2 },
];

