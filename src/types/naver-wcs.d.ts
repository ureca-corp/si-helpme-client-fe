declare global {
  interface Window {
    wcs?: {
      inflow: () => void;
      trans: (conv: { type: string }) => void;
    };
    wcs_add?: Record<string, unknown>;
    _nasa?: Record<string, unknown>;
    wcs_do?: () => void;
    NA_CONV?: (type: string) => void;
  }
}

export {};
