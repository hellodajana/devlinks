import { useEffect, useState } from "react";
import Links from "../dashboard/Links";
import PhoneShape from "../dashboard/PhoneShape";
import { Link } from "../types/types";
import linkservice from "../services/linkservice";

const Home = () => {
  const [showLinks, setShowLinks] = useState<boolean>(false);
  const [savedLinks, setSavedLinks] = useState<Link[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const getLinks = async () => {
    setIsLoading(true);
    try {
      const response = await linkservice.getLink();
      setIsLoading(false);
      setSavedLinks(response.data);
      setIsError(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <main className="main-container">
      <div className="card card-1">
        <PhoneShape savedLinks={savedLinks} />
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
