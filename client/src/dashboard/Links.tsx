import { useState, ReactNode } from "react";
import Button from "../elements/Button";
import GettingStarted from "../components/GettingStarted";
import CustomizeLinks from "../components/CustomizeLinks";

const Links = () => {
  const [showLinks, setShowLinks] = useState<boolean>(false);
  const [linkComponents, setLinkComponents] = useState<ReactNode[]>([]);

  const handleCustomizeLink = () => {
    setShowLinks(true);
    setLinkComponents((prevComponents: ReactNode[]) => [
      ...prevComponents,
      <CustomizeLinks key={prevComponents.length} />,
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
        />
      </div>
      {!showLinks ? <GettingStarted /> : linkComponents}
    </>
  );
};

export default Links;
