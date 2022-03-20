import React from "react";
interface ImageArray {
  images: Array<string>;
}
const ProjectImage = ({ images }: ImageArray) => {
  return (
    <div className="w-full flex h-64 gap-1 place-items-center">
      {images.map((image, index) => {
        return <section></section>;
      })}
    </div>
  );
};

export default ProjectImage;
