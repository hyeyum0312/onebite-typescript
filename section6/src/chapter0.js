// 클래스
// 수백명의 학생이라면 수백개의 객체를 만들어줘야하는 불편함이 있다.
// 클래스는 객체를 만들어내는 틀!
// 객체는 붕어빵  | 클래스 : 붕어빵 기계
let studentA = {
    name: "삐삐",
    grade: "A++",
    age: 30,
    study() {
        console.log("열심히 공부함");
    },
    introduce() {
        console.log("안녕하세요!");
    },
};

// let studentB = {
//     name: "럭키",
//     grade: "B",
//     study() {
//         console.log("열심히 공부함");
//     },
//     introduce() {
//         console.log("안녕하세요!");
//     },
// };

// 클래스는 앞글자 대문자 표기법 파스칼을 사용
class Student {
    //필드 : 클래스가 만들어 낼 객체의 프로퍼티를 의미함, | 어떤 모양의 객체를 찍어낼지 필드에 정의 = 어떤 붕어빵을 찍을지 정의.
    name;
    grade;

    // 생성자 : 실제로 객체를 만드는 메서드 , constructor
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    // 메서드
    // 클래스안에서는 쉼표안해도된다.
    //ex)study(){...}, introduce(){...}
    study() {
        console.log("열심히 공부함");
    }
    introduce() {
        console.log(`안녕하세요! ${this.name}입니다.`);
    }
}

// 클래스를 이용해서 만든 객체를 인스턴스라고 부릅니다.
// 스튜던트 인스턴스
let studentB = new Student("럭키", "A+");
console.log(studentB);

studentB.study();
studentB.introduce();

// 상속을 이용해보기
// interface 확장
// extends ,
class StudentDeveloper extends Student {
    //필드
    name;
    grade;
    age;
    favoriteSkill;

    // 생성자
    constructor(name, grade, age, favoriteSkill) {
        super(name, grade, age); // 부모클래스 슈퍼클래스의 생성자가 선택이된다.
        this.favoriteSkill = favoriteSkill;
    }

    study() {
        console.log("열심히 공부함");
    }
    introduce() {
        console.log(`안녕하세요! ${this.name}입니다.`);
    }
    programing() {
        console.log(`${this.favoriteSkill}로 프로그래밍 함.`);
    }
}

const studentDeveloper = new StudentDeveloper("투투", "B", "20", "Javascript");
console.log(studentDeveloper);

//프로토타입 연습
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(this.name + " makes a noise.");
};

function Dog(name) {
    Animal.call(this, name); // Animal 생성자 함수 호출
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function () {
    console.log(this.name + " barks.");
};
