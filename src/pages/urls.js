import { Home } from "pages/Home"
import { Profile } from "pages/Profile"
import { S } from "sanct"

export const urls = {
  home: {
    path: "/",
    component: Home,
  },
  profile: {
    path: "/profile",
    component: Profile,
  },
}

export const paths = S.map(S.prop("path"))(urls)
