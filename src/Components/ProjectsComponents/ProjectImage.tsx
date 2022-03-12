import React from "react";
interface ImageArray {
  images: Array<string>;
}
const ProjectImage = ({ images }: ImageArray) => {
  return (
    <div className="w-full grid grid-cols-3  place-items-center ">
      {images.map((image, index) => {
        return (
          <div
            className={` z-${
              10 * (images.length - index)
            }  hover:z-50 hover:duration-300  
            -translate-x-${index * 20}}`}
          >
            <img src={image} alt={image} className={`hover:scale-105  `}></img>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectImage;
