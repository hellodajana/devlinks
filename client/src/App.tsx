import { useState } from "react";

import Button from "./elements/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button
        text="Click me"
        callback={() => setCount(count + 1)}
        className="secondary"
      />
    </>
  );
}

export default App;
