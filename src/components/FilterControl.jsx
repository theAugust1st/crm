import React from 'react';
import './FilterControl.css';
import { TbSearch, TbFilter, TbArrowsSort, TbBookmark } from 'react-icons/tb';
import { IoChevronDown } from 'react-icons/io5';

function FilterControl() {
  return (
    <div className="filter-control">
      <div className="filter-left">
        <div className="search-container">
          <TbSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Search Particular" 
            className="search-input"
          />
        </div>

        <div className="filter-dropdown">
          <TbFilter className="filter-icon" />
          <span className="dropdown-text">Filter by assigned</span>
          <IoChevronDown className="dropdown-arrow" />
        </div>

        <div className="filter-dropdown">
          <div className="calendar-icon">📅</div>
          <span className="dropdown-text">Date</span>
          <IoChevronDown className="dropdown-arrow" />
        </div>

        <div className="filter-dropdown status-dropdown">
          <div className="status-indicator">✓</div>
          <span className="dropdown-text">Status</span>
          <IoChevronDown className="dropdown-arrow" />
        </div>
      </div>

      <div className="filter-right">
        <div className="filter-actions">
          <button className="action-btn">
            <TbFilter className="btn-icon" />
            Filter
          </button>
          
          <div className="bar"></div>
          
          <button className="action-btn">
            <TbArrowsSort className="btn-icon" />
            Sort
          </button>
          
          <div className="bar"></div>
          
          <button className="action-btn">
            <TbBookmark className="btn-icon" />
            Saved Filter
          </button>
        </div>

        <button className="clear-btn">
          Clear
        </button>
      </div>
    </div>
  );
}

export default FilterControl;