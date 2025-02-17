// 퍼즐 크기
export const puzzleSize5 = 5;

// 5x5 퍼즐 그리드 (isBlock=false: 모든 칸 사용 가능)
// 기존 구조를 유지했으며, 실제로는 clue 번호 및 길이에 맞춰 재조정이 필요할 수 있습니다.
export const puzzleGrid5 = [
  // Row 0
  [
    { isBlock: false, acrossStart: 1, downStart: 1, letter: '' }, 
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 2, downStart: 2, letter: '' }, 
    { isBlock: false, acrossStart: null, downStart: 3, letter: '' }, 
    { isBlock: false, acrossStart: null, downStart: 4, letter: '' }, 
  ],
  // Row 1
  [
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 5, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
  ],
  // Row 2
  [
    { isBlock: false, acrossStart: 3, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 6, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 7, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
  ],
  // Row 3
  [
    { isBlock: false, acrossStart: null, downStart: 3, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 8, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: 4, downStart: null, letter: '' },
  ],
  // Row 4
  [
    { isBlock: false, acrossStart: 5, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: null, letter: '' },
    { isBlock: false, acrossStart: null, downStart: 5, letter: '' },
  ],
];

// **가로 열쇠** (1~6)
export const acrossClues5 = [
  {
    number: 1,
    clue: "불을 끄는 자동차",            // 예) '소방차'
    answer: "소방차",                  // 3글자 (소, 방, 차)
    startRow: 0,
    startCol: 0,
    length: 3,
  },
  {
    number: 2,
    clue: "ㅇㅇㅇ을 졸업하고 초등학교에 가요.", // 예) '유치원'
    answer: "유치원",                  // 3글자 (유, 치, 원)
    startRow: 0,
    startCol: 2,
    length: 3,
  },
  {
    number: 3,
    clue: "아픈 사람을 찾아가 위로하는 일",    // 예) '문병'
    answer: "문병",                    // 2글자 (문, 병)
    startRow: 2,
    startCol: 0,
    length: 2,
  },
  {
    number: 4,
    clue: "사는 곳을 다른 데로 옮김. ㅇㅇ를 가요.", // 예) '이사'
    answer: "이사",                    // 2글자 (이, 사)
    startRow: 3,
    startCol: 4,
    length: 2,
  },
  {
    number: 5,
    clue: "나란히, 반듯하게. 신발을 신발장에 ㅇㅇㅇㅇ 놓아요.", // 예) '나란히'
    answer: "나란히",                  // 3글자 (나,란,히)
    startRow: 4,
    startCol: 0,
    length: 3,
  },
  {
    number: 6,
    clue: "머리에 나는 털",             // 예) '머리털'
    answer: "머리털",                   // 3글자 (머,리,털)
    // 임의의 위치로 지정 (실제 퍼즐과 맞추려면 grid에 acrossStart=6인 칸과 일치해야 함)
    startRow: 1,
    startCol: 1,
    length: 3,
  },
];

// **세로 열쇠** (1~7)
export const downClues5 = [
  {
    number: 1,
    clue: "한 손에는 손잡이가 달린 작은 북을, 다른 손에는 나무 채를 들고 두드리는 우리나라의 악기.", // 예) '장구'
    answer: "장구",          // 2글자 (장, 구)
    startRow: 0,
    startCol: 0,
    length: 2,
  },
  {
    number: 2,
    clue: "순서. ㅇㅇ대로 줄을 서요.", // 예) '차례'
    answer: "차례",          // 2글자 (차,례)
    startRow: 0,
    startCol: 2,
    length: 2,
  },
  {
    number: 3,
    clue: "유리로 만든 병",           // 예) '유리병'
    answer: "유리병",         // 3글자 (유,리,병)
    startRow: 0,
    startCol: 3,
    length: 3,
  },
  {
    number: 4,
    clue: "몸이 건강하고 마음이 편안하다는 뜻. 어른과 헤어질 때 ‘ㅇㅇㅇ 계세요.’", // 예) '안녕히'
    answer: "안녕히",         // 3글자 (안,녕,히)
    startRow: 0,
    startCol: 4,
    length: 3,
  },
  {
    number: 5,
    clue: "높은 곳을 오르내릴 때 디딜 수 있도록 만든 기구.", // 예) '사다리'
    answer: "사다리",         // 3글자 (사,다,리)
    startRow: 2,
    startCol: 4,
    length: 3,
  },
  {
    number: 6,
    clue: "밥이나 국 등을 먹을 때 이것을 사용해요.", // 예) '숟가락'
    answer: "숟가락",         // 3글자 (숟,가,락)
    startRow: 2,
    startCol: 1,
    length: 3,
  },
  {
    number: 7,
    clue: "그림이나 장식으로 꾸며진 간단한 편지. 생일 ㅇㅇ를 써요.", // 예) '카드'
    answer: "카드",           // 2글자 (카,드)
    startRow: 2,
    startCol: 3,
    length: 2,
  },
];
