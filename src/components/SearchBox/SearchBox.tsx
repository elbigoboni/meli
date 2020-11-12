import React from "react";

interface SearchBox {
  onSearch: () => void;
  placeholder?: string;
}

const SearchBox: React.FC<SearchBox> = ({
  onSearch,
  placeholder = "Nunce dejes de buscar",
}) => {
  return (
    <form className="SearchBox" onSubmit={onSearch}>
      <input
        placeholder={placeholder}
        className="SearchBox--input"
        type="text"
      />
      <button className="SearchBox--button">
        <span>GO</span>
      </button>
    </form>
  );
};
export { SearchBox };
