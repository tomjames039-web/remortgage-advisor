// Google Analytics / Google Ads gtag type declarations
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: {
        send_to?: string;
        value?: number;
        currency?: string;
        [key: string]: unknown;
      }
    ) => void;
    dataLayer: unknown[];
  }
}

export {};
