//접근제어자
// access modifier
// => public, private, proteced

class Employee {
    // 필드
    // public값이 기본으로 붙어있다,
    // protected 파생클래스에서만 접근가능
    // private 접근불가
    // private name: string; // 이 클래스 외부에서 접근불가 , 심지어 파생클래스에서도..
    // protected age: number; // public, private의 중간
    // public position: string;

    // 생성자에 접근 제어자 달면 오류생김
    // 생성자에 접근 제어자 달면 필드를 자동으로 만든다. , 중복정의 오류남
    constructor(private name: string, protected age: number, public position: string) {
        this.name = name;
        this.age = age;
        // this.position = position;
    }

    wokr() {
        console.log("일함");
        console.log(`${this.name} 일함`);
        this.age = 20;
    }
}

//  private name: string;인 경우아래 오류 발생
// Property 'name' is private and only accessible within class 'Employee'.ts(2341)
// private : 접근조차 불가 , readonly와 다릅니다.
// 파생글래스 내부에서는 접근이 되길 바란다면
const employee = new Employee("조혜연", 33, "개발자");

employee.name = "홍길동";
employee.age = 33;
employee.position = "디자이너";

// 객체라 변경가능
