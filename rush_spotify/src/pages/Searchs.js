import React, { PureComponent } from 'react';
import Search from '../components/search';
import Pagination from "react-js-pagination";

class Searchs extends PureComponent{

    state = {
        name: '',
        genre: '',
        album: '',
        artist: '',
        tracks: [],
        current_page : 1,
        per_page : 50,
        total: 50
    };

    componentDidMount() {

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeArtist = this.handleChangeArtist.bind(this);
        this.handleChangeGenre = this.handleChangeGenre.bind(this);
        this.handleChangeAlbum = this.handleChangeAlbum.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);

        this.getApi(this.state.current_page);
    }

    handlePageChange(pageNumber){
        this.getApi(pageNumber);
    }


    handleChangeName(event) {
        console.log(event.target.value);
        this.setState({name: event.target.value});
    }

    handleChangeAlbum(event) {
        this.setState({album: event.target.value});
    }

    handleChangeArtist(event) {
        this.setState({artist: event.target.value});
    }

    handleChangeGenre(event) {
        this.setState({genre: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.getApi(this.state.current_page);
    }

    getApi(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        fetch(`http://localhost:8081/search?name=${this.state.name}&genre=${this.state.genre}&album=${this.state.album}&artist=${this.state.artist}&page=${pageNumber}`)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    tracks: data.data,
                    current_page: data.current_page,
                    per_page: data.per_page,
                    total: data.total
                });
                console.log(data);
            })
            .catch(console.log)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <label>
                        Recherche par name
                        <input type="text"  value={this.state.name} onChange={this.handleChangeName} />
                    </label>

                    <label>
                        Recherche par album
                        <input type="text"  value={this.state.album} onChange={this.handleChangeAlbum}/>
                    </label>

                    <label>
                        Recherche par genre
                        <input type="text" value={this.state.genre} onChange={this.handleChangeGenre}/>
                    </label>

                    <label>
                        Recherche par artiste
                        <input type="text" value={this.state.artist} onChange={this.handleChangeArtist}/>
                    </label>

                    <input type="submit" value="Envoyer" />
                </form>
                <Search search={this.state.tracks} />

                <Pagination
                    pageRangeDisplayed={10}
                    activePage={this.state.current_page}
                    itemsCountPerPage={this.state.per_page}
                    totalItemsCount={this.state.total}
                    onChange={this.handlePageChange.bind(this)}
                />
            </div>
        )
    }
}

export default Searchs;