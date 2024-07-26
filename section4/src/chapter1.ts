// 함수타입표현식
type Operation = (a: number, b: number) => number;

const add1: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

// 호출 시그니처
type Operation2 = {
    (a: number, b: number): number;
    name: string;
};

const add2: Operation2 = (a, b) => a + b;
const sub3: Operation2 = (a, b) => a - b;
const multiply3: Operation2 = (a, b) => a * b;
const divide3: Operation2 = (a, b) => a / b;
