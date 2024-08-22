// Pick<T,K>
// 뽑다,고르다
// 객체 타입으로부터 특정 프로퍼티만 골라내는 타입

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL: string;
}

type Pick<T, K extends keyof T> = {
    // K extends :  "title" | "tags" | "content" | "thumbnailURL"
    [key in K]: T[key];
};

const regacyPost: Pick<Post, "title" | "content"> = {
    title: "옛날글",
    content: "옛날 컨텐츠",
};

// Omit
// 생략하다,빼다, 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T: Post
// K : title
// Pick<Exclude<keyof Post, "title">>
// Pick<Exclude<"title" | "content" | "tags" | "thumbnailURL">,"title">
// Pick <Post, "content" | "tags" | "thumbnailURL">

const noTitlePost: Omit<Post, "content"> = {
    title: "",
    tags: [],
    thumbnailURL: "",
};

// Pick
const noTitlePost2: Pick<Post, "title" | "tags" | "thumbnailURL"> = {
    title: "",
    tags: [],
    thumbnailURL: "",
};

// Record<T,K>

type thumbnailLagacy = {
    large: { url: string };
    midium: { url: string };
    small: { url: string };
};

type thumbnail = Record<"large" | "midium" | "small", { url: string }>;
