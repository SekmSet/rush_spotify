import React, { PureComponent } from 'react';

import Home from '../components/home';

class Homes extends PureComponent{

    state = {
        randomAlbums: []
    };

    componentDidMount() {
        fetch(`${process.env.REACT_APP_API_URL}/albums/random`)
        .then(res => res.json())
        .then((data) => {
            this.setState({ randomAlbums: data })
        })
        .catch(console.log)
    }

    render() {
        return (
          <Home randomAlbums={this.state.randomAlbums} />
        )
    }
}

export default Homes;