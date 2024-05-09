import React from "react";

interface Props {
  children: string;
  onClick: () => void;
  color?: string;
}

const Button = ({ children, onClick, color = "success" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
