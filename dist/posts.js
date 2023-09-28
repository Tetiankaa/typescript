const getPostsByUserId = (id) => fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`).then(r => r.json());
const start = async () => {
    const url = new URL(location.href);
    const userId = url.searchParams.get('userId');
    const posts = await getPostsByUserId(+userId);
    const postContainer = document.querySelector('#postContainer');
    posts.forEach(post => {
        const div = document.createElement('div');
        div.innerText = `${post.id} ${post.title}`;
        postContainer.appendChild(div);
    });
};
void start();
//# sourceMappingURL=posts.js.map