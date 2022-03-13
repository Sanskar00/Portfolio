import React from "react";
interface ImageArray {
  images: Array<string>;
}
const ProjectImage = ({ images }: ImageArray) => {
  return (
    <div className="w-full flex place-items-center my-12 ">
      {images.map((image, index) => {
        return (
          <div
            className={` relative z-${
              10 * (images.length - index)
            }  hover:z-50 hover:duration-300  
            -translate-x-${index * 20}
           `}
          >
            <img
              src={image}
              alt={image}
              className={`object-contain hover:scale-105  w-${
                3 / (4 * (index + 1))
              } h-${3 / (4 * (index + 1))}`}
            ></img>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectImage;
