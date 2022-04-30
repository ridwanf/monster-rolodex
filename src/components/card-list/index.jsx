import Card from "../card";
import './index.css'

import React from 'react';
const CardList = (props) => {
  const {monsters} = props
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return (
          <Card monster={monster} key={monster.id}/>
        )})}
    </div>  
  );
}

// class CardList extends Component {

//   render() {
//   const {monsters} = this.props
  
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return (
//             <Card monster={monster} key={monster.id}/>
//         )})}
//       </div>  
//     );
//   }
// }

export default CardList;
