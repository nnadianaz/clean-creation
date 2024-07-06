
    document.getElementById('see-more-button').addEventListener('click', function() {
        // Example new posts data (you can replace this with your actual data source)
        const newPosts = [
            {
                imgSrc: './assets/2.jpg',
                date: 'Jun 04, 2024',
                title: 'How to Make Healthy Lifestyle Changes for Lent'
            },
            {
                imgSrc: './assets/j33.PNG',
                date: 'Jun 05, 2024',
                title: '5 Top Food Trends for 2022'
            },
            {
                imgSrc: './assets/j3.jpg',
                date: 'Jun 05, 2024',
                title: 'Why Weight Loss New Years Resolutions Dont Stick: Companies are Against You'
            },
            // Add more posts as needed
 ];

        const postsContainer = document.getElementById('posts-container');

        newPosts.forEach(post => {
            const postCard = document.createElement('div');
            postCard.className = 'post-card rounded overflow-hidden shadow-lg w-full mx-auto';
            postCard.innerHTML = `
                <img class="w-full" src="${post.imgSrc}" alt="Post Image">
                <div class="px-6 py-4">
                    <span class="text-xs text-gray-400">${post.date}</span>
                    <p class="text-gray-700 text-xl">${post.title}</p>
                </div>
            `;
            postsContainer.appendChild(postCard);
        });
    });
