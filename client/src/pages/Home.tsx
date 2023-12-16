import Links from "../dashboard/Links";
import PhoneShape from "../dashboard/PhoneShape";
import Button from "../elements/Button";

const Home = () => {
  return (
    <main className="main-container">
      <div className="card card-1">
        <PhoneShape />
      </div>
      <div className="card card-2">
        <Links />
      </div>
      <div className="card card-3">
        <Button text="Save" className="secondary" type="button" />
      </div>
    </main>
  );
};

export default Home;
