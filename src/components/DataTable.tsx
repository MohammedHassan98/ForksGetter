import React from "react";

export default function DataTable() {
  return (
    <div>
      <table className="repositories">
        <tr>
          <th>Repository Name</th>
          <th>Repository Owner</th>
          <th>Number Of Stars</th>
          <th>Link To Fork</th>
          <th>Number Of Forks</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Some Link</td>
          <td>65</td>

        </tr>
        <tr>
          <td>Berglunds snabbköp</td>
          <td>Christina Berglund</td>
          <td>Sweden</td>
          <td>Some Link</td>
          <td>65</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
          <td>Some Link</td>
          <td>65</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
          <td>Some Link</td>
          <td>65</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
          <td>Some Link</td>
          <td>65</td>
        </tr>
        <tr>
          <td>Königlich Essen</td>
          <td>Philip Cramer</td>
          <td>Germany</td>
          <td>Some Link</td>
          <td>65</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
          <td>Some Link</td>
          <td>65</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
          <td>Some Link</td>
          <td>65</td>
        </tr>
        <tr>
          <td>North/South</td>
          <td>Simon Crowther</td>
          <td>UK</td>
          <td>Some Link</td>
          <td>65</td>
        </tr>
        <tr>
          <td>Paris spécialités</td>
          <td>Marie Bertrand</td>
          <td>France</td>
          <td>Some Link</td>
          <td>65</td>
        </tr>
      </table>
    </div>
  );
}
