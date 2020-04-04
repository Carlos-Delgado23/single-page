import React from 'react'
import GameCard from '../components/GameCard'
import { graphql } from 'gatsby'

const GameTemplate = (props) => {

  const game = props.data.games;

  return(
    <React.Fragment>
      <GameCard
        gameId={game.id}
        gameTitle={game.title}
        gameRelease={game.released}
        gamePlatform={game.platform}
      />
    </React.Fragment>
  )
}

export const query = graphql`
query GameQuery($gameId: String!) {
  games(id: {eq: $gameId}) {
      id
      platform
      released
      title
    }
  }
`

export default GameTemplate;