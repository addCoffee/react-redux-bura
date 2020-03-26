import React, { Component } from 'react'

export default class ErrorBoundary extends Component<{}, {hasError: boolean}> {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.warn(error);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}
