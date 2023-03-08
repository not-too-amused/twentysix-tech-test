import featuredImageCrop from "../assets/backgrounds/menu-2.png";
import featuredImage from "../assets/backgrounds/bg-slide-2.png";
import background1 from "../assets/backgrounds/bg-slide-3.png";
import background2 from "../assets/backgrounds/bg-slide-4.png";
import background3 from "../assets/backgrounds/bg-slide-5.png";

export const orlando = {
  name: "Orlando Duque",
  featuredImage: {
    preview: featuredImageCrop,
    full: featuredImage,
    alt: "Orlando mid flight after diving from a cliff face",
  },
  content: [
    { id: 0, img: featuredImage },
    {
      id: 1,
      img: background1,
      copy: "Our Colombian Ambassador started by diving into swimming pools before becoming a true legend of his sport. Orlando began cliff diving in 1995 and became a professional cliff diver in 2000. He won 9 cliff diving championships and set 2 world records in his entire career before retiring in 2019. He has always been doing incredible performances and is one of the only cliff diver who got a perfect 10 during a cliff diving competition in 2000.",
    },
    {
      id: 2,
      img: background2,
      heading: "Discipline",
      copy: "Orlando Duque is a cliff diver and one of the best in his sport worldwide.",
    },
    {
      id: 3,
      img: background3,
      heading: "Fun facts",
      listItems: [
        "Orlando won the first ever Gold medal in the sport at the 2013 World Aquatics Championships in Spain",
        "In 1992, he qualified for the Olympics but wasn’t able to compete because of lack of money at the Colombian Olympic Federation",
        "He is known as the ‘Duke’ for his outstanding records",
      ],
    },
    {
      id: 4,
      heading: "complete!",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
  ],
};
