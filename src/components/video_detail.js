import React from 'react';

const VideoDetail = (props) => {
    const video = props.video;

    if (!video) {
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    const url = 'https://www.youtube.com/embed/' + videoId;

    return (

        // <div class="card text-white bg-danger mb-3" style="max-width: 20rem;">
        //     <div class="card-header">{video.snippet.title}</div>
        //     <div class="card-body">
        //         <h4 class="card-title">Danger card title</h4>
        //         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //     </div>
        // </div>

        <div className="video-detail col-md-8 card text-white mb-3 bg-danger video-card">
            <div class="card-header">{video.snippet.title}</div>
            <div className="embed-responsive embed-responsive-16by9 video-player">
                <iframe width="420" height="315" src={url} className="embed-responsive-item" frameBorder="0" allowFullScreen></iframe>
            </div>
            <p className="card-text">{video.snippet.description}</p>
            {/* <div className="details card-text">
                        <div className="card-text">{video.snippet.description}</div>
                    </div> */}
        </div>
    );

};

export default VideoDetail;