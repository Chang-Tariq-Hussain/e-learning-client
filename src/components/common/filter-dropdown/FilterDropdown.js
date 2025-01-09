import React, {useRef, useState} from "react"
import Dropdown from 'react-bootstrap/Dropdown';
import {FilterDropdownDownIcon, FilterDropdownIcon} from "../../../../assets/icons/defaultIcons";
import "./filter-dropdown.scss"
import FilterSelect from "./filter-select/FilterSelect";
import {GoArrowLeft} from "react-icons/go"
import DateSelect from "./date-select/DateSelect";
import {useUser} from "../../../providers/UserContext";

export default function FilterDropdown(options) {
    const [selectedComponent, setSelectedComponent] = useState(null);
    const dropdownRef = useRef(null);
    const [isDatePickerOpen, setDatePickerOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const {resetFilters} = useUser()

    const listItems = [
        { label: 'Artist', component: <FilterSelect/> },
        { label: 'Venue', component: <FilterSelect/> },
        { label: 'Venue Manager', component: <FilterSelect/> },
        { label: 'Date', component: <DateSelect show={isDatePickerOpen} close={setDatePickerOpen} /> },
    ];
    const handleListItemClick = (component) => {
        setSelectedComponent(component);
    };
    const handleBackClick = () => {
        setSelectedComponent(null); // Reset the selected component to null
        setDatePickerOpen(false)
    };
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
        options.setDatePickerOpen(false)
    };

    return(
        <div className={'filter-dropdown'}>
            <Dropdown show={showDropdown}
                      onToggle={(isOpen, event, metadata) => {
                          if (options.isDatePickerOpen) {
                              // Prevent closing the dropdown when the date picker is open
                              return;
                          }
                          setShowDropdown(isOpen);
                      }}
            >
                <Dropdown.Toggle variant="filter" id="dropdown-basic">
                    <FilterDropdownIcon/> <span className={'filter-text'}>Filter </span> <span className={'filter-down-icon'}><FilterDropdownDownIcon/></span>
                </Dropdown.Toggle>

                <Dropdown.Menu className={showDropdown ? 'show-animation' : 'hide-animation'}>
                    <div className={'filter-dropdown-header'}>
                        <div>
                            <h4>Filter by</h4>
                        </div>
                        <div className={'drop-actions'}>
                            <button className={'btn btn-outline btn-text'} onClick={resetFilters}>Reset</button>
                            <button className={'btn btn-outline btn-small'} onClick={toggleDropdown}>Apply</button>
                        </div>
                    </div>
                    {
                        selectedComponent && (
                            <div className={'return'}>
                                <p><span onClick={handleBackClick}> <GoArrowLeft/> </span> {selectedComponent.label}</p>
                            </div>
                        )
                    }
                    <div className={'filter-dropdown-body'}>
                        {selectedComponent ? (
                            // Render the selected component
                            <div>
                                {selectedComponent.component}
                            </div>

                        ) : (
                            // Render the list of items if no component is selected
                            <div className={'filter-dropdown-list'}>
                                <ul>
                                    {options.directSelect &&
                                    options.directSelect
                                    }
                                </ul>
                                <ul>
                                    {
                                        options.filterData ?
                                            <div>
                                                {options.filterData.map((item, index) => (
                                                    <li key={index} onClick={() => handleListItemClick(item)}>
                                                        {item.label}
                                                        <span><FilterDropdownDownIcon/></span>
                                                    </li>
                                                ))}
                                            </div>
                                            :
                                            <ul>
                                                {listItems.map((item, index) => (
                                                    <li key={index} onClick={() => handleListItemClick(item)}>
                                                        {item.label}
                                                        <span><FilterDropdownDownIcon/></span>
                                                    </li>
                                                ))}
                                            </ul>
                                    }

                                </ul>
                            </div>
                        )}
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}