import React, { PureComponent } from 'react';

import Genre from '../components/genre';

class Genres extends PureComponent{

    state = {
        genres: []
    };

    componentDidMount() {
        fetch(`${process.env.REACT_APP_API_URL}/genres`)
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