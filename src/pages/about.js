import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout';
import Head from "../components/head";

export default function aboutPage() {
    return (
        <div>
            <Layout>
                <Head title="About Me" />
                <h1>About Me</h1>
                <p>I am a fullstack developer</p>
                <p><Link to="/contact">Contact Page</Link></p>
            </Layout>
        </div>
    )
}
