const strings1 = ["abce", "abcd", "cdx"];

function sortData(n: number) {
    let arr = newArr(n);
    let modifiedArr = arr.sort().map((item) => {
        return item.slice(1); // 첫 글자를 제거
    });

    function newArr(n: number) {
        let arr = [];
        for (let item of strings1) {
            let checkTarget = item[n];
            arr.push(checkTarget + item);
        }

        return arr;
    }

    return modifiedArr;
}

sortData(2);

let strings2: string = "pPoooyY";
let lowerCase = strings2.toLocaleLowerCase();

console.log(">>", lowerCase);
