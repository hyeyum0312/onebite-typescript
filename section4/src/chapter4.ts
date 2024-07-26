// 사용자 정의타입 카드

type Dog1 = {
    name: string;
    isBark: boolean;
};

type Cat = {
    name: string;
    isScratch: boolean;
};

type Animal1 = Dog1 | Cat;

function isDog(animal: Animal1): animal is Dog1 {
    return (animal as Dog1).isBark !== undefined;
}

function isCat(animal: Cat): animal is Cat {
    return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal1) {
    if (isDog(animal)) {
        // 강아지
    } else if ("isSCratch" in animal) {
        // 고양이
    }
}
