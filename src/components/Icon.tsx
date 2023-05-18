import React from "react";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
}

const Icon = ({ icon: RIcon }: Props) => {
  return <RIcon className="text-gray-500" />;
};

export default Icon;
