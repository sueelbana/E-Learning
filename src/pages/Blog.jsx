import React from "react";
import BlogFeatured from "../components/BlogFeatured"; 
import BlogList from "../components/BlogList";
import RelatedBlog from "../components/RelatedBlog";
import MarketingArticles from "../components/MarketingArticles";

export default function Blog() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <BlogFeatured />
      <BlogList />
      <RelatedBlog />
      <MarketingArticles />
    </div>
  );
}
