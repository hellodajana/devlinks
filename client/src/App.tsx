import Dropdown from "./elements/Dropdown";
import dropdownOne from "./helpers/dropdownFields";

const App = () => {
  return (
    <div>
      <Dropdown title="Dropdown" items={dropdownOne} onSelect={() => {}} />
    </div>
  );
};

export default App;
