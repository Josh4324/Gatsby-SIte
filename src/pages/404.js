import React from 'react'
import Layout from '../components/layout';
import { Link } from 'gatsby';
import Head from "../components/head";

export default function NotFound() {
    return (
        <div>
            <Layout>
                <Head title="404" />
                <h1>Page not Found</h1>
                <p><Link to="/">GO Home</Link></p>
            </Layout>
        </div>
    )
}
