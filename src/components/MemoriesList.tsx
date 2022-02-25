import React, { Fragment } from "react";
import { IonCol, IonRow } from "@ionic/react";
import MemoryItem from "./MemoryItem";
import { Memory } from "../data/MemoriesContext";

interface MemoriesListProps {
  items: Memory[];
}

const MemoriesList: React.FC<MemoriesListProps> = (props) => {
  return (
    <Fragment>
      {props.items.map((memory) => (
        <IonRow>
          <IonCol>
            <MemoryItem image={memory.base64Url} title={memory.title} />
          </IonCol>
        </IonRow>
      ))}
    </Fragment>
  );
};

export default MemoriesList;
