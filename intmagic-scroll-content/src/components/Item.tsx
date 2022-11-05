import React from "react";
import "./item.scss";

type ItemProps = {
  title: string;
  mainItem: string;
  items: string[];
};

const ITEM_HEIGHT = 12;
const ITEM_WIDTH = 5;

export const Item: React.FC<ItemProps> = ({ title, mainItem, items }) => {
  let lastGridRow = 0;
  const calcGridArea = (index: number) => {
    lastGridRow = (index + 1) * 30 + ITEM_HEIGHT;
    const colStart = index % 2 === 0 ? 3 : 18;
    return (
      (index + 1) * 30 +
      " / " +
      colStart +
      " / " +
      ((index + 1) * 30 + ITEM_HEIGHT) +
      " / " +
      (colStart + ITEM_WIDTH)
    );
  };

  return (
    <div className="item-container">
      {/* Title */}
      <div className="title-container">
        <div className="title-sticky">
          <div className="title-wrapper">
            <h1>{title}</h1>
          </div>
        </div>
      </div>
      {/* End Title */}

      {/* Content */}
      <div className="content-container">
        <div className="main item">
          <img src={mainItem} />
        </div>
        {items.map((el, index) => {
          return (
            <div
              className="item"
              key={index}
              style={{ gridArea: calcGridArea(index) }}
            >
              <img src={el} />
            </div>
          );
        })}
        <div
          className="empty item"
          style={{
            gridRowStart: lastGridRow + 1,
          }}
        />
      </div>
      {/* End Content */}
    </div>
  );
};
