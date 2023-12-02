// Dummy data for blog posts
const blogPosts = [
    { title: 'First Post', content: 'This is my first blog post.' },
    { title: 'Second Post', content: 'Another post about something interesting.' },
    // Add more posts as needed
];

// Function to display a list of blog posts on the homepage
function displayBlogPosts() {
    const homeSection = document.getElementById('home');
    homeSection.innerHTML = '';

    blogPosts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p><button onclick="viewPost(${index})">Read More</button>`;
        homeSection.appendChild(postElement);
    });
}

// Function to display the form for writing a new blog post
function showWritePostForm() {
    document.getElementById('write-post').classList.remove('hidden');
    document.getElementById('home').classList.add('hidden');
    document.getElementById('post').classList.add('hidden');
}

// Function to publish a new blog post
function publishPost() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (title && content) {
        blogPosts.push({ title, content });
        displayBlogPosts();
        document.getElementById('write-post').classList.add('hidden');
        document.getElementById('home').classList.remove('hidden');
    } else {
        alert('Please fill in both title and content.');
    }
}

// Function to view an individual blog post
function viewPost(index) {
    const postSection = document.getElementById('post');
    postSection.innerHTML = `<h2>${blogPosts[index].title}</h2><p>${blogPosts[index].content}</p>`;
    postSection.classList.remove('hidden');
    document.getElementById('home').classList.add('hidden');
    document.getElementById('write-post').classList.add('hidden');
}

// Display initial blog posts on page load
displayBlogPosts();
