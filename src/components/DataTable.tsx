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
            <th>Number Of Stars</th>
            <th>Link To The Forked Repository</th>
            <th>Favourite Repo</th>
          </tr>
        </thead>
        <tbody>
          {forks.map(fork => (
            <tr key={fork.id}>
              <td>{fork.owner.login}</td>
              <td>{fork.stargazers_count}</td>
              <td>
                <a href={"https://github.com/" + fork.full_name} target="_blank">{"https://github.com/" + fork.full_name}</a>
              </td>
              {WhichButton === "Add To Favourites" ?
                <td><button id="Add" className="SearchButton addButton" onClick={function AddToFav() {
                  const AddedFork = {
                    id: fork.id,
                    owner: fork.owner.login,
                    stars: fork.stargazers_count,
                    link: `https://github.com/${fork.full_name}`
                  }

                  const forkRef = firebase.database().ref("FavouriteForks")
                  forkRef.push(AddedFork).then(res => {
                    return (
                      <div className="emptyMessage">
                        "Repo Added Successfully"
                      </div>
                    )
                  })

                }}>{WhichButton}</button></td> : null}
            </tr>
          ))}
        </tbody>

        {/* <tfoot>
          Here Lays Pagination
        </tfoot> */}
      </table>
    </div>
  );
}

export default DataTable