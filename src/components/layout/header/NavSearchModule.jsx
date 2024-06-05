import { memo } from "react";
import { NavLink } from "react-router-dom";

const NavSearchModule = ({ data }) => {
  const searchItems = data?.map((el) => (
    <NavLink to={`/single/${el.id}`} key={el.id}>
      <div className="nav__search__card">
        <img src={el.thumbnail} width={40} alt={el.title} />
        <div className="search__result__right">
          <span>{el.title}</span>
          <p>{el.category}</p>
        </div>
      </div>
    </NavLink>
  ));

  return (
    <div className="nav__search-results">
      {data && data.length === 0 ? (
        <h3>No results found</h3>
      ) : (
        <>{searchItems}</>
      )}
    </div>
  );
};

export default memo(NavSearchModule);
