import * as React from "react"
import { graphql } from "gatsby"
import { Container, Box, Kicker, Heading, Text } from "./ui"
import Feature, { FeatureDataProps } from "./feature"

export interface FeatureListProps {
  kicker?: string
  heading: string
  text?: string
  content: FeatureDataProps[]
}

export default function FeatureList(props: FeatureListProps) {
  return (
    <Container width="fullbleed">
      <Box background="muted" radius="large">
        <Box center paddingY={5}>
          <Heading>
            {props.kicker && <Kicker>{props.kicker}</Kicker>}
            {props.heading}
          </Heading>
          {props.text && <Text>{props.text}</Text>}
        </Box>
        {props.content.map((feature, i) => (
          <Feature key={feature.id} {...feature} flip={Boolean(i % 2)} />
        ))}
      </Box>
    </Container>
  )
}

export const query = graphql`
  fragment HomepageFeatureListContent on HomepageFeatureList {
    id
    kicker
    heading
    text
    content {
      id
      ...HomepageFeatureContent
    }
  }
`
