import { Metadata } from "next";

export const socials = [
  {
    id: 1,
    name: "Facebook",
    url: "https://www.facebook.com/alexandra.kolesnikova.908",
    handle: "fb",
  },
  {
    id: 2,
    name: "Instagram",
    url: "https://www.instagram.com/alessandra",
    handle: "insta",
  },
];

const title = "ConsoleCrafters";
const description =
  "Amazing stuff for your vintage console";
const image =  "";

export const metaData: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title,
    description,
    url: "",
    siteName: "ConsoleCrafters",
    images: [{ url: image }],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
