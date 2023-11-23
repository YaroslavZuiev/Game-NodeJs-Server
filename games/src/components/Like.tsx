import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
  isActive: boolean;
  onClick: (state: boolean) => void;
}

const Like = ({ isActive,onClick }: Props) => {
  const toggle = () => {
    setState(!state)
    onClick(!state)
  }
  const [state, setState] = useState(isActive);
  if (state) {
    return <AiFillHeart color="#ff6b81" size="20" onClick={ toggle }/>;
  }
  return <AiOutlineHeart size="20" onClick={ toggle } />;
};

export default Like;
