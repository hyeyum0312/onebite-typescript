// 타입추론
// 초기값을 기준으로 타입을 추론함.

let a = 10;
let b = "hello";
let c = {
    id: 1,
    name: "hy",
    profile: {
        nickname: "joy",
    },
    urls: ["http://dddd.com"],
};

let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
    return "hello";
}

let d;
d = 10;
d.toFixed();
d = "hello";
d.toUpperCase();
