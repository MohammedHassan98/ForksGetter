import React from "react";
import firebase from "../util/firebase";

interface Fork {
  id: number;
  login: string;
  full_name: string;
  stargazers_count: number;
  owner: {
    login: string
  };
}


interface Props {
  forks: Fork[],
  WhichButton: string
}

const DataTable: React.FC<Props> = ({ forks, WhichButton }) => {
  return (
    <div>
      <table className="repositories">
        <thead>
          <tr>
            <th>Repository Owner</th>
            <th>Repository's Full Name</th>
            <th>Number Of Stars</th>
            <th>Link To The Forked Repository</th>
            {WhichButton === "Add To Favourites" ? <th>{WhichButton}</th>: null}
          </tr>
        </thead>
        <tbody>
          {forks.map(fork => (
            <tr key={fork.id}>
              <td>{fork.owner.login}</td>
              <td>{fork.full_name}</td>
              <td>{fork.stargazers_count}</td>
              <td>
                <a href={"https://github.com/" + fork.full_name} target="_blank">{"https://github.com/" + fork.full_name}</a>
              </td>

              {/* Add Fork To Favourite List In Firebase Real Time Database */}
              {WhichButton === "Add To Favourites" ?
                <td>
                  <button className="SearchButton addButton" onClick={function AddToFav() {
                    const AddedFork = {
                      id: fork.id,
                      owner: {
                        login: fork.owner.login
                      },
                      stargazers_count: fork.stargazers_count,
                      link: `https://github.com/${fork.full_name}`
                    }
                    const forkRef = firebase.database().ref("FavouriteForks")
                    forkRef.push(AddedFork)
                    alert("This Repo has been added successfully to favourite list")
                  }}>{WhichButton}
                  </button>
                </td> : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable