import React from "react";
interface ImageArray {
	images: Array<string>;
}
const ProjectImage = ({ images }: ImageArray) => {
	return (
		<div className="w-full h-72 gap-1  ">
			{images.map((image, index) => {
				return (
					<section className="grid place-items-center w-full ">
						<img
							className="object-contain h-80 w-80  "
							src={image}
						></img>
					</section>
				);
			})}
		</div>
	);
};

export default ProjectImage;
