import blogCardImage from "../../../assets/blogCardImage.jpeg";
import facebookLogo from "../../../assets/moments/facebook.png";
import gmailLogo from "../../../assets/moments/gmail.png";
import instaLogo from "../../../assets/moments/insta.png";
import linkedinLogo from "../../../assets/moments/linkedin.png";
import pinterestLogo from "../../../assets/moments/pinterest.png";
import tLogo from "../../../assets/moments/t.png";
import twitterLogo from "../../../assets/moments/twitter.png";
import youtubeLogo from "../../../assets/moments/youtube.png";
// banner image
import img1 from "../../../assets/banner/1slideimage.png";
import img2 from "../../../assets/banner/2slideimage.png";
import img3 from "../../../assets/banner/3slideimage.png";
import img4 from "../../../assets/banner/4slideimage.png";
//banner card image
import imgSlide1 from "../../../assets/banner/1slidecard.png";
import imgSlide2 from "../../../assets/banner/2slidecard.png";
import imgSlide3 from "../../../assets/banner/3slideCard.png";
import imgSlide4 from "../../../assets/banner/4slideCard.png";

//theme data
import themeImg1 from "../../../assets/themes/1.png";
import themeImg2 from "../../../assets/themes/2.png";
import themeImg3 from "../../../assets/themes/3.png";
import themeImg4 from "../../../assets/themes/4.png";
import themeImg5 from "../../../assets/themes/5.png";
import themeImg6 from "../../../assets/themes/6.png";
import themeImg7 from "../../../assets/themes/7.png";

export const pricingDataMonthly = [
  {
    label: "Free",
    price: "$0",
    description:
      "Best for small business owners, startups who needes landing page for their business.",
    buttonText: "Start free trial",
    includedItems: [
      "eCommerce store",
      "Basic Theme Installation",
      "Made with Figma",
    ],
  },
  {
    label: "Basic",
    price: "$99",
    description:
      "Best for small business owners, startups who needes landing page for their business.",
    buttonText: "Get started",
    includedItems: ["Basic features", "Limited support", "Customizable design"],
  },
  {
    label: "Premium",
    price: "$199",
    description:
      "Best for medium business owners, startups who needes landing page for their business.",
    buttonText: "Get started",
    includedItems: [
      "Advanced features",
      "Priority support",
      "Premium design options",
      "eCommerce store",
      "Made with Figma",
    ],
  },
  {
    label: "Enterprise",
    price: "$399",
    description:
      "Best for large companies, business owners who needes landing page for their business.",
    buttonText: "Get started",
    includedItems: [
      "Custom solutions",
      "Dedicated account manager",
      "Enterprise-grade security",
      "eCommerce store",
      "Basic Theme Installation",
    ],
  },
];
export const pricingDataYearly = [
  {
    label: "Free",
    price: "$256",
    description:
      "Best for small business owners, startups who needes landing page for their business.",
    buttonText: "Start free trial",
    includedItems: [
      "eCommerce store",
      "Basic Theme Installation",
      "Made with Figma",
    ],
  },
  {
    label: "Basic",
    price: "$456",
    description:
      "Best for small business owners, startups who needes landing page for their business.",
    buttonText: "Get started",
    includedItems: ["Basic features", "Limited support", "Customizable design"],
  },
  {
    label: "Premium",
    price: "$2435",
    description:
      "Best for medium business owners, startups who needes landing page for their business.",
    buttonText: "Get started",
    includedItems: [
      "Advanced features",
      "Priority support",
      "Premium design options",
      "eCommerce store",
      "Made with Figma",
    ],
  },
  {
    label: "Enterprise",
    price: "$5678",
    description:
      "Best for large companies, business owners who needes landing page for their business.",
    buttonText: "Get started",
    includedItems: [
      "Custom solutions",
      "Dedicated account manager",
      "Enterprise-grade security",
      "eCommerce store",
      "Basic Theme Installation",
    ],
  },
];

export const blogData = [
  {
    title: "The Role of Artificial Intelligence in Software Development",
    dateCreated: "09-10-24",
    description:
      "Artificial Intelligence is revolutionizing software development by automating debugging and code optimization processes.",
    img: blogCardImage,
  },
  {
    title: "The Power of Quantum Computing in Solving Complex Problems",
    dateCreated: "17-10-24",
    description:
      "Quantum computing harnesses the power of quantum mechanics to tackle complex problems that traditional computers struggle with.",
    img: blogCardImage,
  },
  {
    title: "Best Practices for Securing Your Web Applications",
    dateCreated: "21-10-24",
    description:
      "In an ever-evolving digital landscape, securing your web applications is paramount. Implementing best practices such as",
    img: blogCardImage,
  },
];

export const bannerData = [
  {
    id: 1,
    image: img1,
    cardImage: imgSlide1,
    lockUrl: "https://www.eiser.com",
  },
  {
    id: 2,
    image: img2,
    cardImage: imgSlide2,
    lockUrl: "https://www.eiser.com",
  },
  {
    id: 3,
    image: img3,
    cardImage: imgSlide3,
    lockUrl: "https://www.eiser.com",
  },
  {
    id: 4,
    image: img4,
    cardImage: imgSlide4,
    lockUrl: "https://www.eiser.com",
  },
];

export const themeData = [
  {
    id: 1,
    title: "Volcano",
    image: themeImg1,
    rating: 3.5,
    activeInstallations: "1,500 Active installations",
  },
  {
    id: 2,
    title: "Mountain",
    image: themeImg2,
    rating: 4.0,
    activeInstallations: "2,000 Active installations",
  },
  {
    id: 3,
    title: "Ocean",
    image: themeImg3,
    rating: 4.5,
    activeInstallations: "3,000 Active installations",
  },
  {
    id: 4,
    title: "Forest",
    image: themeImg4,
    rating: 4.8,
    activeInstallations: "4,000 Active installations",
  },
  {
    id: 5,
    title: "Desert",
    image: themeImg5,
    rating: 4.2,
    activeInstallations: "2,500 Active installations",
  },
  {
    id: 6,
    title: "City",
    image: themeImg6,
    rating: 4.3,
    activeInstallations: "3,500 Active installations",
  },
  {
    id: 7,
    title: "Space",
    image: themeImg7,
    rating: 4.7,
    activeInstallations: "5,000 Active installations",
  },
];

export const faqData = [
  {
    question: "What is WebFusionX?",
    answer:
    "WebFusionX is a user-friendly platform that allows anyone, regardless of coding experience, to create their own website."  
  },
  {
    question: "How does WebFusionX work?",
    answer:
      "WebFusionX provides a drag-and-drop interface and pre-designed templates, making website creation simple and intuitive.",
  },
  {
    question: "What features does WebFusionX offer?",
    answer:
      "WebFusionX offers a variety of features, including customizable templates, SEO tools, e-commerce integration, and social media integration.",
  },
  {
    question: "Can I use my own domain name with WebFusionX?",
    answer:
      "Yes, you can connect your own domain name to your WebFusionX website.",
  },
  {
    question: "Does WebFusionX offer hosting services?",
    answer:
      "Yes, WebFusionX provides hosting services for your website.",
  },
  {
    question: "What is the pricing structure for WebFusionX?",
    answer:
      "WebFusionX typically offers different pricing plans based on the features and resources required.",
  },

  
];
