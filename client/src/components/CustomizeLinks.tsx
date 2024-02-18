import { FC, useState } from "react";

import Links from "../assets/icon-links-header.svg?react";
import DragAndDrop from "../assets/icon-drag-and-drop.svg?react";
import Button from "../elements/Button";
import InputField from "./auth/InputField";
import Dropdown from "../elements/Dropdown";

import { CustomLink, DropdownOption } from "../types/types";
import dropdownOptions from "../helpers/dropdownFields";

interface CustomizeLinksProps {
  updateLink: (id: string, link: CustomLink) => void;
  removeLink: (id: string) => void;
  link: CustomLink;
  linkNumber: number;
}

const CustomizeLinks: FC<CustomizeLinksProps> = ({
  link,
  updateLink,
  removeLink,
  linkNumber,
}) => {
  const handlePlatformSelect = (selected: DropdownOption) => {
    updateLink(link.id, {
      ...link,
      platform: selected.name,
      link: selected.link,
    });
  };
  const [urlError, setUrlError] = useState<string>("");

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = event.target.value;
    const platformPrefix = dropdownOptions.find(
      (item) => item.name === link.platform
    )?.link;

    if (platformPrefix && !newUrl.startsWith(platformPrefix)) {
      setUrlError(`URL must start with "${platformPrefix}"`);
    } else {
      setUrlError("");
      updateLink(link.id, { ...link, link: newUrl });
    }
  };

  return (
    <div className="links" key={link.id}>
      <div className="links__header">
        <span className="row-container">
          <DragAndDrop />
          <h2>Link # {linkNumber} </h2>
        </span>
        <Button
          text="Remove"
          className="text-btn"
          type="button"
          Image={null}
          onClick={() => removeLink(link.id)}
        />
      </div>
      <span>
        <p>Platform</p>
        <Dropdown
          title={dropdownOptions[0]}
          items={dropdownOptions}
          selectedItem={
            dropdownOptions.find((option) => option.name === link.platform) ||
            dropdownOptions[0]
          }
          onSelect={handlePlatformSelect}
        />
      </span>

      <InputField
        label="Link"
        type="text"
        value={link.link}
        onChange={handleUrlChange}
        placeholder={"https://github.com/hellodajana"}
        name="link"
        error={urlError}
        image={<Links />}
      />
    </div>
  );
};

export default CustomizeLinks;
