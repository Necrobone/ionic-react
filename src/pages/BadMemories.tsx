import React, { useContext } from "react";
import MemoriesContent from "../components/MemoriesContent";
import MemoriesContext from "../data/MemoriesContext";

const BadMemories: React.FC = () => {
  const context = useContext(MemoriesContext);

  const badMemories = context.memories.filter(
    (memory) => memory.type === "bad"
  );

  return (
    <MemoriesContent
      title="Bad Memories"
      fallbackText="No bad memories found."
      memories={badMemories}
    />
  );
};

export default BadMemories;
