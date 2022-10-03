import * as React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Heading,
  FlexList,
  LinkList,
  Section,
  Box,
  HomepageLink,
} from "./ui"
import { LogoItem, LogoItemProps } from "./logo-list"

export interface AboutLogoListProps {
  heading?: string
  links: HomepageLink[]
  logos: LogoItemProps[]
}

export default function AboutLogoList(props: AboutLogoListProps) {
  return (
    <Section>
      <Container>
        <Box center>
          {props.heading && <Heading>{props.heading}</Heading>}
          <LinkList links={props.links} />
        </Box>
      </Container>
      <Container width="narrow">
        <Box paddingY={6}>
          <FlexList gap={5} variant="center">
            {props.logos.map((logo, i) => (
              <li key={`${logo.id}-${i}`}>
                <LogoItem {...logo} />
              </li>
            ))}
          </FlexList>
        </Box>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment AboutLogoListContent on AboutLogoList {
    id
    heading
    links {
      id
      href
      text
    }
    logos {
      id
      alt
      image {
        id
        gatsbyImageData
        alt
      }
    }
  }
`
