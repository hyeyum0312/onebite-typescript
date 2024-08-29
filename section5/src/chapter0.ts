// interfase
// 인터페이스

interface Person {
    readonly name: string;
    age: number;
    sayHi(): void;
    sayHi(a: number, b: number): void;
}

// type func = {
//     (): void;
// };
// 타입에서는 유니온이나 인터섹션 타입을 사용할 수 있습니다.
type Type1 = number | string;
type Type2 = number & string;

// 인터페이스에서는 유니온타입이나 인터섹션 타입을 사용할 수 없습니다.
type Type3 = number | string | Person; // 이렇게 사용하거나
type Type4 = number & string & Person; // 이렇게 사용하거나

const person: Person | number = {
    // 타입 주석에 |number 식으로 사용해야한다.
    name: "조혜연",
    age: 33,
    sayHi: function () {
        console.log("hi");
    },
};

// person.name = "홍길동";

// 호출시그니처를 이용해야함
// 메소드에 오버로딩을 구현하고 싶다면 호출시그니처를 사용해라
// sayHi(a:number,b:number) :void

person.sayHi();
person.sayHi(1, 2);
