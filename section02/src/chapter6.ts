// any type
// 특정변수의 타입을 확실히 모를 때 사용함

let anyVar = 10;
// anyVar = "hello"; // 에러남
let num: number = 10;
num = anyVar;

// toUpperCase같은 메서드 사용가능
// 타입검사를 다 통과하고 = 검사를 안하는것과 다름없음
// 런타임에 문제가 발생하는 최악의 상황을 유발함.

// unknown
let unknownVar: unknown;
unknownVar = 1;
unknownVar = "";
unknownVar = () => {};

// unknown은 모든 값을 저장할 수 있지만 반대로는 불가합니다..
// num = unknownVar; // 에러남.
// toUpperCase같은 메서드 사용불가.
if (typeof unknownVar === "number") {
    num = unknownVar;
}

// 런타임 에러를 일으키는 any보단 unknown을 사용하는 편이 낫다.
