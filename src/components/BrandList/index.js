import React from "react"
import { withCollection } from "hocs/withCollection"

const C = ({ state }) =>
  state.map(data => (
    <ul>
      {data.map(x => (
        <li key={x.id}>{x.name}</li>
      ))}
    </ul>
  ))

export const BrandList = withCollection("makes")(C)
