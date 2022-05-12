import "./index.css";
import { IMonster } from "../../App";

interface ICardProps {
  monster: IMonster;
}

const Card = ({monster}:ICardProps) => {
  const { id, name, email } = monster;
  const getRoboImage = (id: string) => {
    return `https://robohash.org/${id}?set=set2&size=180x180`;
  };

  return (
    <div className="card-container">
      <img src={getRoboImage(id)} alt={name} className="card-container__img"/>
      <h1>{name}</h1>
      <h1>{email}</h1>
    </div>
  );
};


export default Card;

// export default class Card extends Component {
//   render() {
//     const {id, name, email} = this.props.monster
//     const getRoboImage = (monsterId) => {
//       return `https://robohash.org/${monsterId}?set=set2&size=180x180`
//     }
//     return (
//       <div className="card-container">
//           <img src={getRoboImage(id)} alt={name} className="card-container__img"/>
//           <h1>{name}</h1>
//           <h1>{email}</h1>
//         </div>
//     );
//   }
// }
