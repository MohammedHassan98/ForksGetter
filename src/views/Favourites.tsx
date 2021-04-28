import React, { Component } from 'react'
import firebase from "../util/firebase";
import DataTable from "../components/DataTable";
import Pagination from "../components/Pagination";

export default class Favourites extends Component {
    state = {
        favouriteForks: [],
        currentPage:1
    }

    getForksFromFirebase = () => {
        const forkRef = firebase.database().ref("FavouriteForks")
        forkRef.on("value", (snapshot) => {
            let temp = []
            let fetchedForks = snapshot.val()
            for (let id in fetchedForks) {
                temp.push(fetchedForks[id])
            }
            this.setState({ favouriteForks: temp })
        })

    }
    componentDidMount() {
        this.getForksFromFirebase()
    }

    render() {

        const ForksPerPage = 8;
        const indexOfLastFork = this.state.currentPage * ForksPerPage;
        const indexOfFirstFork = indexOfLastFork - ForksPerPage;
        const currentForks = this.state.favouriteForks.slice(indexOfFirstFork, indexOfLastFork);
        const paginate = (pageNumber: number) => {
            this.setState({currentPage: pageNumber})
        };

        return (
            <div className="MainDiv">
                <h1>Favourite List</h1>
                <DataTable forks={currentForks} WhichButton={"Delete"}/>
                <Pagination
                        ForksPerPage={ForksPerPage}
                        totalForks={this.state.favouriteForks.length}
                        paginate={paginate}
                    />
            </div>
        )
    }
}
