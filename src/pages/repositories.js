import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import * as styles from "./repositories.module.scss"

export default ({ data }) => (
  <Layout>
    <Title text="Repositories" />
    <div>
      {data.allGithubData.edges[0].node.data.search.edges.map(({ node }) => (
        <div className={styles.repository}>
          <div className={styles.name}>
            <a href={node.url}>pluralsight\{node.name}</a>
            <span className={styles.stars}>
              {" "}
              ( has {node.stargazerCount} stars ){" "}
            </span>
          </div>
          <div className={styles.description} /> {node.description}{" "}
        </div>
      ))}
    </div>
  </Layout>
)

export const githubQuery = graphql`
  query GithubQuery {
    allGithubData {
      edges {
        node {
          data {
            search {
              edges {
                node {
                  description
                  name
                  stargazerCount
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`
