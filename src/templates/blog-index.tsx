import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import {
  Container,
  FlexList,
  Box,
  Space,
  BlockLink,
  Heading,
  Subhead,
  Kicker,
  Text,
  HomepageImage,
} from "../components/ui"
import { BlogAuthor, BlogPost } from "./blog-post"

interface PostCardSmallProps {
  slug: string
  image?: HomepageImage
  title?: string
  category?: string
}

interface PostCardProps extends PostCardSmallProps {
  excerpt?: string
  author?: BlogAuthor
}

function PostCard({
  slug,
  image,
  title,
  excerpt,
  author,
  category,
  ...props
}: PostCardProps) {
  return (
    <BlockLink {...props} to={`/blog/${slug}`}>
      {image && (
        <>
          <GatsbyImage alt={image.alt} image={image.gatsbyImageData} />
          <Space size={3} />
        </>
      )}
      <Subhead>
        <Kicker>{category}</Kicker>
        {title}
      </Subhead>
      <Text as="p">{excerpt}</Text>
      {author?.name && (
        <Text variant="bold">
          <div>By {author.name}</div>
        </Text>
      )}
    </BlockLink>
  )
}

function PostCardSmall({
  slug,
  image,
  title,
  category,
  ...props
}: PostCardSmallProps) {
  return (
    <BlockLink {...props} to={`/blog/${slug}`}>
      {image && (
        <>
          <GatsbyImage alt={image.alt} image={image.gatsbyImageData} />
          <Space size={3} />
        </>
      )}
      <Subhead>
        <Kicker>{category}</Kicker>
        {title}
      </Subhead>
    </BlockLink>
  )
}

export interface BlogIndexProps {
  posts: BlogPost[]
}

export default function BlogIndex({ posts }: BlogIndexProps) {
  const featuredPosts = posts.filter((p) => p.category === "Featured")
  const regularPosts = posts.filter((p) => p.category !== "Featured")

  return (
    <Layout title="Blog">
      <Container>
        <Box paddingY={4}>
          <Heading as="h1">Blog</Heading>
          <FlexList variant="start" gap={0} gutter={3} responsive>
            {featuredPosts.map((post) => (
              <Box as="li" key={post.id} padding={3} width="half">
                <PostCard {...post} />
              </Box>
            ))}
          </FlexList>
        </Box>
        <Box paddingY={4}>
          <Subhead>Product Updates</Subhead>
          <FlexList responsive wrap gap={0} gutter={3} variant="start">
            {regularPosts.map((post) => (
              <Box as="li" key={post.id} padding={3} width="third">
                <PostCardSmall {...post} />
              </Box>
            ))}
          </FlexList>
        </Box>
      </Container>
    </Layout>
  )
}
