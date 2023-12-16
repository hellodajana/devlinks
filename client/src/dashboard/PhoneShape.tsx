import React from "react";

const PhoneShape: React.FC = () => {
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
              <div className="shape-content__items" />
              <div className="shape-content__items" />
              <div className="shape-content__items" />
              <div className="shape-content__items" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneShape;
