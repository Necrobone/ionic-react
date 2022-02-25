import React from "react";

export interface Memory {
  id: string;
  imagePath: string;
  title: string;
  type: "good" | "bad";
}

const MemoriesContext = React.createContext<{
  memories: Memory[];
  addMemory: (path: string, title: string, type: "good" | "bad") => void;
}>({
  memories: [],
  addMemory: () => {},
});

export default MemoriesContext;
