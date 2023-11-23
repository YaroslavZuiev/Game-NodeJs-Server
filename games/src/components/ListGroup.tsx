import React, { useState } from "react";

import styles from "../styles/ListGroup.module.scss";

interface ListGroupProps {
  items: string[];
  title: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ title, items, onSelectItem }: ListGroupProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const groupStyles = () => {
    return [styles.listGroup, styles.container].join(" ");
  };
  const getMessage = () => {
    const noItems = !items.length;
    if (noItems) {
      return <p>No Items</p>;
    } else {
      return (
        <ul className={groupStyles()}>
          {items.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      );
    }
  };

  return (
    <>
      <h1>{title}</h1>
      {getMessage()}
    </>
  );
};

export default ListGroup;
