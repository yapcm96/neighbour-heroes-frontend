import Dropdown from "../Dropdown/Dropdown";
import style from "./dropdowns.module.scss";
import { useState } from "react";
import Button from "../Button/Button";

const Dropdowns = ({ filterChoiceFetch, clearFilterFetch }) => {
  const [openIndex, setOpenIndex] = useState();
  // when location filter changes call back end with new filter:
  const [locationFilter, setLocationFilter] = useState("");
  const [taskTypeFilter, setTaskTypeFilter] = useState("");
  const [sortByValue, setSortByValue] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const openDropdown = (index) => {
    if (index === openIndex) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const filterSubmit = (e) => {
    e.preventDefault();
    filterChoiceFetch(locationFilter, taskTypeFilter, sortByValue, statusFilter);
  };

  const clearFilters = () => {
    clearFilterFetch();
  };

  return (
    <div>
      <div className={style.dropdowns}>
        <Dropdown
          options={["Order Created", "Duration", "Task Setter"]}
          label="Sort by"
          isOpen={openIndex === 0}
          onClick={() => openDropdown(0)}
          setOpenIndex={setOpenIndex}
          // dropdownType={'sortby'}
          onChange={setSortByValue}
        />
        <Dropdown
          options={[
            "Any",
            "London",
            "Liverpool",
            "Manchester",
            "Edinburgh",
            "Cardiff",
          ]}
          label="Location"
          isOpen={openIndex === 1}
          setOpenIndex={setOpenIndex}
          onClick={() => openDropdown(1)}
          // this is built into all forms in HTML (and ours)
          onChange={setLocationFilter}
        />
        <Dropdown
          options={[
            "Any",
            "Shopping",
            "Gardening",
            "Emotional Support",
            "Household Tasks",
            "Other",
          ]}
          setOpenIndex={setOpenIndex}
          label="Type"
          isOpen={openIndex === 2}
          onClick={() => openDropdown(2)}
          onChange={setTaskTypeFilter}
        />
      
      <Dropdown
          options={[
            "Any",
            "Not",
            "Assigned"
          ]}
          setOpenIndex={setOpenIndex}
          label="Assign"
          isOpen={openIndex === 3}
          onClick={() => openDropdown(3)}
          onChange={setStatusFilter}
        />
      </div>
      <div className={style.filterButtons}>
        <Button
          className={style.filterTaskBtn}
          type="submit"
          onClick={filterSubmit}
        >
          Filter
        </Button>
        <Button className={style.filterTaskBtn} onClick={clearFilters}>
          No Filters
        </Button>
      </div>
    </div>
  );
};

export default Dropdowns;
