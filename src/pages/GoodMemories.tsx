import React, { useContext } from "react";
import MemoriesContent from "../components/MemoriesContent";
import MemoriesContext from "../data/MemoriesContext";

const GoodMemories: React.FC = () => {
  const context = useContext(MemoriesContext);

  const goodMemories = context.memories.filter(
    (memory) => memory.type === "good"
  );

  return (
    <MemoriesContent
      title="Good Memories"
      fallbackText="No good memories found."
      memories={goodMemories}
    />
  );
};

export default GoodMemories;
