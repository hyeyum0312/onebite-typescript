function unknownExam() {
    let a: unknown = 1;
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar: unknown;

    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;
}

// never타입은 모든 타입의 서브타입이므로 어떤 타입의 변수에 값을넣을 수 있음.
// upcasting
function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    let num: number = neverFunc();
    let srt: string = neverFunc();
    let bool: boolean = neverFunc();

    // let never1: never = 10;
    // let never2: never = "string";
    // let never3: never = true;

    // let never1: never = 10; // 이렇겐 불가. downcasting
}

// void타입
function voidExam() {
    function voidFunc(): void {
        console.log("hi");
        return undefined;
    }
}

let voidVar: void = undefined;

// any타입
//any타입에 한해서는 down casting이 가능.
function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar;
    undefinedVar = anyVar;
    // neverVar = anyVar // never타입은 공집합이므로 어떤타입도 다운캐스팅 불가함.
}
