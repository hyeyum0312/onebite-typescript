let dog: {
    name: string;
    color: string;
} = {
    name: "돌돌이",
    color: "brown",
};

// 구조적 타입 시스템
// property based type system

// 이름만을 기준으로 타입을 정의한다 = 명목적 타입 시스템
// 타입스트립트는 구조적 타입시스템을 사용합니다.

// 객체 리터럴 타입
let user: {
    id?: number; // 선택적프로퍼티 (optional property), 있어도 되고 없어도된다면 ?
    name: string;
} = {
    id: 1,
    name: "조혜연",
};

user = {
    name: "홍길동",
};

let config: {
    readonly apiKey: string;
} = {
    apiKey: "123123QWEQWE",
};

// readonly가 붙으면 값을 변경하는 행위가 불가능합니다.
// config.apiKey = "45678QWEQWEQW";
// 절대 값이 수정되어져선 안되는 프로퍼티가 있다면 사용할것.
