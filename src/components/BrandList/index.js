import React from "react"
import { withCollection } from "hocs/withCollection"

const enhancer = withCollection("makes")

export const BrandList = enhancer(({ stateU }) =>
  stateU.map(data => (
    <ul>
      {data.map(x => (
        <li key={x.id}>{x.name}</li>
      ))}
    </ul>
  )),
)
