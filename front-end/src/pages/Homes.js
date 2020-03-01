import React, { PureComponent } from 'react';
import Home from '../components/home';

class Homes extends PureComponent{

    state = {
        randomAlbums: []
    };

    componentDidMount() {
        fetch('http://localhost:8081/albums/random')
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