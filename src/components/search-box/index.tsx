import { ChangeEvent } from "react";
import "./index.css";

interface ISearchBoxProps {
  className: string,
  placeholder?: string,
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}
const SearchBox = ({className, placeholder, onChangeHandler}: ISearchBoxProps) => (
  <div>
    <input
      type="search"
      className={`search-box ${className}`}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  </div>
);

export default SearchBox;

// export default class SearchBox extends Component {
//   render() {
//     return (
//       <div>
//         <input
//           type="search"
//           className={`search-box ${this.props.className}` }
//           placeholder={this.props.placeholder}
//           onChange={this.props.onChangeHandler}/>
//         </div>
//     )
//   }
// }
