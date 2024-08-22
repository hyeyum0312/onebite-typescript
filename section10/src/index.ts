// Partial<T>
// 부분적인, 일부분의

import { title } from "process";

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL: string;
}

type Partial<T> = {
    [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
    title: "제목",
    content: "초안",
};

// required
// 모든 프로퍼티를 필수프로퍼티로 바꿔주는 타입
type Required<T> = {
    [key in keyof T]-?: T[key];
};
const withThumbnailPost: Required<Post> = {
    title: "한입타스후기",
    tags: ["ts"],
    content: "",
    thumbnailURL: "HTTPS://...",
};

//Readonly
type Readonly<T> = {
    readonly [key in keyof T]: T[key];
};
const readonlyPost: Readonly<Post> = {
    title: "보호된 게시글 입니다.",
    tags: [],
    content: "",
    thumbnailURL: "HTTPS://...",
};

// readonlyPost.content = "";
