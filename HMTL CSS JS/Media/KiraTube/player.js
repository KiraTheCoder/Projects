
let videoPlayer;
let isYouTubeAPIReady = false;

function createPlayer(videoId, playerContainer) {
    // loader()
    // Check if the YouTube API is ready
    if (isYouTubeAPIReady) {
        initializePlayer();
    } else {
        // Load the YouTube IFrame Player API asynchronously
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // Set a callback for when the API is ready
        window.onYouTubeIframeAPIReady = function () {
            isYouTubeAPIReady = true;
            initializePlayer();
        };
    }

    // Function to initialize or recreate the player
    function initializePlayer() {
        // Destroy the existing videoPlayer if it exists
        if (videoPlayer) {
            videoPlayer.destroy();
            console.log("Player destroyed");
        }


        videoPlayer = new YT.Player(playerContainer, {
            height: "100%",
            width: "100%",
            videoId: videoId,
            playerVars: {
                'autoplay': 1,
                'controls': 1,
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });

        // Hide the player initially
        videoPlayer.getIframe().style.display = 'none';
    }

    // Callback function when the player is ready
    function onPlayerReady(event) {
        // Show the player once it's ready
        videoPlayer.getIframe().style.display = 'block';
        console.log('Player is ready');
    }

    // Callback function when the player state changes
    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.ENDED) {
            console.log('Video has ended');
        }
    }
    // unLoader()
}

export default createPlayer;
