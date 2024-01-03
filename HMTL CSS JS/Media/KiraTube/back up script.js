const videoContainer1 = document.querySelector(".video-card-container1");
const videoContainer2 = document.querySelector(".video-card-container2");

const details = [
    {
        videoImg: "./assets/video-card-assets/v10.webp",
        channelLogo: "./assets/video-card-assets/L1.jpg",
        "videoTitle": "Tech Trends Unveiled",
        "channelName": "38k views : 2 months ago",
        "videoDescription": "Stay ahead with the latest technological breakthroughs and innovations."
    },
    {
        videoImg: "./assets/video-card-assets/v11.webp",
        channelLogo: "./assets/video-card-assets/L2.jpg",
        "videoTitle": "Epicurean Delights: Culinary Adventures",
        "channelName": "30k views : 4 months ago",
        "videoDescription": "Embark on a gastronomic journey with exquisite recipes and cooking tips."
    },
    {
        videoImg: "./assets/video-card-assets/v12.webp",
        channelLogo: "./assets/video-card-assets/L3.jpg",
        "videoTitle": "Green Thumb Chronicles: Gardening Wonders",
        "channelName": "45k views : 1 month ago",
        "videoDescription": "Explore the enchanting world of gardening and cultivate your own oasis at home."
    },
    {
        videoImg: "./assets/video-card-assets/v13.webp",
        channelLogo: "./assets/video-card-assets/L4.jpg",
        "videoTitle": "Smart Living: Connected Home Tech",
        "channelName": "55k views : 3 months ago",
        "videoDescription": "Transform your living space into a smart home with the latest IoT devices."
    },
    {
        videoImg: "./assets/video-card-assets/v14.webp",
        channelLogo: "./assets/video-card-assets/L5.jpg",
        "videoTitle": "Fashionista's Paradise: Wardrobe Upgrade",
        "channelName": "48k views : 2 months ago",
        "videoDescription": "Revamp your style with fashion hauls featuring the hottest trends and styling tips."
    },
    {
        videoImg: "./assets/video-card-assets/v15.webp",
        channelLogo: "./assets/video-card-assets/L6.jpg",
        "videoTitle": "Home Office Bliss: Productivity Boosters",
        "channelName": "36k views : 3 months ago",
        "videoDescription": "Create a productive and inspiring workspace with practical home office solutions."
    },
    {
        videoImg: "./assets/video-card-assets/v16.webp",
        channelLogo: "./assets/video-card-assets/L7.jpg",
        "videoTitle": "Holistic Wellness: Mind, Body & Soul",
        "channelName": "40k views : 1 month ago",
        "videoDescription": "Nurture your well-being with holistic approaches to health, mindfulness, and self-care."
    },
    {
        videoImg: "./assets/video-card-assets/v17.webp",
        channelLogo: "./assets/video-card-assets/L8.jpg",
        "videoTitle": "Artistry Unleashed: DIY Craft Projects",
        "channelName": "32k views : 4 months ago",
        "videoDescription": "Ignite your creative spark with exciting DIY craft projects and artistic endeavors."
    },
    {
        videoImg: "./assets/video-card-assets/v18.webp",
        channelLogo: "./assets/video-card-assets/L9.jpg",
        "videoTitle": "Literary Escapes: Bookshelf Wonders",
        "channelName": "50k views : 2 months ago",
        "videoDescription": "Dive into captivating narratives and literary adventures with book recommendations and reviews."
    },
    {
        videoImg: "./assets/video-card-assets/v19.webp",
        channelLogo: "./assets/video-card-assets/L10.jpg",
        "videoTitle": "Tech Talk: Software Solutions Demystified",
        "channelName": "28k views : 4 months ago",
        "videoDescription": "Navigate the world of software solutions with insights, reviews, and tech tips."
    },
    {
        videoImg: "./assets/video-card-assets/v20.webp",
        channelLogo: "./assets/video-card-assets/L14.jpg",
        "videoTitle": "Fashion Forward DIY: Upcycling Magic",
        "channelName": "47k views : 2 months ago",
        "videoDescription": "Transform your wardrobe with unique and sustainable fashion DIY projects."
    },
    {
        videoImg: "./assets/video-card-assets/v21.webp",
        channelLogo: "./assets/video-card-assets/L12.jpg",
        "videoTitle": "Holistic Wellness: Mind, Body & Soul",
        "channelName": "40k views : 1 month ago",
        "videoDescription": "Nurture your well-being with holistic approaches to health, mindfulness, and self-care."
    },
    {
        videoImg: "./assets/video-card-assets/v22.webp",
        channelLogo: "./assets/video-card-assets/L13.jpg",
        "videoTitle": "Literary Escapes: Bookshelf Wonders",
        "channelName": "50k views : 2 months ago",
        "videoDescription": "Dive into captivating narratives and literary adventures with book recommendations and reviews."
    },
    {
        videoImg: "./assets/video-card-assets/v23.webp",
        channelLogo: "./assets/video-card-assets/L14.jpg",
        "videoTitle": "Artistry Unleashed: DIY Craft Projects",
        "channelName": "32k views : 4 months ago",
        "videoDescription": "Ignite your creative spark with exciting DIY craft projects and artistic endeavors."
    },
    {
        videoImg: "./assets/video-card-assets/v24.webp",
        channelLogo: "./assets/video-card-assets/L4.jpg",
        "videoTitle": "Holistic Wellness: Mind, Body & Soul",
        "channelName": "40k views : 1 month ago",
        "videoDescription": "Nurture your well-being with holistic approaches to health, mindfulness, and self-care."
    },

];


details.map((detail) => {
    const div = document.createElement("div")
    div.classList.add("video-card")
    div.innerHTML = ` <div><img class="video" src=${detail.videoImg} alt="video"></div>
                    <div class="video-details">
                        <img class="channel-logo" src=${detail.channelLogo} alt="channel-logo">
                        <div class="video-info">
                            <p class="video-title">${detail.videoTitle}</p>
                            <p class="video-description">${detail.channelName}</p>
                            <p class="video-description">${detail.videoDescription}</p>
                        </div>
                        <img class="three-dot" src="./assets/three dots.svg" alt="threeDot">
                    </div>`;
    videoContainer1.appendChild(div);
});


details.map((detail) => {
    const div = document.createElement("div")
    div.classList.add("video-card")
    div.innerHTML = ` <div><img class="video" src=${detail.videoImg} alt="video"></div>
                    <div class="video-details">
                        <img class="channel-logo" src=${detail.channelLogo} alt="channel-logo">
                        <div class="video-info">
                            <p class="video-title">${detail.videoTitle}</p>
                            <p class="video-description">${detail.channelName}</p>
                            <p class="video-description">${detail.videoDescription}</p>
                        </div>
                        <img class="three-dot" src="./assets/three dots.svg" alt="threeDot">
                    </div>`;
    videoContainer2.appendChild(div);
})