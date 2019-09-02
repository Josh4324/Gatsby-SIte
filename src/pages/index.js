import React from "react"
import { Link } from 'gatsby';
import Layout from '../components/layout'
import Head from "../components/head";

export default function indexPage() {
    return (
        <div>
            <Layout>
            <Head title="Home"/> 
            <h1>Hello,</h1>
            <h2>I'm Josh, a full stack developer living in a beautiful lagos.</h2>

            <p>Need a developer? <a href="/contact">Contact Me</a></p>
            <p>Need a developer? <Link to="/contact">Contact me</Link></p>
            </Layout>
        </div>
    )
}

