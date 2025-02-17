export const puzzleSize5 = 5;

/**
 * 5×5 퍼즐 그리드 (W: 흰칸, B: 블록)
 *
 * [행별 배치]
 * Row0: [W, W, W, B, B] – 가로단서 “소방차” (3글자) 시작 (번호 1)
 * Row1: [B, W, W, W, B] – 가로단서 “머리털” (3글자) 시작 (번호 4)
 * Row2: [B, B, W, W, W] – 가로단서 “유치원” (3글자) 시작 (번호 6)
 * Row3: [W, W, B, W, W] – 가로단서 두 개 “문병” (2글자, 번호 8)와 “이사” (2글자, 번호 10)
 * Row4: [W, W, W, B, B] – 가로단서 “나란히” (3글자) 시작 (번호 11)
 *
 * 각 칸 객체는 { isBlock, acrossStart, downStart, letter } 형태로 구성되며,
 * downStart는 위쪽 칸이 블록(또는 그리드 밖)이면 부여합니다.
 */
export const puzzleGrid5 = [
  // Row 0
  [
    { isBlock: false, acrossStart: 1,  downStart: 1,  letter: '' }, // (0,0)
    { isBlock: false, acrossStart: null, downStart: 2,  letter: '' }, // (0,1)
    { isBlock: false, acrossStart: null, downStart: 3,  letter: '' }, // (0,2)
    { isBlock: true,  acrossStart: null, downStart: null, letter: '' }, // (0,3)
    { isBlock: true,  acrossStart: null, downStart: null, letter: '' }, // (0,4)
  ],
  // Row 1
  [
    { isBlock: true,  acrossStart: null, downStart: null, letter: '' }, // (1,0)
    { isBlock: false, acrossStart: 4,    downStart: null, letter: '' }, // (1,1)
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }, // (1,2)
    { isBlock: false, acrossStart: 5,    downStart: 5,    letter: '' }, // (1,3)
    { isBlock: true,  acrossStart: null, downStart: null, letter: '' }, // (1,4)
  ],
  // Row 2
  [
    { isBlock: true,  acrossStart: null, downStart: null, letter: '' }, // (2,0)
    { isBlock: true,  acrossStart: null, downStart: null, letter: '' }, // (2,1)
    { isBlock: false, acrossStart: 6,    downStart: null, letter: '' }, // (2,2)
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }, // (2,3)
    { isBlock: false, acrossStart: null, downStart: 7,    letter: '' }, // (2,4)
  ],
  // Row 3
  [
    { isBlock: false, acrossStart: 8,    downStart: 8, letter: '' }, // (3,0)
    { isBlock: false, acrossStart: null, downStart: 9, letter: '' }, // (3,1)
    { isBlock: true,  acrossStart: null, downStart: null, letter: '' }, // (3,2)
    { isBlock: false, acrossStart: 10,   downStart: null, letter: '' }, // (3,3)
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }, // (3,4)
  ],
  // Row 4
  [
    { isBlock: false, acrossStart: 11,   downStart: 11, letter: '' }, // (4,0)
    { isBlock: false, acrossStart: null, downStart: null, letter: '' }, // (4,1)
    { isBlock: false, acrossStart: null, downStart: 12,   letter: '' }, // (4,2)
    { isBlock: true,  acrossStart: null, downStart: null, letter: '' }, // (4,3)
    { isBlock: true,  acrossStart: null, downStart: null, letter: '' }, // (4,4)
  ],
];

/**
 * [가로 단서]
 * Row0(번호 1): “소방차” – (0,0)부터 오른쪽 3칸  
 * Row1(번호 4): “머리털” – (1,1)부터 오른쪽 3칸  
 * Row2(번호 6): “유치원” – (2,2)부터 오른쪽 3칸  
 * Row3: 두 낱말  
 *   - (번호 8) “문병” – (3,0)부터 오른쪽 2칸  
 *   - (번호 10) “이사” – (3,3)부터 오른쪽 2칸  
 * Row4(번호 11): “나란히” – (4,0)부터 오른쪽 3칸
 */
