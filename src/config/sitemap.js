/* eslint-disable no-console */
const sitemaps = require('sitemaps');

const {
    WEBSITE_URL,
} = process.env;

const highPriority = [WEBSITE_URL];
const lowPriority = [];

const filePath = `${__dirname}/../../public/sitemap.xml`;

sitemaps(highPriority, lowPriority, filePath, (xml, error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log(`Sitemap.xml generated at: ${filePath}`);
});
