export const ITEM = {
  COFFEE: 'IC001',
  BREAD: 'IC002',
  ICE: 'IC003',
} as const;

export const ITEM_NAME_MAP = {
  [ITEM.COFFEE]: "コーヒー",
  [ITEM.BREAD]: "バン",
  [ITEM.ICE]: "アイスクリーム",
};

// Define type for ITEM
export type Item = (typeof ITEM)[keyof typeof ITEM];
