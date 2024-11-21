export {};

declare global {
  interface Window {
    CSRF_TOKEN: string;
  }
}
