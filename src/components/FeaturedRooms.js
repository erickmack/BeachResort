import React, { Component } from "react"
import { RoomContext } from "../context"
import Loading from "./Loading"
import Room from "./Room"

export default class FeaturedRooms extends Component {
  static contextType = RoomContext
  render() {
    const { greeting, name } = this.context
    return (
      <div>
        {greeting} {name} from featured rooms
        <Loading />
        <Room />
      </div>
    )
  }
}
