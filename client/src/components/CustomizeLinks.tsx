import { FC, useState } from "react";
// import ArrowDown from "../assets/icon-chevron-down.svg?react";
import Links from "../assets/icon-links-header.svg?react";
import DragAndDrop from "../assets/icon-drag-and-drop.svg?react";
import Button from "../elements/Button";
import InputField from "./auth/InputField";
import Dropdown from "../elements/Dropdown";
import dropdownOne from "../helpers/dropdownFields";
import { DropdownOption } from "../types/types";

interface CustomizeLinksProps {
  key: number;
  linkNumber: number;
}

const CustomizeLinks: FC<CustomizeLinksProps> = ({ key, linkNumber }) => {
  const [selectedDropdownItem, setSelectedDropdownItem] =
    useState<DropdownOption | null>(null);

  const handleSelect = (item: DropdownOption) => {
    setSelectedDropdownItem(item);
  };
  return (
    <>
      <div className="links" key={key}>
        <div className="links__header">
          <span className="column-container">
            <DragAndDrop />
            <h2>Link # {linkNumber}</h2>
          </span>
          <Button
            text="Remove"
            className="text-btn"
            type="button"
            Image={null}
          />
        </div>
        <span>
          <p>Platform</p>
          <Dropdown
            title={dropdownOne[0]}
            items={dropdownOne}
            selectedItem={selectedDropdownItem}
            onSelect={handleSelect}
          />
        </span>

        <InputField
          label="Link"
          type="text"
          value={""}
          onChange={() => console.log("Hello")}
          placeholder="https://github.com/hellodajana"
          name="password"
          error={""}
          image={<Links />}
        />
      </div>
    </>
  );
};

export default CustomizeLinks;
