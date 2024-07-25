// 타입단언
// assertion

type Person = {
    name: string;
    age: number;
};

let person = {} as Person;
person.name = "조혜연";
person.age = 33;

type Dog = {
    name: string;
    color: string;
};

let dog = {
    name: "돌돌이",
    color: "brown",
    bread: "진도",
} as Dog;

// 단언 사용 시 규칙을 만족해야한다.
// 값 as 단언
// A as B
// A가 B의 슈퍼타입이거나
// A가 B의 서브타입이어야함.

let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string;

// const 단언
let num4 = 10 as const;
// 모든프로퍼티를 readonly로 만들어줄 수았음.
let cat = {
    name: "야옹이",
    color: "yellow",
} as const;

// None Null단언

type Post = {
    title: string;
    author: string;
};

let post: Post = {
    title: "게시글1",
    author: "조혜연",
};

const len: number = post.author!.length;
