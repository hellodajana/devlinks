import Links from "../dashboard/Links";
import PhoneShape from "../dashboard/PhoneShape";
import Button from "../elements/Button";

const Home = () => {
  return (
    <main className="main-container">
      <div className="card card-1">
        <PhoneShape />
      </div>
      <div className="card card-links">
        <div className="card-2">
          <Links />
        </div>
        <hr className="breakpoint" />
        <div className="card-3">
          <Button text="Save" className="primary" type="button" Image={null} />
        </div>
      </div>
    </main>
  );
};

export default Home;
