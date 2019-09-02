import React from 'react';
import Layout from '../components/layout';
import Head from "../components/head";

export default function contactPage() {
    return (
        <div>
           <Layout>
               <Head title="Contact" />
                <h1>Contact Page</h1>
                <p>Contact me on twitter <a href="https://twitter.com/josh_my_man">@josh_my_man</a></p>
            </Layout>
        </div>
    )
}
