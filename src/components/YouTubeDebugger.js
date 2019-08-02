// Code YouTubeDebugger Component Here
import React from "react";

class YouTubeDebugger extends React.Component {
    constructor() {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    changeBit = () => {
        this.setState({
            settings: {
                ...this.state.settings, bitrate: 12
            }
        })
    }

    changeRes = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video, resolution: '720p'
                }
            }
        })
    }

    render() {
        return(
            <div>
                <button class="bitrate" onClick={this.changeBit}>{this.state.settings.bitrate}</button>
                <button class="resolution" onClick={this.changeRes}>{this.state.settings.resolution}</button>
            </div>
        );
    }
}

export default YouTubeDebugger;