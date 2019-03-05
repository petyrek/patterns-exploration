import React from "react"
import daggy from "daggy"
import { Loader } from "components/Loader"
import { Error } from "components/Error"

export const StreamState = daggy.taggedSum("StreamState", {
  Loading: [],
  Success: ["data"],
  Failure: ["error"],
})

StreamState.prototype.def = function({
  Loading = () => <Loader />,
  Success,
  Failure = error => <Error error={JSON.stringify(error)} />,
}) {
  return this.cata({
    Loading,
    Success,
    Failure,
  })
}

StreamState.prototype.map = function(render) {
  return this.def({ Success: render })
}
