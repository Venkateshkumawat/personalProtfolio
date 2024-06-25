import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Blog from "../components/Blog/Blog";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SideNav from "../components/Header/SideNav";
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
