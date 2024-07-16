// enum
// 여러가지 값들에 각각의 이름을 부여해 열거해두고 사용하는 타입
enum Role {
    // ADMIN = 0, 숫자할당안해도 0부터 +1씩된다.
    ADMIN,
    USER,
    GUEST,
}

enum Language {
    korea = "kor",
    english = "en",
}
// 숫자형 enum ex)ADMIN=10
// 문자형 enum ex)korea='ko'

let user1 = {
    id: 1,
    name: "조혜연1",
    role: Role.ADMIN,
};

let user2 = {
    id: 2,
    name: "조혜연2",
    role: Role.USER,
};

let user3 = {
    id: 3,
    name: "조혜연3",
    role: Role.GUEST,
};
