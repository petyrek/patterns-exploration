import React from "react"
import { IconWrap } from "./styled"

export const Icon = ({ icon: I, char, onClick }) => (
  <IconWrap onClick={onClick}>{I ? <I /> : char}</IconWrap>
)
