import { FC, useState } from "react";
import Links from "../assets/icon-links-header.svg?react";
import DragAndDrop from "../assets/icon-drag-and-drop.svg?react";
import Button from "../elements/Button";
import InputField from "./auth/InputField";
import Dropdown from "../elements/Dropdown";
import dropdownOne from "../helpers/dropdownFields";
import { DropdownOption } from "../types/types";

interface CustomizeLinksProps {
  uniqueKey: number;
  linkNumber: number;
  onRemove: (key: number) => void;
}

const CustomizeLinks: FC<CustomizeLinksProps> = ({
  uniqueKey,
  linkNumber,
  onRemove,
}) => {
  const [selectedDropdownItem, setSelectedDropdownItem] =
    useState<DropdownOption | null>(null);
  const [linkValue, setLinkValue] = useState("");

  const handleSelect = (item: DropdownOption) => {
    setSelectedDropdownItem(item);
    setLinkValue(item.link);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLinkValue(e.target.value);
  };

  return (
    <>
      <div className="links" key={uniqueKey}>
        <div className="links__header">
          <span className="row-container">
            <DragAndDrop />
            <h2>Link # {linkNumber}</h2>
          </span>
          <Button
            text="Remove"
            className="text-btn"
            type="button"
            Image={null}
            onClick={() => onRemove(uniqueKey)}
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
          value={linkValue}
          onChange={handleChange}
          placeholder={
            selectedDropdownItem
              ? selectedDropdownItem.link
              : "https://github.com/hellodajana"
          }
          name="password"
          error={""}
          image={<Links />}
        />
      </div>
    </>
  );
};

export default CustomizeLinks;
