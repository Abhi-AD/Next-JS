import { StaticImageData } from "next/image";
import photo1 from "./photos/1.jpg";
import photo2 from "./photos/2.jpg";

export type WonderImage = {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
};

const wondersImages: WonderImage[] = [
  {
    id: "1",
    name: "Ashmita Kunwar",
    src: photo1,
    photographer: "Data Scientist · Data Analyst · Machine Learning Engineer",
    location: "Dang, Nepal",
  },
  {
    id: "2",
    name: "Dipa Khadka",
    src: photo2,
    photographer: "Big Data Analyst · Machine Learning Enginee",
    location: "Jordan",
  },
];

export default wondersImages;
