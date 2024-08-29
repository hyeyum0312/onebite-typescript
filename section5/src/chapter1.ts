// 인터페이스의 확장
interface Animal {
    name: string;
    color: string;
}

// 만약 type이라도 확장 가능합니다.
// type Animal = {
//   name: string;
//   color: string;
// };

// Animal타입이 Dog타입의 super타입이 되어야함
// super와 sub타입
// 원본 프로퍼티 타입에 서브타입이 되도록 다시 지정해줘야한다.
interface Dog extends Animal {
    // name: number; // 같은 타입이 아닌 새로운 타입으로 재지정 하면 오류가 발생합니다.
    name: string;
    isBark: boolean;
}

interface Cat extends Animal {
    name: string;
    age: number;
    isScratch: boolean;
}

interface Chicken extends Animal {
    name: string;
    age: number;
    fly: boolean;
}

const dog: Dog = {
    name: "Jadu",
    color: "grey",
    isBark: true,
};

interface DogCat extends Dog, Cat {}

const dogcat: DogCat = {
    name: "",
    color: "white",
    age: 2,
    isBark: true,
    isScratch: true,
};
