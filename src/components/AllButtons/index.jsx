import React, { useState } from "react";
import "./AllButtons.css";
const AllButtons = ({ events, setAllEvents, filterdata, setFilterdata }) => {
  console.log("sa", events);

  const [query, setQuery] = useState("");
  const handlesearch = (event) => {
    const getSearch = event.target.value;
    if (getSearch.length > 0) {
      const searchdata = events.filter((item) =>
        item.name.toLowerCase().includes(getSearch)
      );
      //  console.log(searchdata);
      setAllEvents(searchdata);
    } else {
      setFilterdata(filterdata);
    }
    setQuery(getSearch);
  };

  const handleAll = () => {
    setAllEvents(events);
  };
  const handleRegisters = () => {
    const registered = events.filter((item) => item.isRegistered === true);
    setAllEvents(registered);
  };

  const handleBookmarks = () => {
    const bookmarked = events.filter((item) => item.isBookmarked === true);
    setAllEvents(bookmarked);
  };

  const handleSeats = () => {
    const seats = events.filter((item) => item.areSeatsAvailable === true);
    setAllEvents(seats);
  };

  return (
    <div className="all--buttons-container" data-testid='all-btns'>
      <div className="left--buttons">
        <div className="button--content">
          <p>
            <i className="fa fa-filter"></i>
          </p>
          <p>
            Filter <i className="fa fa-caret-up" aria-hidden="true"></i>
          </p>
        </div>
        {/* <div className="dropdown">
        <div className="dropdown--content"> */}
          <div className="button--content">
            <input type="radio" name="content" onClick={handleAll} />
            <p>ALL</p>
          </div>
          <div className="button--content">
            <input type="radio" name="content" onClick={handleRegisters} />
            <p>REGISTERED</p>
          </div>
        {/* </div>
        </div> */}
        
      </div>
      <div className="right--buttons">
        <div className="button--content">
          <input
            type="text"
            className="search"
            placeholder="Search"
            value={query}
            onChange={handlesearch}
          />
          <p>
            <i className="fa fa-search" aria-hidden="true"></i>
          </p>
        </div>
        <div className="mini-content">
          <div className="button--content">
            <p>BOOKMARKED</p>
            <input type="radio" name="content" onClick={handleBookmarks} />
          </div>
          <div className="button--content">
            <p>SEATS AVAILABLE</p>
            <input type="radio" name="content" onClick={handleSeats} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllButtons;
