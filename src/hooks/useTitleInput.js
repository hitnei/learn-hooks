import { useState, useEffect } from "react";

function useTitleInput(initialValue) {
  const [name, setName] = useState(initialValue);
  useEffect(() => {
    document.title = name;
  });
  return [name, setName];
}

export { useTitleInput };
