// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["a", "b", "c"];
let boolArr: Array<boolean> = [true, false, false]; // 제네릭타입

// 배열의 타입이 다양할경우
let multiArr: (number | string)[] = [1, "hello"]; // 유니온타입

// 다차원배열
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5],
    [6, 7],
];

//튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1,2,3] //불가
// tup1 = ["1","2"]//불가

let tup2: [number, string, boolean] = [1, "hello", false];

// 튜플타입 사용시 배열메서드 사용해서 push나 pop등으로 요소를 추가하거나 제거 하는 기능 사용 시 각별히 주의가 필요함
tup1.push(1);
tup1.pop();
tup1.pop();

// 튜플타입 유용한 상황
// 인덱스별로 다른값을 놓아야하는대 순서가 헷갈릴 수 있음 이때 사용하면 유용하다
const users: [string, number][] = [
    ["서울", 1],
    ["경기", 2],
    ["인천", 3],
    ["대전", 4],
    // [5, "대구"], 문제가 발생할것이다.
];
