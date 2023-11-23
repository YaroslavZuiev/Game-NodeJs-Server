import React, { ReactNode } from "react";

interface Props {
  showMore: boolean;
  children: ReactNode;
  onClick: (state: boolean, count: number) => void;
}

const TextBox = ({ children, showMore, onClick }: Props) => {
  const btnTitle = () => {
    if (showMore) {
      return "Show Less";
    }
    return "Show More";
  };

  return (
    <div>
      <span>{children}</span>
      <button onClick={ () => onClick(!showMore, showMore ? Infinity : 10) }>{ btnTitle() }</button>
    </div>
  );
};

export default TextBox;
