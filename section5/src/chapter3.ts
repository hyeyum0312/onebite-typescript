// 선언 합치기

interface Person {
    name: string;
}

interface Person {
    age: number;
}

const person: Person = {
    name: "hye",
    age: 1,
};

interface Developer extends Person {
    name: "hello"; // 반드시 동일한 타입으로만 정의를 해줘야합니다.
}

// 모듈보강

interface Lib {
    a: number;
    b: number;
}

interface Lib {
    c: number;
}

const lib: Lib = {
    a: 1,
    b: 2,
    c: 3,
};
