// 함수타입정의
// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 타입의 매개변수를 받고 어떤 타입의 결과값을 반환하는지
function func(a: number, b: number) {
    return a + b;
}

// 화살표함수 타입 정의하는 방법
const add = (a: number, b: number) => a + b;

// 함수의 매개변수
// 필수매개변수는 선택적 매개변수보다 앞에 있어야한다.
function interoduce(name = "조혜연", age: 33, tall?: number) {
    console.log(`name: ${name}`);
    if (typeof tall === "number") {
        console.log(`tall: ${tall + 10}`);
    }
}
interoduce("조혜연", 33, 162);
interoduce("조혜연", 33);

function getSum(...rest: number[]) {
    let sum = 0;
    rest.forEach((it) => (sum += it));
    return sum;
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);
