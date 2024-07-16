// void
// void -> 공허, 아무것도 없다. 아무것도 없음을 의미하는 타입입니다.

function func1(): string {
    return "hello";
}

// 반환값이 없을 때 void사용.
// 만약 :undefined로 정의 하면 실제로 return; 혹은 return undefined로 반환해야합니다.
// undefined이나 null을 반환을 꼭 해줘야해서 return을 하지 않아도 되는 경우 void를 주로 사용함.
function func2(): void {
    console.log("hello");
}

let a: void; // undefined만 반환이 가능합니다.
// a = 1; 에러
// a = "hello"; 에러
// a = {};에러
a = undefined;

// never타입 -> 불가능, 모순
// 반환하는 것이 모순이고 반환이 불가한 경우 void타입을 정의 하는 것은 말이 안되는 방식임
// 이 경우엔 never타입을 넣어주면 됩니다.
function func3(): never {
    while (true) {} // 무한루프
}

function func4(): never {
    throw new Error();
}

let b: never; // undefined만 반환이 가능합니다.
// b = 1; 에러
// b = "hello"; 에러
// b = {};에러
// b = undefined; 에러
// b = null; 에러
// void와는 달리 strictNullChecks타입이 꺼져있어도 오류발생함
