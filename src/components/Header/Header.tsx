import React from "react";
import { SearchBox } from "../SearchBox/SearchBox";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="SearchBox--container">
          <img
            className="logo"
            src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.10.4/mercadolibre/logo__small@2x.png"
            alt=""
          />
          <SearchBox onSearch={() => alert("olar")} />
        </div>
      </div>
    </header>
  );
}

export default Header;
