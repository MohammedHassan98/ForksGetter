import React, { Component } from 'react'
import firebase from "../util/firebase";
import Datatable from "../components/DataTable";

export default class Favourites extends Component {
    state = {}

    getForksFromFirebase = () => {
        const forkRef = firebase.database().ref("FavouriteForks")

    }
    componentDidMount() {

    }

    render() {
        return (
            <div className="MainDiv">

            </div>
        )
    }
}
