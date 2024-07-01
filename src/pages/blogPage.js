import React from "react";
import { Helmet } from "react-helmet";
import BlogList from "../components/Blog/Bloglist";

export default function BlogPage () {
    return (
        <>
            <Helmet>
                <title>Blog - Personal BLOG</title>
            </Helmet>

        <BlogList/>

        </>

    );
}
