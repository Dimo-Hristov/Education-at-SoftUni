function attachEvents() {
    const loadPostsBtn = document.getElementById('btnLoadPosts');
    const viewPostBtn = document.getElementById('btnViewPost');
    const postsElement = document.getElementById('posts');
    const bodyElement = document.body;

    loadPostsBtn.addEventListener('click', loadPosts)
    viewPostBtn.addEventListener('click', viewPost)


    async function loadPosts() {
        fetch('http://localhost:3030/jsonstore/blog/posts')
            .then(res => res.json())
            .then(data => {
                postsElement.innerHTML = ''
                for (const row in data) {
                    const currentPost = document.createElement('option');
                    currentPost.value = row;
                    currentPost.textContent = data[row].title;
                    postsElement.appendChild(currentPost)
                }
            })
            .catch(e => {
                throw new Error(console.log(e))
            })
    }

    async function viewPost() {
        const selectedPostID = postsElement.options[postsElement.selectedIndex].value;

        fetch(`http://localhost:3030/jsonstore/blog/comments`)
            .then(res => res.json())
            .then(data => {

                let currentPostComments = Object.values(data).filter(x => x.postId == selectedPostID)

                fetch(`http://localhost:3030/jsonstore/blog/posts/${selectedPostID}`)
                    .then(res => res.json())
                    .then(post => {
                        const postTitle = document.getElementById('post-title')
                        const postBody = document.getElementById('post-body')
                        const postComments = document.getElementById('post-comments')
                        postComments.innerHTML = '';

                        postTitle.innerHTML = post.title
                        // const title = document.createElement('h1')
                        // title.textContent = post.title;
                        // title.id = 'post-title';
                        // bodyElement.appendChild(title)
                        postBody.innerHTML = post.body
                        // const text = document.createElement('p');
                        // text.id = 'post-body';
                        // text.textContent = post.body;
                        // bodyElement.appendChild(text)

                        // const commentsTitle = document.createElement('h2');
                        // commentsTitle.textContent = 'Comments';
                        // bodyElement.appendChild(commentsTitle)

                        // const commentsList = document.createElement('ul');
                        // commentsList.id = 'post-comments';

                        currentPostComments.forEach(x => {
                            const currentPost = document.createElement('li');
                            currentPost.id = x.id;
                            currentPost.textContent = x.text;

                            postComments.appendChild(currentPost)
                        })

                    })
                    .catch(e => {
                        throw new Error(console.log(e))
                    })
            })
            .catch(e => {
                throw new Error(console.log(e))
            })

    }

}

attachEvents();