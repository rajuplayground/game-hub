import React from "react";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
}

const Icon = ({ icon: RIcon }: Props) => {
  return RIcon ? <RIcon className="text-gray-500" /> : null;
};

export default Icon;
