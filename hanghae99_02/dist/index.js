"use strict";
function assignGrade(average) {
    if (average > 90) {
        return "A";
    }
    else if (average > 80) {
        return "B";
    }
    else if (average > 70) {
        return "C";
    }
    else if (average > 60) {
        return "D";
    }
    else {
        return "F";
    }
}
// 각과목점수 합산
function calculateAverage(student) {
    const sum = student.scores.korean + student.scores.math + student.scores.society + student.scores.science + student.scores.english;
    const average = sum / Object.keys(student.scores).length;
    return average;
}
function createStudent(name, age, korean, math, society, science, english) {
    return {
        name, // name : name 축약
        age,
        scores: {
            korean,
            math,
            society,
            science,
            english,
        },
    };
}
function printResult(student) {
    const average = calculateAverage(student); // 평균 계산
    const grade = assignGrade(average); // 평균 기준으로 학점 추출
    console.log(`${student.name} (${student.age}세) - 평균: ${average.toFixed(2)}, 학점: ${grade}`);
}
function main() {
    const spartan = createStudent("Spartan", 30, 95, 89, 76, 90, 97);
    printResult(spartan);
}
main();
