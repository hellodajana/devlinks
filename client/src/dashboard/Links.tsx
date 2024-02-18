import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../elements/Button";
import CustomizeLinks from "../components/CustomizeLinks";
import GettingStarted from "../components/GettingStarted";
import { CustomLink } from "../types/types";
import dropdownOptions from "../helpers/dropdownFields";
import linkservice from "../services/linkservice";

interface LinksProps {
  showLinks: boolean;
  setShowLinks: (value: boolean) => void;
}

const Links: React.FC<LinksProps> = ({ showLinks, setShowLinks }) => {
  const [links, setLinks] = useState<CustomLink[]>([]);

  const addLink = () => {
    const newLink: CustomLink = {
      id: uuidv4(),
      platform: dropdownOptions[0].name,
      link: dropdownOptions[0].link,
    };
    setLinks([...links, newLink]);
    setShowLinks(true);
  };

  const updateLink = (id: string, updatedLink: CustomLink) => {
    setLinks(links.map((link) => (link.id === id ? updatedLink : link)));
  };

  const removeLink = (id: string) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  const handleSubmit = async () => {
    console.log("Clicked");
    const validLinks = links.filter((link) => {
      console;
      if (link.link.trim() === "") {
        return false;
      }

      const platformPrefix = dropdownOptions.find(
        (item) => item.name === link.platform
      )?.link;
      return platformPrefix && link.link.startsWith(platformPrefix);
    });

    if (validLinks.length === 0) {
      console.log("No valid links to submit.");
      return;
    }

    const promises = validLinks.map((link) => linkservice.createLink(link));

    try {
      console.log("Trying");
      const responses = await Promise.all(promises);
      console.log("All links submitted successfully", responses);
    } catch (error) {
      console.error("Error submitting links", error);
    }
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
          onClick={addLink}
          Image={null}
        />
      </div>
      {links.length === 0 ? (
        <GettingStarted />
      ) : (
        <div className="links-wrapper">
          {links.map((link, index) => {
            return (
              <CustomizeLinks
                linkNumber={index + 1}
                link={link}
                updateLink={updateLink}
                removeLink={removeLink}
              />
            );
          })}
        </div>
      )}
      {showLinks && (
        <div className="save-btn">
          <hr className="breakpoint" />
          <Button
            text="Save"
            className="primary"
            type="button"
            Image={null}
            onClick={handleSubmit}
          />
        </div>
      )}
    </>
  );
};

export default Links;
