import React, { Component } from 'react'
import Axios from "axios";
import DataTable from "./DataTable";
import Pagination from "./Pagination";

export default class Search extends Component {

    state = {
        searchValue: '',
        forks: [],
        errorMessage: '',
        emptyMessage: '',
        currentPage: 1,
        pageNum: 0
    }

    handleChange = (e: any) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    validateForm = () => {
        if (this.state.searchValue === '') {
            this.setState({ errorMessage: "This Field Can not be Empty" })
            return false
        }
        return true
    }

    SeachFunc = (e: any) => {
        e.preventDefault()
        if (this.validateForm()) {
            const text = this.state.searchValue.trim().split("/:")
            const owner: string = text[0]
            const repoName: string = text[1]
            const page = this.state.pageNum

            Axios.get(`https://api.github.com/repos/${owner}/${repoName}/forks?per_page=100&page=${page}`)
                .then(res => {
                    if (res.data.length === 0) {
                        this.setState({ emptyMessage: "There is No Forks For This Repository" })
                    }
                    this.setState({ forks: res.data })
                    console.log(res.data)
                })
        }
    }

    render() {
        if (this.state.forks.length === 0) {
            return (
                <div className="MainDiv">
                    <div className="form-group">
                        <form onSubmit={this.SeachFunc}>
                            <input type="text" name="searchValue" placeholder="Type 'owner /:repositoryName' Here" className="form-control" onChange={this.handleChange} />
                            <input type="text" name="pageNum" placeholder="Type number of pgae of the search results 'Max per page = 100' Here" className="form-control-small" onChange={this.handleChange} />
                            <button className="SearchButton" type="submit">
                                Search
                            </button>
                        </form>
                        {this.state.errorMessage ? <span className="errorMessage"> {this.state.errorMessage} </span> : null}
                    </div>
                    {this.state.emptyMessage ? <span className="emptyMessage"> {this.state.emptyMessage} </span> : null}
                </div>
            )
        }
        else {
            const ForksPerPage = 8;
            const indexOfLastFork = this.state.currentPage * ForksPerPage;
            const indexOfFirstFork = indexOfLastFork - ForksPerPage;
            const currentForks = this.state.forks.slice(indexOfFirstFork, indexOfLastFork);
            const paginate = (pageNumber: number) => {
                this.setState({ currentPage: pageNumber })
            };

            return (
                <div className="MainDiv">
                    <div className="form-group">
                        <form onSubmit={this.SeachFunc}>
                            <input type="text" name="searchValue" placeholder="Type 'owner /:repositoryName' Here" className="form-control" onChange={this.handleChange} />
                            <input type="text" name="pageNum" placeholder="Type number of pgae of the search results 'Max per page = 100' Here" className="form-control-small" onChange={this.handleChange} />
                            <button className="SearchButton" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                    <h2 style={{ textAlign: "center" }}>Number Of Forks: <strong>{this.state.forks.length}</strong></h2>
                    <DataTable forks={currentForks} WhichButton={"Add To Favourites"} />
                    <Pagination
                        ForksPerPage={ForksPerPage}
                        totalForks={this.state.forks.length}
                        paginate={paginate}
                    />
                </div>
            )
        }
    }
}
