import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div className="form-group">
               <form>
                   <input type="text" name="search" placeholder="Type Repo Name Here" className="form-control"/>
                   <button className="SearchButton" >
                       Search
                   </button>
               </form>
            </div>
        )
    }
}
