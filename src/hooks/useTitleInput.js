import { useState, useEffect, useDebugValue } from "react";

function useTitleInput(initialValue) {
  const [name, setName] = useState(initialValue);
  useEffect(() => {
    document.title = name;
  });
  useDebugValue(name.length > 0 ? "full" : "empty");
  return [name, setName];
}

export { useTitleInput };
