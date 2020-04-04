import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GameCard from "../components/GameCard"



const IndexPage = (props) => {
  const GamesWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  `

    const games = props.data.allGames.edges;
    console.log(games)
    return(
      <Layout>

        <SEO title="Home" />
        <h1>Welcome to your new Gatsby Games.</h1>
        <GamesWrapper>
          {games.map( game => (
            <GameCard 
            gameId={game.node.id}
            gameTitle={game.node.title}
            gameRelease={game.node.released}
            gamePlatform={game.node.platform}
            /> 
          ))}
        </GamesWrapper>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
  )
}


export const data = graphql`
  query AllGamesQuery {
    allGames {
      edges {
        node {
          id
          platform
          released
          title
        }
      }
    }
  }
`

export default IndexPage