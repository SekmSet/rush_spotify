import React, {PureComponent} from "react";
import Album from '../components/album.js';
import Pagination from 'react-js-pagination';

class Albums extends PureComponent {

    state = {
        albums: [],
        current_page : 1,
        per_page : 50,
        total: 50
    };

    componentDidMount() {
       this.getApi(this.state.current_page)
    }

    handlePageChange(pageNumber){
        this.getApi(pageNumber);
    }

    getApi(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        fetch(`http://localhost:8081/albums?page=${pageNumber}`)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    albums: data.data,
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
                <Album albums={this.state.albums} />

                <Pagination
                    pageRangeDisplayed={10}
                    activePage={this.state.current_page}
                    itemsCountPerPage={this.state.per_page}
                    totalItemsCount={this.state.total}
                    onChange={this.handlePageChange.bind(this)}
                />

            </div>


        );
    }
}
export default Albums;