
import  { Component, ErrorInfo, ReactNode } from 'react';
import styles from '../components/atoms/errorModal/errorMod.module.css';
interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error on render:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <>
          <div className={styles.modalOverlay}>
            <div className={styles.modal}>
              <div className={styles.textDiv}>
                {' '}
                <h3>что-то пошло не так мы разбираемся</h3>
                <div className={styles.divButtons}>
                  <button
                   
                    onClick={() => this.setState({ hasError: false })}
                  > назад </button>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
