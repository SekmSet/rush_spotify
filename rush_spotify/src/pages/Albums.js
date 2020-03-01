import React, {PureComponent} from "react";
import Album from '../components/album.js';

class Albums extends PureComponent {

    state = {
        albums: []
    };

    componentDidMount() {
        fetch('http://localhost:8081/albums')
            .then(res => res.json())
            .then((data) => {
                this.setState({ albums: data });
                console.log(data);
            })
            .catch(console.log)
    }

    render() {
        return (
            <Album Albums={this.state.albums} />
        );
    }
}
export default Albums;