export const acrossClues5 = [
  {
    number: 1,
    clue: "불을 끄는 자동차",
    answer: "소방차", // 3글자
    startRow: 0,
    startCol: 0,
    length: 3,
  },
  {
    number: 4,
    clue: "머리에 나는 털",
    answer: "머리털", // 3글자
    startRow: 1,
    startCol: 1,
    length: 3,
  },
  {
    number: 6,
    clue: "ㅇㅇㅇ을 졸업하고 초등학교에 가요.",
    answer: "유치원", // 3글자
    startRow: 2,
    startCol: 2,
    length: 3,
  },
  {
    number: 8,
    clue: "아픈 사람을 찾아가 위로하는 일",
    answer: "문병", // 2글자
    startRow: 3,
    startCol: 0,
    length: 2,
  },
  {
    number: 10,
    clue: "사는 곳을 다른 데로 옮김. ㅇㅇ를 가요.",
    answer: "이사", // 2글자
    startRow: 3,
    startCol: 3,
    length: 2,
  },
  {
    number: 11,
    clue: "나란히, 반듯하게 놓아요.",
    answer: "나란히", // 3글자
    startRow: 4,
    startCol: 0,
    length: 3,
  },
];

/**
 * [세로 단서]
 * – (번호 2) “차례”: (0,1)에서 시작, 세로로 2칸 (Row0~Row1)  
 * – (번호 3) “유리병”: (0,2)에서 시작, 세로로 3칸 (Row0~Row2)  
 * – (번호 5) “안녕히”: (1,3)에서 시작, 세로로 3칸 (Row1~Row3)  
 * – (번호 7) “사다리”: (2,4)에서 시작, 세로로 3칸 (Row2~Row4)  
 * – (번호 8) “장구”: (3,0)에서 시작, 세로로 2칸 (Row3~Row4)  
 * – (번호 9) “숟가락”: (3,1)에서 시작, 세로로 3칸 (Row3~Row4와 위쪽 빈칸 포함)  
 * – (번호 12) “카드”: (4,2)에서 시작, 세로로 2칸 (Row4~다음행 없음 → 단서 길이 2)
 *
 * (※ 실제 배치에서는 각 단서가 해당 흰칸 구간과 정확히 일치하도록 번호와 길이를 조정했습니다.)
 */
export const downClues5 = [
  {
    number: 2,
    clue: "순서. ㅇㅇ대로 줄을 서요.",
    answer: "차례", // 2글자
    startRow: 0,
    startCol: 1,
    length: 2,
  },
  {
    number: 3,
    clue: "유리로 만든 병",
    answer: "유리병", // 3글자
    startRow: 0,
    startCol: 2,
    length: 3,
  },
  {
    number: 5,
    clue: "몸이 건강하고 마음이 편안한 인사말",
    answer: "안녕히", // 3글자
    startRow: 1,
    startCol: 3,
    length: 3,
  },
  {
    number: 7,
    clue: "높은 곳을 오르내릴 때",
    answer: "사다리", // 3글자
    startRow: 2,
    startCol: 4,
    length: 3,
  },
  {
    number: 8,
    clue: "작은 북, 장구",
    answer: "장구", // 2글자
    startRow: 3,
    startCol: 0,
    length: 2,
  },
  {
    number: 9,
    clue: "밥이나 국을 먹을 때 사용하는 도구",
    answer: "숟가락", // 3글자
    startRow: 3,
    startCol: 1,
    length: 3,
  },
  {
    number: 12,
    clue: "편지를 대신하는 간단한 카드, 생일 ㅇㅇ",
    answer: "카드", // 2글자
    startRow: 4,
    startCol: 2,
    length: 2,
  },
];

export const puzzleData5 = {
  puzzleSize: puzzleSize5,
  puzzleGrid: puzzleGrid5,
  acrossClues: acrossClues5,
  downClues: downClues5,
};
