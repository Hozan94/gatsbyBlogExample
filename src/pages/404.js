import React from "react"
import * as styles from "./404.module.scss" //if importing styles from css module, out "import * as styles from ....."
export default () => (
  <div className={styles.content}>
    <h1 className={styles.header}>Page not found</h1>
    <p>The page you are looking for is not found</p>
  </div>
)
