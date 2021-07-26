// === action types
export const HIDE_LOADER = 'HIDE_LOADER';
export const DISPLAY_LOADER = 'DISPLAY_LOADER';

// === action creators
export const displayLoader = () => ({
  type: DISPLAY_LOADER,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
});
