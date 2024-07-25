// 서로소 유니온타입
// 교집합이 없는 타입들로만 만든 유니온 타입을 말함.
// string, number 두개의 집합을 서로소 관계에 있다고 함

type Admin = {
    name: string;
    kickCount: number;
    tag: "ADMIN";
};

type Member = {
    name: string;
    poing: number;
    tag: "MEMBER";
};

type Guest = {
    name: string;
    visitCount: number;
    tag: "GUEST";
};

type User = Admin | Member | Guest;

// Admin-> name님 kickCount명 강퇴했습니다.
// member-> name님 현재까지 point모였습니다.
// Guset => name님 현재까지 visitCount번 오셨습니다.
function login(user: User) {
    switch (user.tag) {
        case "ADMIN":
            {
                console.log(`${user.name}님 현재까지 ${user.kickCount} 명 강퇴했습니다.}`);
            }
            break;
        case "MEMBER":
            {
                console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.}`);
            }
            break;

        case "GUEST":
            {
                console.log(`${user.name}님 현재까지 ${user.visitCount} 번 방문하셨습니다.}`);
            }
            break;
    }

    // if ("kikiCount" in user) {
    //     console.log(`${user.name}님 현재까지 ${user.kickCount} 명 강퇴했습니다.}`);
    // }

    // if (user.tag === "ADMIN") {
    //     console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.}`);
    // }

    // if ("visitCount" in user) {
    //     console.log(`${user.name}님 현재까지 ${user.visitCount} 번 방문하셨습니다.}`);
    // }
}

// 비동기 작업의 결과를 처리하는 객체
type LoadingTask = {
    state: "LOADING";
};

type FaildTask = {
    state: "FAILD";
    error: {
        message: string;
    };
};

type SuccessTask = {
    state: "SUCCESS";
    response: {
        data: string;
    };
};

type AsyncTask = LoadingTask | FaildTask | SuccessTask;

function processResult(task: AsyncTask) {
    switch (task.state) {
        case "LOADING":
            {
                console.log("로딩중");
            }
            break;
        case "FAILD":
            {
                console.log(`에러발생 ${task.error?.message}`);
            }
            break;
        case "SUCCESS":
            {
                console.log(`성공 ${task.response?.data}`);
            }
            break;
    }

    console.log();
}

const loading: AsyncTask = {
    state: "LOADING",
};

const faild: AsyncTask = {
    state: "FAILD",
    error: {
        message: "오류발생안내",
    },
};

const success: AsyncTask = {
    state: "SUCCESS",
    response: {
        data: "데이터 ~~",
    },
};
