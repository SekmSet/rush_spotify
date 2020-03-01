import React, { PureComponent } from 'react';
import Artist from '../components/artist';

class Artists extends PureComponent {

    state = {
        artists: []
    };

    componentDidMount() {
        fetch('http://localhost:8081/artists')
            .then(res => res.json())
            .then((data) => {
                this.setState({ artists: data.data });
                console.log(data);
            })
            .catch(console.log)
    }

    render () {
        return (
            <Artist artists={this.state.artists} />

        );
    }
}
export default Artists;