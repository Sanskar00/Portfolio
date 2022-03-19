import React from "react";

type MainProps = {
  id: string;
};

const withmainLayout = <P extends object>(
  OriginalComponent: React.ComponentType<P>
) => {
  const NewComponent = (mainProps: MainProps) => {
    return (
      <div
        className="w-screen h-fit mb-32  mt-4 flex flex-col items-center overflow-hidden "
        id={mainProps.id}
      >
        <div className="w-5/6 md:w-3/4 lg:w-1/2  mt-4 ">
          <OriginalComponent {...(mainProps as P)} />
        </div>
      </div>
    );
  };
  return NewComponent;
};

export default withmainLayout;
