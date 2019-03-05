import React from "react"
import { BrandList } from "components/BrandList"
import { Button } from "components/Button"
import { withModal } from "hocs/withModal"
import { withOpen } from "hocs/withOpen"

const MakesModal = withModal(BrandList)

const enhancer = withOpen

export const Home = enhancer(({ isOpen, toggle, close }) => (
  <>
    <BrandList />
    <Button onClick={toggle} text="open modal" />
    {isOpen && <MakesModal close={close} title="makes" />}
  </>
))
