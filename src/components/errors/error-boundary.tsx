import React, { ReactNode } from 'react';

type FallbackRender = (error: Error) => ReactNode;
type FallbackNode = ReactNode | FallbackRender;

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: FallbackNode | FallbackRender;
  onError?: (error: Error) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    console.error('Error capturado en getDerivedStateFromError:', error);
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error) {
    console.error('Error capturado en componentDidCatch:', error);
    if (this.props.onError) {
      this.props.onError(error);
    }
  }

  resetError = () => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      if (typeof this.props.fallback === 'function') {
        return this.props.fallback(this.state.error!);
      }

      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className='error-boundary-fallback'>
          <h2>Algo salió mal</h2>
          <p>Ha ocurrido un error inesperado</p>
          <button onClick={this.resetError}>Reintentar</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export function withErrorBoundary<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  options?: {
    fallback?: FallbackNode;
    onError?: (error: Error) => void;
  }
) {
  const ComponentWithErrorBoundary = (props: P) => (
    <ErrorBoundary fallback={options?.fallback} onError={options?.onError}>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  );

  ComponentWithErrorBoundary.displayName = `WithErrorBoundary(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return ComponentWithErrorBoundary;
}
