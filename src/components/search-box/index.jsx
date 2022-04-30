import "./index.css";

const SearchBox = ({className, placeholder, onChangeHandler}) => (
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
