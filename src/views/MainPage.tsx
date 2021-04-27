import React, { Component } from "react";
import Search from "../components/Search";;

export default class MainPage extends Component {
  render() {
    return (
      <div className="MainDiv">
        <div className="WelcomeSection">
          <h2>Welcome To Forks Getter Application </h2>
        </div>
        <div className="normalText">
          <p>
            {" "}
            You Can type Repository Name at the form " owner /:repositoryName "
            then click search and we will provide Repo's full name of the
            <br />
            repository, owner, number of stars, link to the fork repository.
          </p>
        </div>
        <div className="SearchArea">
          <Search />
        </div>
      </div>
    );
  }
}
