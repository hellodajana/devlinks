import GettingStarted from "../components/GettingStarted";
import PhoneShape from "../components/PhoneShape";

const Home = () => {
  return (
    <main className="main-container">
      <div className="card">
        <PhoneShape />
      </div>
      <div className="card">
        <GettingStarted />
      </div>
    </main>
  );
};

export default Home;
