import { useState } from "react";
import Links from "../dashboard/Links";
import PhoneShape from "../dashboard/PhoneShape";

const Home = () => {
  const [showLinks, setShowLinks] = useState<boolean>(false);

  return (
    <main className="main-container">
      <div className="card card-1">
        <PhoneShape />
      </div>
      <div className="card card-links">
        <div className="card-2">
          <Links setShowLinks={setShowLinks} showLinks={showLinks} />
        </div>
      </div>
    </main>
  );
};

export default Home;
