import React, { PureComponent } from 'react';
import {
    withRouter
} from 'react-router-dom'

import ArtistDetail from '../components/artistDetail';

class ArtistDetails extends PureComponent {

    state = {
        artist: []
    };

    componentDidMount() {
        const id = this.props.match.params.id;

        fetch(`${process.env.REACT_APP_API_URL}/artists?id=${id}`)
            .then(res => res.json())
            .then((data) => {
                this.setState({ artist: data });
                console.log(data);
            })
            .catch(console.log)
    }

    render () {
        return (
            <ArtistDetail artist={this.state.artist} />

        );
    }
}
export default withRouter(ArtistDetails);