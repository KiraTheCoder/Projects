import player from "./player.js"
const videoContainer = document.querySelector(".video-card-container");
const searchForm = document.querySelector(".search-form")
const searchInput = document.querySelector(".search-input")
const navList = document.querySelectorAll(".nav-flex")
const categoryTextList = document.querySelectorAll(".category-text")
const searchMobile = document.querySelector(".search-icon-for-mobile")
const searchContainer = document.querySelector(".search-container")
const searchMic = document.querySelector(".search-mic")
const content = document.querySelector(".content")


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const rec = new SpeechRecognition();
rec.lang = 'en-US'; rec.continuous = false;


searchMobile.addEventListener("click", () => {
    searchContainer.style.display = "block"
    searchMobile.style.display = "none"
})


// API Keys
const apiKey = 'AIzaSyC-g_jLvjkXmL-h2VN1f5HI9T2_LMv2vRA';
// const apiKey = 'AIzaSyApim72w3e5ekjscDfjENEArChyoZ-wI-M';
// const apiKey = "AIzaSyCHS3ONC4EqSHQD2QCzgXXxiwpachSIVjI";
// const apiKey = "AIzaSyANDrJD8Ixx2Luv2j0i5l6G5Yh-dCN9iL8";

// 
// get videos from API
let searchQuery, nextPageToken;

let scrollCount = 0, scrollable = 1200;

content.addEventListener('scroll', function (e) {
    if (content.scrollTop > scrollCount) {
        scrollCount = this.scrollTop;
        // console.log('Scrolled down. Scroll count: ', scrollCount);
    }
    if (scrollCount > scrollable) {
        scrollable += 600;
        console.log(scrollable)
        getVideoDetails(searchQuery)
    }
});


