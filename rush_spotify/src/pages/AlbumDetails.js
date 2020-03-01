import React, { PureComponent } from 'react';
import {
    withRouter
} from 'react-router-dom'

import AlbumDetail from '../components/albumDetail';

class AlbumDetails extends PureComponent {

    state = {
        album: []
    };

    componentDidMount() {
        const id = this.props.match.params.id;

        fetch('http://localhost:8081/albums?id='+ id)
            .then(res => res.json())
            .then((data) => {
                this.setState({ album: data });
                console.log(data);
            })
            .catch(console.log)
    }

    render () {
        return (
            <AlbumDetail album={this.state.album} />

        );
    }
}
export default withRouter(AlbumDetails);