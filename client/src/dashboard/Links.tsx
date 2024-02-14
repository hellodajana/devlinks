import React, { useState, ReactNode, ReactElement, FC } from "react";
import Button from "../elements/Button";
import GettingStarted from "../components/GettingStarted";
import CustomizeLinks from "../components/CustomizeLinks";

let uniqueIdCounter = 0;

interface LinksProps {
  linkValue: string;
  setLinkValue: (value: string) => void;
  linkError: string;
}

const Links: FC<LinksProps> = ({ linkValue, setLinkValue, linkError }) => {
  const [showLinks, setShowLinks] = useState<boolean>(false);
  const [linkComponents, setLinkComponents] = useState<ReactNode[]>([]);

  const handleRemoveLink = (uniqueKeyToRemove: number) => {
    setLinkComponents((prevComponents) =>
      prevComponents.filter(
        (component): component is ReactElement =>
          React.isValidElement(component) &&
          component.props.uniqueKey !== uniqueKeyToRemove
      )
    );
  };

  const handleCustomizeLink = () => {
    const newKey = ++uniqueIdCounter;
    setShowLinks(true);
    setLinkComponents((prevComponents: ReactNode[]) => [
      ...prevComponents,
      <CustomizeLinks
        uniqueKey={newKey}
        linkNumber={prevComponents.length + 1}
        onRemove={handleRemoveLink}
        linkValue={linkValue}
        setLinkValue={setLinkValue}
        linkError={linkError}
      />,
    ]);
  };

  return (
    <>
      <div className="customize-links">
        <div className="text-wrapper">
          <h1>Customize your links</h1>
          <p>
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
        </div>
        <Button
          text="+ Add new link"
          className="secondary"
          type="button"
          onClick={handleCustomizeLink}
          Image={null}
        />
      </div>
      <div className="links-wrapper">
        {!showLinks ? <GettingStarted /> : linkComponents}
      </div>
    </>
  );
};

export default Links;
