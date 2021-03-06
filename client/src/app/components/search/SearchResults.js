import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultsList";

const SearchResults = ({data}) => {

  // set states for filterText and filterData
  const [filterText, setFilterText] = useState('');
  const [filteredData, setFilteredData] = useState(data);

// Filter members, blogs and posts by name on mount, mounts every time data or filterText changes
useEffect(() => {
  let d = {...data};
  d.members = d.members.filter((m) => `${m.portfolio.firstName.toLowerCase()} ${m.portfolio.lastName.toLowerCase()}`.includes(filterText.toLowerCase())|| m.userName.toLowerCase().indexOf(filterText.toLowerCase()) > -1)
  d.blogs = d.blogs.filter((b) => b.name.toLowerCase().includes(filterText.toLowerCase()))
  d.posts = d.posts.filter((p) => p.title.toLowerCase().includes(filterText.toLowerCase()))
  setFilteredData(d)
}, [data , filterText]);

  // function to handle filter text changes
  const handleOnFilterTextChange = (v) => {
    setFilterText(v);
    console.log(filterText)
    console.log(filteredData);
  };

  return (
    <div className="search__list">
      <SearchBar filterText={filterText} onFilterTextChange={handleOnFilterTextChange}/>
      <SearchResultsList data={filteredData}/>
    </div>
  )
};

export default SearchResults;