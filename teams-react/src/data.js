// Convert characters like ' to HTML entities using
// https://github.com/mathiasbynens/he#heencodetext-options
import { encode } from 'he';

const teamsurl = 'https://polar-ravine-70615.herokuapp.com/';

export default function Teams() {
  return fetch(teamsurl+'teams-raw')
    .then(response => response.json())
    .then(teams => {
        console.log(teams)
      teams.forEach(team => {
        bridge.nameEncoded = encode(bridge.name)
      })
      .catch(err => console.log(err));
      return teams;
    });
}


export default function Employees() {
    return fetch(teamsurl+'employees')
      .then(response => response.json())
      .then(employees => {
          console.log(teams)
        teams.forEach(team => {
            bridge.nameEncoded = encode(bridge.name)
        })
        .catch(err => console.log(err));
        return teams;
      });
  }