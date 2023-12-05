export const HairColors = ['', 'black', 'blonde', 'red', 'darkbrown'] as const;
export type HairColor = typeof HairColors[number];

export interface User {
  id?: string;
  name: string;
  firstName?: string;
  lastName?: string;
  birthDate?: Date;
  hairColor?: HairColor;
}
