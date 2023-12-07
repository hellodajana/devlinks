import { useState } from "react";

import Input from "./elements/Input";
import Link from "./assets/icon-link.svg";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <Input
        name="url"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a URL"
        type="text"
        error="This is an error"
        image={<img src={Link} alt="Link Icon" />}
      />
    </div>
  );
};

export default App;
