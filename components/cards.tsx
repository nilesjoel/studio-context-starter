import styled from 'styled-components'
import Link from 'next/link'

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  max-width: 800px;
  margin-top: 3rem;
`

const Card = styled.div`
  padding: 1rem;
  margin: .5rem;
  color: ${({ theme }) => theme.colors.positive};
  text-decoration: none;
  border: 1px solid black;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 100%;

  &:hover,
  :focus,
  :active {
    color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`

const StyledA = styled.a`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`

const StyledLink = ({ href, name }) => (
  <Link href={href} passHref legacyBehavior>
    <StyledA>{name}</StyledA>
  </Link>
)

export default function Cards() {
  return (
    <FlexContainer>
      <Card>
        <StyledLink href="/tutorial/developing-studio-context" name="A tutorial on developing with a Studio Context." />
      </Card>
      <Card>
        <StyledLink href="/" name="Redirect to Landing page" />
      </Card>
      <Card>
        <StyledLink href="/proto/overlap" name="Redirect to Prototype Overlay" />
      </Card>
      <Card>
        <StyledLink href="/proto/rectangles" name="Redirect to Prototype Rectangles" />
      </Card>
      <Card>
        <StyledLink href="/proto/testing" name="Redirect to Prototype Testing" />
      </Card>
    </FlexContainer>
  )
}
