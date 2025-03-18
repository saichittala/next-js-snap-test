// next-sitemap.config.js
module.exports = {
  siteUrl: "https://www.snapimg.site", // Replace with your site's URL
  generateRobotsTxt: true, // Generate robots.txt file
  sitemapSize: 7000, // Split large sitemaps into multiple files
  exclude: ["/404", "/server-sitemap.xml"], // Exclude specific pages
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};