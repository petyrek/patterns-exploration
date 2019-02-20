import React from "react"
import { BrandList } from "components/BrandList"
import { Button } from "components/Button"
import { ContentWrap } from "./styled"
import { withModal } from "hocs/withModal"
import { withOpen } from "hocs/withOpen"

const MakesModal = withModal(BrandList)

const enhancer = withOpen

export const Content = enhancer(({ isOpen, open, close }) => (
  <ContentWrap>
    <BrandList />
    <Button onClick={open} text="open modal" />
    {isOpen && <MakesModal close={close} title="makes" />}
  </ContentWrap>
))
