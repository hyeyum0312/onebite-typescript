// 타입스크립트 클래스
const employee = {
    name: "조혜연",
    age: 33,
    position: "developer",
    work() {
        console.log("일함");
    },
};

// 추론 불가
// Member 'position' implicitly has an 'any' type.
// noimplicitAny : false :굳이 true를 사용하지 않는게 좋다,
// initializer:  Property 'name' has no initializer and is not definitely assigned in the constructor.
// name?:string , 이런식으로 선택적 필드로 만들면 되는대 좋은 해결방식은 아님, 기본값을 넣는 방식은 age:number = 0;
// 초기값을 넣을 값이마땅히없다면 생성자를 만들어주면 됩니다.

class Employee {
    name: string;
    age: number;
    position: string;

    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    wokr() {
        console.log("일함");
    }
}

const employeeB = new Employee("조혜연", 33, "개발자");
console.log(employeeB);

const employeeC: Employee = {
    name: "조햬연",
    age: 33,
    position: "개발자",
    wokr() {
        console.log("일중");
    },
};

//타입스크립트의 클래스는 타입으로도 지정할 수 있음
// 타입스크립트는 구조적으로 타입을 결정하는 구조적 타입 시스템을 따릅니다.

// ExcutiveOfficer는 employee의 필드와 메서드를 모두 가지고 있습니다.
class ExcutiveOfficer extends Employee {
    officeNumber: number;

    // 생성자
    constructor(name: string, age: number, position: string, officeNumber: number) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
}
