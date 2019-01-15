export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

export function receiveCaterories(categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  };
}
