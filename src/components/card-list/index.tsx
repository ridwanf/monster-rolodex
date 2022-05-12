import Card from "../card";
import './index.css'
import { IMonster } from "../../App";

interface ICardListProps {
  monsters: IMonster[]
}
const CardList = ({monsters}: ICardListProps) => {
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
