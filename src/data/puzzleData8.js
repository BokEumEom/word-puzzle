// 퍼즐 크기
export const puzzleSize8 = 8;

// 8×8 그리드 예시 (모두 isBlock=false, 단서 시작 칸에만 acrossStart/downStart 설정)
export const puzzleGrid8 = [
  // Row 0
  [
    { isBlock: false, acrossStart: 2, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 1, letter: '' },
    { isBlock: false, acrossStart: 8, downStart: 2, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 10, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 3, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 4, letter: '' },
  ],
  // Row 1
  [
    { isBlock: false, acrossStart: 5, downStart: 2, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 3, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 10, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 11, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
  ],
  // Row 2
  [
    { isBlock: false, acrossStart: 7, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 5, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 8, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 6, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 9, letter: '' },
  ],
  // Row 3
  [
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
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
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
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
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
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
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 6, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 17, letter: '' },
  ],
];

// **가로 열쇠** (2,5,7,8,10,11,12,14,16,17,18,19)
export const acrossClues8 = [
  {
    number: 2,
    clue: "초등학생들이 다니는 학교",
    answer: "초등학교", // 4음절 (초,등,학,교)
    startRow: 0,
    startCol: 0,
    length: 4,
  },
  {
    number: 5,
    clue: "변이 안 나올 때 먹는 약",
    answer: "변비약", // 3음절 (변,비,약)
    startRow: 1,
    startCol: 0,
    length: 3,
  },
  {
    number: 7,
    clue: "겨울에 지붕 밑에 달리는 뾰족한 얼음",
    answer: "고드름", // 3음절 (고,드,름)
    startRow: 2,
    startCol: 0,
    length: 3,
  },
  {
    number: 8,
    clue: "집안이 화목해야 모든 일이 잘 된다는 다섯 글자의 고사성어",
    answer: "가화만사성", // 5음절 (가,화,만,사,성)
    startRow: 0,
    startCol: 2,
    length: 5,
  },
  {
    number: 10,
    clue: "예쁘고 멋있는 사람을 이용해서 사람을 꾀는 계략",
    answer: "미인계", // 3음절 (미,인,계)
    startRow: 0,
    startCol: 4,
    length: 3,
  },
  {
    number: 11,
    clue: "손기술이나 장치를 이용해서 사람들의 눈을 속이는 공연(Magic)",
    answer: "마술", // 2음절 (마,술)
    startRow: 3,
    startCol: 4,
    length: 2,
  },
  {
    number: 12,
    clue: "과일을 판매하는 가게",
    answer: "과일가게", // 4음절 (과,일,가,게)
    startRow: 4,
    startCol: 0,
    length: 4,
  },
  {
    number: 14,
    clue: "꼬불꼬불 면발과 스프로 끓이는 간편 음식",
    answer: "라면", // 2음절 (라,면)
    startRow: 5,
    startCol: 0,
    length: 2,
  },
  {
    number: 16,
    clue: "옷과 음식, 집을 일컫는 단어",
    answer: "의식주", // 3음절 (의,식,주)
    startRow: 6,
    startCol: 0,
    length: 3,
  },
  {
    number: 17,
    clue: "나무에 줄을 걸어 당겼다 풀어 반동으로 쏘아내는 무기",
    answer: "활", // 1음절 (활)
    startRow: 6,
    startCol: 4,
    length: 1,
  },
  {
    number: 18,
    clue: "한 도의 행정 사무를 총괄하는 광역 자치 단체장",
    answer: "도지사", // 3음절 (도,지,사)
    startRow: 7,
    startCol: 0,
    length: 3,
  },
  {
    number: 19,
    clue: "스키를 탈 수 있는 장소",
    answer: "스키장", // 3음절 (스,키,장)
    startRow: 7,
    startCol: 2,
    length: 3,
  },
];

// **세로 열쇠** (1,2,3,4,5,6,8,9,10,11,12,13,15,16,17)
export const downClues8 = [
  {
    number: 1,
    clue: "중간고사 다음에 보는 시험",
    answer: "기말고사", // 4음절 (기,말,고,사)
    startRow: 0,
    startCol: 1,
    length: 4,
  },
  {
    number: 2,
    clue: "여름 초입",
    answer: "초여름", // 3음절 (초,여,름)
    startRow: 1,
    startCol: 0,
    length: 3,
  },
  {
    number: 3,
    clue: "교육을 목적으로 쉽게 풀어 그린 만화",
    answer: "학습만화", // 4음절 (학,습,만,화)
    startRow: 0,
    startCol: 5,
    length: 4,
  },
  {
    number: 4,
    clue: "비 올 때 입는 옷이나 우산을 통틀어 이르는 말",
    answer: "우비", // 2음절 (우,비)
    startRow: 0,
    startCol: 7,
    length: 2,
  },
  {
    number: 5,
    clue: "재판할 때 개인을 변호해 주는 사람",
    answer: "변호사", // 3음절 (변,호,사)
    startRow: 1,
    startCol: 1,
    length: 3,
  },
  {
    number: 6,
    clue: "약을 판매하는 곳",
    answer: "약국", // 2음절 (약,국)
    startRow: 2,
    startCol: 5,
    length: 2,
  },
  {
    number: 8,
    clue: "집안 살림할 때 수입과 지출 내역을 적는 책(장부)",
    answer: "가계부", // 3음절 (가,계,부)
    startRow: 2,
    startCol: 3,
    length: 3,
  },
  {
    number: 9,
    clue: "성악을 하는 음악가",
    answer: "성악가", // 3음절 (성,악,가)
    startRow: 2,
    startCol: 7,
    length: 3,
  },
  {
    number: 10,
    clue: "공간 및 시각의 미를 표현하는 예술, 그림을 그리는 수업",
    answer: "미술", // 2음절 (미,술)
    startRow: 3,
    startCol: 6,
    length: 2,
  },
  {
    number: 11,
    clue: "필리핀의 수도",
    answer: "마닐라", // 3음절 (마,닐,라)
    startRow: 1,
    startCol: 6,
    length: 3,
  },
  {
    number: 12,
    clue: "과일을 짜서 만든 음료수",
    answer: "주스", // 2음절 (주,스)
    startRow: 5,
    startCol: 2,
    length: 2,
  },
  {
    number: 13,
    clue: "게살 맛이 나도록 만든 가공 식품",
    answer: "게맛살", // 3음절 (게,맛,살)
    startRow: 5,
    startCol: 3,
    length: 3,
  },
  {
    number: 15,
    clue: "남자들이 수염이 났을 때 하는 것",
    answer: "면도", // 2음절 (면,도)
    startRow: 5,
    startCol: 6,
    length: 2,
  },
  {
    number: 16,
    clue: "병원에서 사람을 치료하는 사람",
    answer: "의사", // 2음절 (의,사)
    startRow: 6,
    startCol: 2,
    length: 2,
  },
  {
    number: 17,
    clue: "꾸미는 행위, 메이크업",
    answer: "화장", // 2음절 (화,장)
    startRow: 7,
    startCol: 7,
    length: 2,
  },
];
