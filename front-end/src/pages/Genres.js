import React, { PureComponent } from 'react';
import Genre from '../components/genre';

class Genres extends PureComponent{

    state = {
        genres: []
    };

    componentDidMount() {
        fetch('http://localhost:8081/genres')
        .then(res => res.json())
        .then((data) => {
            this.setState({ genres: data.data })
        })
        .catch(console.log)
    }

    render() {
        return (
          <Genre genres={this.state.genres} />
        )
    }
}

export default Genres;