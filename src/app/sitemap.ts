import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const lastModified = new Date(SITE.contentLastModified);

  return [
    {
      url: base,
      lastModified,
      images: [
        `${base}/1767029764837-hero-no-logo.png`,
        `${base}/ueber-uns.jpg`,
        `${base}/gallery-IMG_3230.jpg`,
        `${base}/gallery-IMG_3232.jpg`,
        `${base}/gallery-IMG_3234.jpg`,
        `${base}/gallery-IMG_4157.jpg`,
        `${base}/gallery-IMG_4160.jpg`,
      ],
    },
    {
      url: `${base}/fahrzeuge`,
      lastModified,
      images: [
        `${base}/1765802905938.jpeg`,
        `${base}/1767029675652.jpeg`,
        `${base}/1767029685190.jpeg`,
        `${base}/1767029697164.jpeg`,
        `${base}/1767029764837.jpeg`,
      ],
    },
    {
      url: `${base}/ueber-uns`,
      lastModified,
      images: [`${base}/ueber-uns.jpg`, `${base}/chef.png`, `${base}/chefbaba.png`],
    },
    {
      url: `${base}/leistungen`,
      lastModified,
    },
    {
      url: `${base}/wissen`,
      lastModified,
    },
    {
      url: `${base}/wissen/gebrauchtwagenkauf`,
      lastModified,
      images: [`${base}/1767029764837-hero-no-logo.png`],
    },
  ];
}
