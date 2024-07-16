console.log("hello2");

console.log("hello");
// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = Infinity;
let num5: number = -Infinity;
let num6: number = NaN;

// :number = 주석 annotation
// toFixed()등 숫자에만 적용가능한 매서드 적용가능. (toUpperCase등의 메서드 불가.)

// string
let str1: string = "hello";
let str2: string = "hello";
let str3: string = `hello`;
let str4: string = `hello${num1}`;
// toUpperCase()등 문자에만 적용가능한 매서드 적용가능.(toFixed 등의 메서드 불가.)

// boolean
let bool1: boolean = null;

// undefined
let unde1: undefined = undefined;

// tsConfig: "strictNullChecks": false 체크, 엄격한 null검사 허용 시 null타입이 아닌 number타입에도 임시로 null을 넣어줄수있다.
let numA: number = null;

// 리터럴
// 리터럴 -> 값
let numB: 10 = 10;
// numB = 12;
