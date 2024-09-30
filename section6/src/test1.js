import { error } from "console";

const apiURL = "https://jsonplaceholder.typicode.com/posts";

// Promise 방식
function fetchPosts() {
    fetch(apiURL)
        .then((response) => response.json())
        .then((posts) => console.log(posts))
        .catch((error) => console.error(error));
}

async function fetchPosts2() {
    try {
        const response = await fetch(apiURL);
        const posts = await response.posts.json();
        console.log(posts);
    } catch (error) {
        console.log(error);
    }
}
