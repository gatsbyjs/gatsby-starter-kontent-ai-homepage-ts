import * as React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Section,
  Heading,
  Kicker,
  Flex,
  Box,
  FlexList,
  Blockquote,
  Text,
  Avatar,
  HomepageImage,
} from "./ui"

interface TestimonialProps {
  id: string
  avatar: HomepageImage
  quote: string
  source: string
}

function Testimonial(props: TestimonialProps) {
  return (
    <Flex variant="start">
      {props.avatar && (
        <Avatar alt={props.avatar.alt} image={props.avatar.gatsbyImageData} />
      )}
      <Blockquote>
        <Text as="p" variant="lead">
          {props.quote}
        </Text>
        <figcaption>
          <Text as="cite" bold variant="caps">
            {props.source}
          </Text>
        </figcaption>
      </Blockquote>
    </Flex>
  )
}

export interface TestimonialListProps {
  kicker?: string
  heading: string
  content: TestimonialProps[]
}

export default function TestimonialList(props: TestimonialListProps) {
  return (
    <Section>
      <Container>
        <Box center>
          <Heading>
            {props.kicker && <Kicker>{props.kicker}</Kicker>}
            {props.heading}
          </Heading>
        </Box>
        <FlexList gutter={3} variant="start" responsive wrap>
          {props.content.map((testimonial, index) => (
            <Box as="li" key={testimonial.id + index} width="half" padding={3}>
              <Testimonial {...testimonial} />
            </Box>
          ))}
        </FlexList>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageTestimonialListContent on HomepageTestimonialList {
    id
    kicker
    heading
    content {
      id
      quote
      source
      avatar {
        id
        gatsbyImageData
        alt
      }
    }
  }
`
