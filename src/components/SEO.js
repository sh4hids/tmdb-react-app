import React from "react";
import { Helmet } from "react-helmet-async";
import urljoin from "url-join";
import generateSchema from "../utils/generateSchema";
import { siteMetadata } from "../config";

const SEO = ({
  title,
  description,
  url = "",
  image = "",
  author,
  keywords,
  createdAt,
  updatedAt,
  pageType,
}) => {
  title = `${title ? `${title} ${siteMetadata.titleSeparator} ` : ``}${
    siteMetadata.siteTitle
  }`;
  url = urljoin(siteMetadata.siteUrl, url);
  description = description || siteMetadata.siteDescription;
  image = image || siteMetadata.seoImage;

  const schemaOrgJSONLD = generateSchema({
    author,
    image,
    description,
    url,
    title,
    keywords,
    updatedAt,
    createdAt,
    type: pageType,
    config: {
      ...siteMetadata,
    },
  });

  return (
    <Helmet htmlAttributes={{ lang: "en" }}>
      {/* General tags */}
      <title>{`${title}`}</title>
      <meta name="description" content={description} />
      <meta
        name="image"
        content={image ? urljoin(siteMetadata.siteUrl, image) : ""}
      />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={`${url}`} />
      {pageType === "Article" ? (
        <meta property="og:type" content="article" />
      ) : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={image ? urljoin(siteMetadata.siteUrl, image) : ""}
      />
      {keywords && <meta name="keywords" content={keywords.join(", ")} />}
      <meta property="fb:app_id" content={siteMetadata.fbAppId || ""} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:creator"
        content={siteMetadata.author ? siteMetadata.author.links.twitter : ""}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={image ? urljoin(siteMetadata.siteUrl, image) : ""}
      />
    </Helmet>
  );
};

export default SEO;
