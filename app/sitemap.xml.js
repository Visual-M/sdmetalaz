import React from "react";
import * as fs from "fs";
import { steelProducts, alcipanProducts } from "@/constants/data";

const Sitemap = () => {
    return null;
};

export const getServerSideProps = async ({ res }) => {
    const BASE_URL = "http://localhost:3000";

    const staticPaths = fs
        .readdirSync("pages")
        .filter((staticPage) => {
            return staticPage !== "sitemap.xml.js";
        })
        .map((staticPagePath) => {
            return `${BASE_URL}/${staticPagePath.replace(".js", "")}`;
        });

    const dynamicPaths = [...steelProducts, ...alcipanProducts].flatMap((product) => [
        `${BASE_URL}${product.url}`,
        ...product.alterSubcategories.map((sub) => `${BASE_URL}${sub.url}`),
    ]);

    const allPaths = [
        ...staticPaths,
        `${BASE_URL}/about`,
        `${BASE_URL}/certificates`,
        `${BASE_URL}/contact`,
        `${BASE_URL}/history`,
        `${BASE_URL}/selling`,
        ...dynamicPaths,
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
            .map((url) => {
                return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
            })
            .join("")}
    </urlset>
  `;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;