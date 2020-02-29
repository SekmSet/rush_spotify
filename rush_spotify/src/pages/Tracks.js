import React, { PureComponent } from 'react';
import Track from '../components/track';

class Tracks extends PureComponent {

    state = {
        tracks: []
    };

    componentDidMount() {
        fetch('http://localhost:8081/tracks')
            .then(res => res.json())
            .then((data) => {
                this.setState({ tracks: data });
                console.log(data);
            })
            .catch(console.log)
    }

    render () {
        return (
            <Track tracks={this.state.tracks} />

        );
    }
}
export default Tracks;