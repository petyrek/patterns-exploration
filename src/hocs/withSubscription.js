import React from "react"
import { StreamState } from "types/StreamState"

export const withSubscription = stream$ => Component =>
  class extends React.Component {
    state = {
      stateU: StreamState.Loading,
    }

    componentWillMount() {
      this.subscription = stream$.subscribe(
        value =>
          this.setState({
            stateU:
              value === undefined
                ? StreamState.Loading
                : StreamState.Success(value),
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
