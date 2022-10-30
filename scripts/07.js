function duckDuckGoose(players, goose) {
    while( goose> players.length ) {
        goose = goose - players.length
    }
    return players[goose-1].name
  }