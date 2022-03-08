import { base64FromPath } from "@capacitor-community/filesystem-react";
import { Directory, Filesystem } from "@capacitor/filesystem";
import { Storage } from "@capacitor/storage";
import React, { useCallback, useEffect, useState } from "react";
import { Photo } from "../components/ImagePicker";
import MemoriesContext, { Memory, MemoryType } from "./MemoriesContext";

const MemoriesContextProvider: React.FC = (props) => {
  const [memories, setMemories] = useState<Memory[]>([]);

  useEffect(() => {
    const storableMemories = memories.map((memory) => {
      return {
        id: memory.id,
        title: memory.title,
        imagePath: memory.imagePath,
        type: memory.type,
      };
    });

    Storage.set({
      key: "memories",
      value: JSON.stringify(storableMemories),
    });
  }, [memories]);

  const addMemory = async (photo: Photo, title: string, type: MemoryType) => {
    const fileName = new Date().getTime() + ".jpeg";
    const base64 = await base64FromPath(photo!.previewUrl);

    await Filesystem.writeFile({
      path: fileName,
      data: base64,
      directory: Directory.Data,
    });

    const newMemory: Memory = {
      id: Math.random().toString(),
      title,
      type,
      imagePath: fileName,
      base64Url: base64,
    };

    setMemories((current) => {
      return [...current, newMemory];
    });
  };

  const initContext = useCallback(async () => {
    const memoriesData = await Storage.get({ key: "memories" });
    const storedMemories = memoriesData.value
      ? JSON.parse(memoriesData.value)
      : [];

    const loadedMemories: Memory[] = [];
    for (const storedMemory of storedMemories) {
      const file = await Filesystem.readFile({
        path: storedMemory.imagePath,
        directory: Directory.Data,
      });
      loadedMemories.push({
        id: storedMemory.id,
        title: storedMemory.title,
        type: storedMemory.type,
        imagePath: storedMemory.imagePath,
        base64Url: "data:image/jpeg;base64," + file.data,
      });
    }

    setMemories(loadedMemories);
  }, []);

  return (
    <MemoriesContext.Provider
      value={{
        memories,
        addMemory,
        initContext,
      }}
    >
      {props.children}
    </MemoriesContext.Provider>
  );
};

export default MemoriesContextProvider;
