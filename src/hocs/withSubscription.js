import React from "react"
import daggy from "daggy"
import { Loader } from "components/Loader"

const StreamState = daggy.taggedSum("StreamState", {
  Loading: [],
  Success: ["data"],
  Failure: ["error"],
})

StreamState.prototype.def = function({
  Loading = () => <Loader />,
  Success,
  Failure = error => <div>error: {JSON.stringify(error)}</div>,
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

export const withSubscription = stream$ => Component =>
  class extends React.Component {
    state = {
      stateU: StreamState.Loading,
    }

    componentWillMount() {
      this.subscription = stream$.subscribe(
        value =>
          this.setState({
            stateU: StreamState.Success(value),
          }),
        error =>
          this.setState({
            stateU: StreamState.Failure(error),
          }),
      )
    }

    componentWillUnmount() {
      this.subscription.unsubscribe()
    }

    render() {
      return <Component {...this.props} stateU={this.state.stateU} />
    }
  }
