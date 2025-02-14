'use client';

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
} from 'react';
import { Toaster, toast } from 'sonner';
// import { useTranslations } from 'next-intl';

/**
 * Defines the type of the flash messages context.
 */
interface FlashContextValue {
  /**
   * Shows an error message.
   * @param message Message to display.
   */
  error(message: string, timeout?: number): void;
  /**
   * Shows a success message.
   * @param message Message to display.
   * @param typeMessage Message type e.g., Promise or Success
   * @param timeout Duration in milliseconds that the message will be displayed. Default is 3000ms.
   */
  success(message: string, typeMessage?: string, timeout?: number): void;
  /** Clears all current notifications. */
  clear(): void;
}

/**
 * Creates the context to use notifications from any part of the application.
 */
const FlashContext = createContext<FlashContextValue | null>(null);

export interface FlashProviderProps {
  children: ReactNode;
}

/**
 * FlashProvider wraps the application and provides functions to trigger notifications.
 * In this example, Sonner is used for toast visualization.
 */
export function FlashProvider({ children }: FlashProviderProps) {
  // const t = useTranslations('Flash');

  // Function to show an error. Configures an infinite duration for the user to manually dismiss it.
  const error = useCallback((message: string, timeout = 1000) => {
    toast.error(message, {
      // You can customize the duration or other options as needed.
      duration: timeout,
    });
  }, []);

  // Function to show a success message, which auto-fades after a time (default 3000ms).
  const success = useCallback(
    (message: string, typeMessage = 'success', timeout = 1000) => {
      if (typeMessage === 'promise') {
        const promise = (): Promise<{ name: string }> =>
          new Promise((resolve) =>
            setTimeout(() => resolve({ name: message }), timeout)
          );
        toast.promise(promise, {
          loading: `${message}`,
          success: (data: { name: string }) => {
            return `${data.name}`;
          },
          error: 'Error',
          duration: timeout,
        });
      } else {
        toast.success(message, {
          duration: timeout,
        });
      }
    },
    []
  );

  // Function to clear all notifications.
  const clear = useCallback(() => {
    toast.dismiss();
  }, []);

  // Memorizes the context value to avoid unnecessary re-renders.
  const contextValue = useMemo(
    () => ({
      error,
      success,
      clear,
    }),
    [error, success, clear]
  );

  return (
    <FlashContext.Provider value={contextValue}>
      {children}
      {/* The Toaster component is responsible for rendering the toasts in the specified position */}
      <Toaster position='top-center' richColors expand />
    </FlashContext.Provider>
  );
}

/**
 * Hook to use flash message functions in any component.
 * Throws an error if used outside of FlashProvider.
 */
export function useFlash() {
  const context = useContext(FlashContext);
  if (!context) {
    throw new Error('useFlash must be used within FlashProvider.');
  }
  return context;
}
