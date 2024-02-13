import { FC } from "react";
// import ArrowDown from "../assets/icon-chevron-down.svg?react";
// import Links from "../assets/icon-links-header.svg?react";
import DragAndDrop from "../assets/icon-drag-and-drop.svg?react";

interface CustomizeLinksProps {
  key: number;
  linkNumber: number;
}

const CustomizeLinks: FC<CustomizeLinksProps> = ({ key, linkNumber }) => {
  console.log(linkNumber);
  return (
    <div className="links" key={key}>
      <div className="links__header">
        <span className="column-container">
          <DragAndDrop />
          <h2>Link # {linkNumber}</h2>
        </span>
        Remove
      </div>
    </div>
  );
};

export default CustomizeLinks;
