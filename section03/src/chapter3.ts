// 기본타입간의 호환성

let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // 업캐스팅
// num2 = num1; // 다운캐스팅.

// 객체타입 간의호환성
// 어떤 객체타입을 다른 객체 타입으로 취급해도 괜찮은가?

type Animal = {
    name: string;
    color: string;
};

type Dog = {
    name: string;
    color: string;
    bread: string;
};

// 슈퍼
let anymal: Animal = {
    name: "기린",
    color: "yello",
};

//서브
let dog: Dog = {
    name: "돌돌이",
    color: "brown",
    bread: "진도",
};

anymal = dog;
// dog = anymal;

// 객체타입
// 프로퍼티 기준으로 타입을 정하는 구조적 타입시스템
// 객체중에 네임과 컬러 프로퍼티가 있는건 다 any타입이야.

type Book = {
    name: string;
    price: number;
};

type ProgramingBook = {
    name: string;
    price: number;
    skill: string;
};

let book: Book;
let programingBook: ProgramingBook = {
    name: "한입크기로 잘라먹는 리액트",
    price: 33000,
    skill: "reactjs",
};

book = programingBook;
// programingBook = book;

// 초과 프로퍼티 검사
let book2: Book = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 330000,
    // skill: "reactjs",
};

let book3: Book = programingBook;

function func(book: Book) {
    func(programingBook);

    //   func({
    //     name: "한 입크기",
    //     price: 33000,
    // });
}
