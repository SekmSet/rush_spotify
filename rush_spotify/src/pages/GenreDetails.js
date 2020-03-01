import React, { PureComponent } from 'react';
import {
    withRouter
} from 'react-router-dom'

import GenreDetail from '../components/genreDetail';

class GenreDetails extends PureComponent {

    state = {
        genre: []
    };

    componentDidMount() {
        const id = this.props.match.params.id;

        fetch('http://localhost:8081/genres?id='+ id)
            .then(res => res.json())
            .then((data) => {
                this.setState({ genre: data });
                console.log(data);
            })
            .catch(console.log)
    }

    render () {
        return (
            <GenreDetail genre={this.state.genre} />
        );
    }
}
export default withRouter(GenreDetails);