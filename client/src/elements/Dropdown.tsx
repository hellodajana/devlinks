import { useState, useRef, useEffect } from "react";
import { DropdownOption } from "../types/types";
import Link from "../assets/icon-link.svg";
import ArrowDown from "../assets/icon-chevron-down.svg";

interface DropdownProps {
  title: string;
  items: Array<DropdownOption>;
  selectedItem?: DropdownOption | null;
  onSelect: (item: DropdownOption) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  title,
  items,
  selectedItem,
  onSelect,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLDivElement).contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener("click", handleOutsideClick);
      document.addEventListener("touchstart", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [dropdownRef, showDropdown]);

  const handleDropdownClick = (event: React.MouseEvent) => {
    event.stopPropagation();

    setShowDropdown(!showDropdown);
  };

  return (
    <div
      className={`dropdown-container ${showDropdown ? "active" : ""}`}
      onClick={handleDropdownClick}
    >
      <button
        ref={dropdownRef}
        type="button"
        className={`dropdown-button ${showDropdown ? "button-active" : ""}`}
      >
        <img src={Link} alt="Link" />
        {selectedItem ? selectedItem.name : title}
        <img
          className={`dropdown-button__arrow ${
            showDropdown ? "arrow-active" : ""
          }`}
          src={ArrowDown}
          alt="Link"
        />
      </button>
      {showDropdown && (
        <ul className="dropdown-wrapper">
          {items.map((item, index) => (
            <>
              <li
                className="dropdown-wrapper__items"
                key={item.name}
                onClick={() => onSelect(item)}
              >
                <img src={item.image} alt={item.name} />
                {item.name}
              </li>
              {index !== items.length - 1 && <hr className="breakpoint" />}
            </>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
