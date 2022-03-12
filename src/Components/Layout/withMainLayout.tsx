import React from "react";

export const withmainLayout = <P extends object>(
  OriginalComponent: React.ComponentType<P>
) =>
  class NewComponent extends React.Component {
    render() {
      const { ...props } = this.props;
      return (
        <div className="w-screen h-fit mb-32  mt-4 flex flex-col items-center overflow-hidden ">
          <div className="w-3/4 md:w-3/4 lg:w-1/2  mt-4 ">
            <OriginalComponent {...(props as P)} />
          </div>
        </div>
      );
    }
  };
