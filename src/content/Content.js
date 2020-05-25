// Packages
import React, {useState} from 'react'
import { Route } from 'react-router-dom'

// Custom componentd
import FreeGames from './pages/FreeGames'
import FreeGamesPlay from './pages/FreeGamesPlay'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Games from './pages/Games'
import GameInfo from './pages/GameInfo'
import Signup from './pages/Signup'
import EditProfile from './pages/EditProfile'
import FriendsList from './pages/FriendsList'


const Content = props => {
  let [currentGame, setCurrentGame] = useState()
  let [freeGame, setFreeGame] = useState()

  const updateFreeGame = (freeGameId) => {
    console.log('heres your game')
    setFreeGame(freeGameId)
  }

  const updateCurrentGame = (game) => {
    console.log('updating current game')
    setCurrentGame(game)

  }
  console.log("hello")
  return (
    <div className="container">
      <Route exact path="/" component={Home} />
      <Route path ='/friendslist' render={() => 
          <FriendsList user={props.user}/>
      } />
      <Route path ='/FreeGames' render={() => 
          <FreeGames setFreeGame={updateFreeGame}/>
      } />
      <Route path="/FreeGamesPlay" render={() => <FreeGamesPlay freeGame={freeGame}/>} />
      <Route path ='/games' render={() => 
          <Games setGame={updateCurrentGame} />
      } />
      <Route path ='/gameinfo' render={() => 
          <GameInfo displayGame={currentGame} setGame={updateCurrentGame} user={props.user} />
      } />
      <Route path="/login" render={
        () => <Login user={props.user} updateToken={props.updateToken} />
      } />
      <Route path="/profile" render={
        () => <Profile user={props.user} />
      } />
      <Route path="/signup" render={
        () => <Signup user={props.user} updateToken={props.updateToken} />
      } />
      <Route path="/edit" render={
        () => <EditProfile user={props.user} updateToken={props.updateToken} />
      } />
    </div>
  )
}

export default Content
