import Layout from "../components/layout";
import * as React from "react";
import {StaticImage} from "gatsby-plugin-image";

const AboutPage = () => {
    return (
        <Layout pageTitle="About Filmer">
            <StaticImage
                src="../images/about.jpg"
                alt=""
                placeholder="blurred"
                layout="fullWidth"
                height={200}
            />
        </Layout>
    )
}

export default AboutPage