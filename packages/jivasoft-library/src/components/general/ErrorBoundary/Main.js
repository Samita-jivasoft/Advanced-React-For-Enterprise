
import React, { Component } from 'react';

export class ErrorBoundary extends React.Component {
    state = { error: null }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { error };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log('logErrorToService: ', error);
    }

    render() {
        const { error } = this.state
        if (error) {
            return (this.props.FallbackComponent ? <this.props.FallbackComponent error={error} /> : <h1>There was an unexpected error.</h1>)
        }

        return this.props.children;
    }
}