import React from "react"
import { LoaderWrapper, Dot } from "./styled"

export const Loader = () => (
  <LoaderWrapper>
    <Dot delay="0s" />
    <Dot delay=".1s" />
    <Dot delay=".2s" />
  </LoaderWrapper>
)
