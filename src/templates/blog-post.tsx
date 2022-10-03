import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import {
  Container,
  Flex,
  Box,
  Space,
  Heading,
  Text,
  Avatar,
  HomepageImage,
} from "../components/ui"
import { avatar as avatarStyle } from "../components/ui.css"
import * as styles from "./blog-post.css"

export interface BlogAuthor {
  id: string
  name: string
  avatar: HomepageImage
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  html: string
  image: HomepageImage
  author: BlogAuthor
  next?: BlogPost
  previous?: BlogPost
}

export default function BlogPost(props: BlogPost) {
  return (
    <Layout {...props} description={props.excerpt}>
      <Container>
        <Box paddingY={5}>
          <Heading as="h1" center>
            {props.title}
          </Heading>
          <Space size={4} />
          {props.author && (
            <Box center>
              <Flex>
                {props.author.avatar &&
                  (!!props.author.avatar.gatsbyImageData ? (
                    <Avatar
                      {...props.author.avatar}
                      image={props.author.avatar.gatsbyImageData}
                    />
                  ) : (
                    <img
                      src={props.author.avatar.url}
                      alt={props.author.name}
                      className={avatarStyle}
                    />
                  ))}
                <Text variant="bold">{props.author.name}</Text>
              </Flex>
            </Box>
          )}
          <Space size={4} />
          <Text center>{props.date}</Text>
          <Space size={4} />
          {props.image && (
            <GatsbyImage
              alt={props.image.alt}
              image={props.image.gatsbyImageData}
            />
          )}
          <Space size={5} />
          <div
            className={styles.blogPost}
            dangerouslySetInnerHTML={{
              __html: props.html,
            }}
          />
        </Box>
      </Container>
    </Layout>
  )
}
