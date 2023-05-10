import React, { FC } from "react";

interface ContainerProps {
  children: React.ReactNode;
}
const Container: FC<ContainerProps> = () => {
  return <div>Container</div>;
};

export default Container;
