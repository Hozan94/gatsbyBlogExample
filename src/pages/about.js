import React from "react"
import { Link } from "gatsby"

export default () => (
  <div>
    <h1>This is the about page</h1>
    <div>
      <Link to="/">Home</Link> | <Link to="/about">About me</Link>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci velit,
      luctus vel pretium quis, eleifend vel purus. Praesent vel dignissim
      turpis. Aliquam gravida ultrices pharetra. Morbi eu posuere nisl.
    </p>
  </div>
)
