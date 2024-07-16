type User = {
    id: number;
    name: string;
    nickname: string;
    bio: string;
    birth: string;
    location: string;
};

// 타입 별칭
let user1: User = {
    id: 1,
    name: "조혜연",
    nickname: "joy",
    bio: "안녕하세요",
    birth: "1992-03-12",
    location: "서울",
};

let user2: User = {
    id: 2,
    name: "조혜연이",
    nickname: "joy2",
    bio: "안녕하세요2",
    birth: "1992-03-22",
    location: "서울",
};

// 인덱스 시그니처
type ContryCodes = {
    [key: string]: string;
};

let contryCodes: ContryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};

type ContryNumberCodes = {
    [key: string]: number;
};

let contryNumberCodes: ContryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
};

// 값이 없음에도 문제가 생기지 않음,주의할것
let contryNumberCodes2: ContryNumberCodes = {};

// 반드시 korea라는 number타입이 있어야한다면  Korea: number 값을 넣어주면 된다.
// type ContryNumberCodes = {
// [key: string]: number;
// Korea: number;
// };
