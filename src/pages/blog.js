import React from 'react'
import Layout from '../components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby';
import blogStyles from "./blog.module.scss";
import Head from "../components/head";

export default function BlogPage() {
    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost(
        sort: {
              fields:publishedDate
              order: DESC
        }
      ) {
        
        edges {
          node {
            title
            slug
            publishedDate(formatString:"MMMM Do, YYYY")
          }
        }
      }
    }
`)
const titles = data.allContentfulBlogPost.edges


    return (
        <div>
           <Layout>
             <Head title="Blog" />
            <h1>Blog</h1>
            <p>Posts will show up here later on.</p>
            <ol className={blogStyles.posts}>
                {titles.map((data) => {
                   return <li className={blogStyles.post} key={data.node.slug}>
                       <Link to={`/blog/${data.node.slug}`}>
                        <h2>{data.node.title}</h2>
                        <p>{data.node.publishedDate}</p>
                        </Link>
                    </li>
                })}
            </ol>
            </Layout>
        </div>
    )
}
