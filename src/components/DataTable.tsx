import React from "react";

interface Fork {
  id: number;
  login: string;
  full_name: string;
  stargazers_count: number;
  owner: {
    login: string
  }
}


interface Props {
  forks: Fork[]
}
const DataTable: React.FC<Props> = ({ forks }) => {
  return (
    <div>
      <table className="repositories">
        <thead>
          <tr>
            <th>Repository Owner</th>
            <th>Number Of Stars</th>
            <th>Link To The Forked Repository</th>
          </tr>
        </thead>
        <tbody>
          {forks.map(fork => (
            <tr key={fork.id}>
              <td>{fork.owner.login}</td>
              <td>{fork.stargazers_count}</td>
              <td><a href={"https://github.com/" + fork.full_name} target="_blank">`https://github.com/${fork.full_name}` </a></td>
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