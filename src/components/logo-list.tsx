import * as React from "react"
import { graphql } from "gatsby"
import {
  Space,
  Container,
  Section,
  FlexList,
  Text,
  Logo,
  HomepageImage,
} from "./ui"

export interface LogoItemProps {
  id: string
  alt: string
  image: HomepageImage
}

export function LogoItem(props: LogoItemProps) {
  if (!props.image) return null

  return (
    <Logo alt={props.alt} image={props.image.gatsbyImageData} size="medium" />
  )
}

export interface LogoListProps {
  text?: string
  logos: LogoItemProps[]
}

export default function LogoList(props: LogoListProps) {
  return (
    <Section paddingY={4}>
      <Container width="narrow">
        {props.text && (
          <Text center variant="lead">
            {props.text}
          </Text>
        )}
        <Space size={4} />
        <FlexList gap={4} variant="center">
          {props.logos.map(
            (logo) =>
              logo && (
                <li key={logo.id}>
                  <LogoItem {...logo} />
                </li>
              )
          )}
        </FlexList>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageLogoListContent on HomepageLogoList {
    id
    text
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