function getVideoDetails(query) {
    const maxResults = 10;
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video&q=${query}&maxResults=${maxResults}&pageToken=${nextPageToken || ''}`
    axios.get(apiUrl)
        .then(response => {
            const videos = response.data.items;
            nextPageToken = response.data.nextPageToken;
            console.log("Next ppppppppppp : " + nextPageToken)
            if (videos.length > 0) {
                const videosList = videos.map(item => {
                    return {
                        title: item.snippet.title,
                        videoId: item.id.videoId,
                        thumbnailUrl: item.snippet.thumbnails.high.url,
                        channelName: item.snippet.channelTitle,
                        description: item.snippet.description,
                        channelId: item.snippet.channelId,
                        publishTime: item.snippet.publishTime,
                    };
                });

                function fetchChannelInfo(channelId, index) {
                    axios.get(`https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&part=statistics&id=${channelId}`)
                        .then(response => {
                            let subscribers = response.data.items[0].statistics.subscriberCount;
                            let views = response.data.items[0].statistics.viewCount;

                            if (subscribers >= 10000000000) {
                                subscribers = (subscribers / 10000000000).toFixed(2) + "B"
                            }
                            else if (subscribers >= 1000000) {
                                subscribers = (subscribers / 1000000).toFixed(2) + "M"
                            }
                            else if (subscribers >= 1000) {
                                subscribers = (subscribers / 1000).toFixed(2) + "K"
                            }

                            if (views >= 10000000000) {
                                views = (views / 10000000000).toFixed(2) + "B"
                            }
                            else if (views >= 1000000) {
                                views = (views / 1000000).toFixed(2) + "M"
                            }
                            else if (views >= 1000) {
                                views = (views / 1000).toFixed(2) + "K"
                            }


                            videosList[index].subscribers = subscribers
                            videosList[index].views = views
                        })
                        .catch(error => {
                            console.error('Error fetching channel info:', error);
                        });
                }


                const channelRequests = videosList.map((video, index) => {
                    const channelApiUrl = `https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&part=snippet&id=${video.channelId}`;
                    fetchChannelInfo(video.channelId, index)
                    return axios.get(channelApiUrl);
                });


                // Wait for all channel information requests to complete
                Promise.all(channelRequests)
                    .then(channelResponses => {
                        channelResponses.forEach((channelResponse, index) => {
                            const channelData = channelResponse.data.items[0];
                            videosList[index].channelLogoUrl = channelData ? channelData.snippet.thumbnails.high.url : '';

                        });

                        // Create video cards after all channel information is available
                        createVideoCards(videosList);
                    })
                    .catch(error => {
                        console.error('Error fetching channel logos:', error);
                        // Set default channel logos or handle the error
                        createVideoCards(videosList);
                    });
            }
        })
        .catch(error => {
            console.error('Error fetching videos:', error);
        });
}

//  search video

function searchYouTube(query) {
    videoContainer.innerHTML = ""
    searchQuery = query;
    nextPageToken = "";
    getVideoDetails(query)
}

function createVideoCards(videosList) {
    videosList.forEach(video => {
        const givenDateString = video.publishTime;
        const now = new Date();
        const givenDate = new Date(givenDateString);

        const diffInMinutes = Math.abs(now.getTime() - givenDate.getTime()) / (1000 * 60);

        const mostRelevantUnit = diffInMinutes < 60 ? "minute" :
            diffInMinutes < 60 * 24 ? "hour" :
                diffInMinutes < 60 * 24 * 30 ? "day" :
                    diffInMinutes < 60 * 24 * 365 ? "month" : "year";

        const valueInMostRelevantUnit = Math.floor(diffInMinutes / (mostRelevantUnit === "minute" ? 1 : mostRelevantUnit === "hour" ? 60 : mostRelevantUnit === "day" ? 60 * 24 : mostRelevantUnit === "month" ? 60 * 24 * 30 : 60 * 24 * 365));

        const resultString = `${valueInMostRelevantUnit} ${mostRelevantUnit}${valueInMostRelevantUnit !== 1 ? 's' : ''} ago`;


        const div = document.createElement("div");
        div.classList.add("video-card");
        div.setAttribute("id", video.videoId)
        div.innerHTML =
            `<div>
                    <img class="video" src=${video.thumbnailUrl} alt="video">
                </div>
                <div class="video-details">
                    <img class="channel-logo" src=${video.channelLogoUrl} alt="channel-logo">
                    <div class="video-info">
                    <p class="video-title">${video.title}</p>
                    <p class="video-description">${video.channelName}</p>
                    <p class="video-description">    
                    <span style="padding-right:0.4rem"> ${video.subscribers + " subscribers"}</span>
                    <span> ${video.views + " views"}</span>
                    <span> ${" . " + resultString + " ago"} </span>
                </p >
                    </div >
            <img class="three-dot" src="./assets/three dots.svg" alt="threeDot">
            </div>
        ` ;
        videoContainer.appendChild(div);
    });

    // For scroll top
    function scrollToTop(parentContainer) {
        // Use the scrollIntoView method with the behavior 'smooth'
        parentContainer.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    // Create video player and play video

    const videoCardElements = document.querySelectorAll('.video-card');

    const playerContainer = document.createElement("div");
    const videoPlayer = document.createElement("div");
    playerContainer.setAttribute("id", "player-container");

    videoPlayer.setAttribute("id", "player");
    videoPlayer.style.borderRadius = "0.7rem"


    videoCardElements.forEach(video => {
        video.addEventListener('click', (e) => {
            playerContainer.appendChild(videoPlayer)
            function addVideoDetails() {
                const PlayingVideoDetails = document.createElement("div");
                PlayingVideoDetails.setAttribute("id", "playing-video-details");


                PlayingVideoDetails.innerHTML =
                    `
                     <p class="video-title"> ${video.lastElementChild.children[1].firstElementChild.innerText}</p>
                    <div class="video-player-info">
                    <div>
                        <img class="channel-logo channel-logo-for-paying-video" src=${video.lastElementChild.firstElementChild.getAttribute("src")}
                            alt="channel-logo">
                        <p class="video-description video-description-for-paying-video">
                            <span> ${video.lastElementChild.children[1].children[1].innerText} </span>
                            <br/>
                            <span>${video.lastElementChild.children[1].children[2].children[0].innerText} </span>
                        </p>
                             <button>subscribe</button>
                    </div>
                    <div>
                            <button class="playing-video-btn">  <img class="playing-video-icon" src="./assets/thumbs-up.svg" alt="">  <span>like</span></button>
                            <button class="playing-video-btn">  <img class="playing-video-icon" src="./assets/thumbs-down.svg" alt="">  <span>dislike</span></button>
                            <button class="playing-video-btn">  <img class="playing-video-icon" src="./assets/share.svg" alt=""> <span>share</span></button>
                            <img class="paying-video-three-dot" src="./assets/three dots.svg" alt="threeDot">
                    </div>
                    </div> 
                    <div> 
                    <p class="video-description">
                            <span>${video.lastElementChild.children[1].children[2].children[1].innerText} </span>
                            <span>${video.lastElementChild.children[1].children[2].children[2].innerText} </span>
                        </p>
                    </div> 

                ` ;

                playerContainer.appendChild(PlayingVideoDetails)
            }
            // Invoked function to scroll top of parentDiv
            scrollToTop(videoContainer);


            if (videoContainer.firstElementChild.id !== "player-container") {
                videoContainer.prepend(playerContainer);
                player(video.id, videoPlayer)
                addVideoDetails()
                // console.log("Player initiated");
                scrollToTop()
            } else {
                player(video.id, videoPlayer)
                if (playerContainer.lastElementChild.id == "playing-video-details") {
                    playerContainer.lastElementChild.remove();
                    addVideoDetails();
                    scrollToTop()
                }
                // console.log("video change");
            }

        });
    });




    //  search
    searchForm.addEventListener("submit", e => {
        e.preventDefault();
        searchYouTube(searchInput.value);
    })


    // navbar list
    navList.forEach(val => {
        val.addEventListener("click", () => {
            navList.forEach((element) => {
                element.classList.remove('active-navbar');
            });

            val.classList.add("active-navbar");
            searchYouTube(val.lastElementChild.innerText);
        })
    })

    // category list

    categoryTextList.forEach(val => {
        val.addEventListener("click", () => {
            categoryTextList.forEach((element) => {
                element.classList.remove('active-category');
                // console.log(element.innerText)
            });
            // console.log(val)

            val.classList.add('active-category');
            searchYouTube(val.innerText);
        })
    })

    // Mic
    rec.onresult = function (e) {
        for (let i = e.resultIndex; i < e.results.length; i++) {
            const script = e.results[i][0].transcript.toLowerCase().trim();
            // console.log(script)
            searchInput.value = script
            searchYouTube(script);
        }
    };

    searchMic.addEventListener("click", () => {
        rec.start();

    })
}

searchYouTube("Namaste React")