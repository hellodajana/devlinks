import React from "react";
import { Link } from "../types/types";
import Github from "../assets/icon-github.svg?react";
import Twitter from "../assets/icon-twitter.svg?react";
import Linkedin from "../assets/icon-linkedin.svg?react";
import Youtube from "../assets/icon-youtube.svg?react";
import RightArrow from "../assets/icon-arrow-right.svg?react";

interface PhoneShapeProps {
  savedLinks: Link[];
}

const platformIcons: { [key: string]: React.ReactNode } = {
  github: <Github />,
  twitter: <Twitter />,
  linkedin: <Linkedin />,
  youtube: <Youtube />,
};

const PhoneShape: React.FC<PhoneShapeProps> = ({ savedLinks }) => {
  console.log(savedLinks);
  return (
    <div className="outer-shape">
      <div className="inner-shape">
        <div className="shape-wrapper">
          <div className="shape-header">
            <div className="shape-header__pic" />
            <div className="shape-header__name" />
            <div className="shape-header__handle" />
          </div>
          <div className="shape-body">
            <div className="shape-content">
              {!savedLinks ? (
                <>
                  <div className="shape-content__items" />
                  <div className="shape-content__items" />
                  <div className="shape-content__items" />
                  <div className="shape-content__items" />
                </>
              ) : (
                savedLinks.map((link, index) => {
                  const Icon = platformIcons[link.link.platform.toLowerCase()];
                  return (
                    <div
                      key={index}
                      className={`shape-content__items saved_items  ${link.link.platform}`}
                    >
                      <div className="gap">
                        {Icon && Icon}
                        {link.link.platform}
                      </div>
                      <RightArrow />
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneShape;
