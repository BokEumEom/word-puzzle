// 퍼즐 크기
export const puzzleSize8 = 8;

/*
8×8 퍼즐 그리드
- 블록 셀(isBlock: true)을 일부 추가
- 기존 acrossStart / downStart를 일부 교차 지점에 맞춰 재배치
- 실제 교차 검증은 최소한의 수준으로 반영 (완벽 교차 X)
*/
export const puzzleGrid8 = [
  // Row 0
  [
    { isBlock: false, acrossStart: 2, downStart: 2, letter: '' }, // (0,0)
    { isBlock: false, acrossStart: null, downStart: 1, letter: '' }, // (0,1)
    { isBlock: true,  acrossStart: null, downStart: null, letter: '' }, // (0,2) 블록
    { isBlock: false, acrossStart: 8, downStart: null, letter: '' }, // (0,3)
    { isBlock: false, acrossStart: null, downStart: 10, letter: '' }, // (0,4)
    { isBlock: false, acrossStart: null, downStart: 3, letter: '' },  // (0,5)
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }, 
    { isBlock: false, acrossStart: null, downStart: 4, letter: '' },
  ],
  // Row 1
  [
    { isBlock: false, acrossStart: 5, downStart: null, letter: '' }, // (1,0)
    { isBlock: false, acrossStart: null, downStart: 5, letter: '' }, // (1,1)
    { isBlock: true,  acrossStart: null, downStart: null, letter: '' }, // (1,2) 블록
    { isBlock: false, acrossStart: null, downStart: 8, letter: '' }, 
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }, 
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 11, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
  ],
  // Row 2
  [
    { isBlock: false, acrossStart: 7, downStart: null, letter: '' }, // (2,0)
    { isBlock: false, acrossStart: null, downStart: 5, letter: '' }, // (2,1)
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 8, letter: '' },
    { isBlock: true,  acrossStart: null, downStart: null, letter: '' }, // (2,4) 블록
    { isBlock: false, acrossStart: null, downStart: 6, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 9, letter: '' },
  ],
  // Row 3
  [
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: true,  acrossStart: null, downStart: null, letter: '' }, // (3,1) 블록
    { isBlock: false, acrossStart: null, downStart: 3, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 11, downStart: 8, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 10, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
  ],
  // Row 4
  [
    { isBlock: false, acrossStart: 12, downStart: null, letter: '' }, 
    { isBlock: false, acrossStart: null, downStart: 5, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 9, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: true,  acrossStart: null, downStart: null, letter: '' }, // (4,5) 블록
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 10, letter: '' },
  ],
  // Row 5
  [
    { isBlock: false, acrossStart: 14, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 6, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 12, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 13, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 15, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
  ],
  // Row 6
  [
    { isBlock: false, acrossStart: 16, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 8, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 16, letter: '' },
    { isBlock: true,  acrossStart: null, downStart: null, letter: '' }, // (6,3) 블록
    { isBlock: false, acrossStart: 17, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 11, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 16, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
  ],
  // Row 7
  [
    { isBlock: false, acrossStart: 18, downStart: 1, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 19, downStart: 3, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: true,  acrossStart: null, downStart: null, letter: '' }, // (7,4) 블록
    { isBlock: false, acrossStart: null, downStart: 6, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 17, letter: '' },
  ],
];

// -------------------
// 가로 열쇠 (동일)
// -------------------
export const acrossClues8 = [
  {
    number: 2,
    clue: "초등학생들이 다니는 학교",
    answer: "초등학교",
    startRow: 0,
    startCol: 0,
    length: 4,
  },
  {
    number: 5,
    clue: "변이 안 나올 때 먹는 약",
    answer: "변비약",
    startRow: 1,
    startCol: 0,
    length: 3,
  },
  {
    number: 7,
    clue: "겨울에 지붕 밑에 달리는 뾰족한 얼음",
    answer: "고드름",
    startRow: 2,
    startCol: 0,
    length: 3,
  },
  {
    number: 8,
    clue: "집안이 화목해야 모든 일이 잘 된다는 다섯 글자의 고사성어",
    answer: "가화만사성",
    startRow: 0,
    startCol: 3,
    length: 5,
  },
  {
    number: 10,
    clue: "예쁘고 멋있는 사람을 이용해서 사람을 꾀는 계략",
    answer: "미인계",
    startRow: 0,
    startCol: 4,
    length: 3,
  },
  {
    number: 11,
    clue: "손기술이나 장치를 이용해서 사람들의 눈을 속이는 공연(Magic)",
    answer: "마술",
    startRow: 3,
    startCol: 4,
    length: 2,
  },
  {
    number: 12,
    clue: "과일을 판매하는 가게",
    answer: "과일가게",
    startRow: 4,
    startCol: 0,
    length: 4,
  },
  {
    number: 14,
    clue: "꼬불꼬불 면발과 스프로 끓이는 간편 음식",
    answer: "라면",
    startRow: 5,
    startCol: 0,
    length: 2,
  },
  {
    number: 16,
    clue: "옷과 음식, 집을 일컫는 단어",
    answer: "의식주",
    startRow: 6,
    startCol: 0,
    length: 3,
  },
  {
    number: 17,
    clue: "나무에 줄을 걸어 당겼다 풀어 반동으로 쏘아내는 무기",
    answer: "활",
    startRow: 6,
    startCol: 4,
    length: 1,
  },
  {
    number: 18,
    clue: "한 도의 행정 사무를 총괄하는 광역 자치 단체장",
    answer: "도지사",
    startRow: 7,
    startCol: 0,
    length: 3,
  },
  {
    number: 19,
    clue: "스키를 탈 수 있는 장소",
    answer: "스키장",
    startRow: 7,
    startCol: 2,
    length: 3,
  },
];

// -------------------
// 세로 열쇠 (동일)
// -------------------
export const downClues8 = [
  {
    number: 1,
    clue: "중간고사 다음에 보는 시험",
    answer: "기말고사",
    startRow: 0,
    startCol: 1,
    length: 4,
  },
  {
    number: 2,
    clue: "여름 초입",
    answer: "초여름",
    startRow: 0,
    startCol: 0,
    length: 3,
  },
  {
    number: 3,
    clue: "교육을 목적으로 쉽게 풀어 그린 만화",
    answer: "학습만화",
    startRow: 0,
    startCol: 5,
    length: 4,
  },
  {
    number: 4,
    clue: "비 올 때 입는 옷이나 우산을 통틀어 이르는 말",
    answer: "우비",
    startRow: 0,
    startCol: 7,
    length: 2,
  },
  {
    number: 5,
    clue: "재판할 때 개인을 변호해 주는 사람",
    answer: "변호사",
    startRow: 1,
    startCol: 1,
    length: 3,
  },
  {
    number: 6,
    clue: "약을 판매하는 곳",
    answer: "약국",
    startRow: 2,
    startCol: 5,
    length: 2,
  },
  {
    number: 8,
    clue: "집안 살림할 때 수입과 지출 내역을 적는 책(장부)",
    answer: "가계부",
    startRow: 1,
    startCol: 3,
    length: 3, 
  },
  {
    number: 9,
    clue: "성악을 하는 음악가",
    answer: "성악가",
    startRow: 2,
    startCol: 7,
    length: 3,
  },
  {
    number: 10,
    clue: "공간 및 시각의 미를 표현하는 예술, 그림을 그리는 수업",
    answer: "미술",
    startRow: 3,
    startCol: 6,
    length: 2,
  },
  {
    number: 11,
    clue: "필리핀의 수도",
    answer: "마닐라",
    startRow: 6,
    startCol: 5,
    length: 3,
  },
  {
    number: 12,
    clue: "과일을 짜서 만든 음료수",
    answer: "주스",
    startRow: 5,
    startCol: 2,
    length: 2,
  },
  {
    number: 13,
    clue: "게살 맛이 나도록 만든 가공 식품",
    answer: "게맛살",
    startRow: 5,
    startCol: 3,
    length: 3,
  },
  {
    number: 15,
    clue: "남자들이 수염이 났을 때 하는 것",
    answer: "면도",
    startRow: 5,
    startCol: 6,
    length: 2,
  },
  {
    number: 16,
    clue: "병원에서 사람을 치료하는 사람",
    answer: "의사",
    startRow: 6,
    startCol: 2,
    length: 2,
  },
  {
    number: 17,
    clue: "꾸미는 행위, 메이크업",
    answer: "화장",
    startRow: 7,
    startCol: 7,
    length: 2,
  },
];
