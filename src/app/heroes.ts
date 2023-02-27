export interface HERO {
  name: string;
  top?: boolean;
  id: number;
}
export const HEROES: HERO[] = [
  { name: 'Bombasto', top: true, id: 1 },
  { name: 'Celeritas', top: true, id: 2 },
  { name: 'Magneta', top: true, id: 3 },
  { name: 'Rubberman', top: true, id: 4 },
  { name: 'Spiderman', top: false, id: 5 },
  { name: 'Hulk', top: false, id: 6 },
  { name: 'Dr. Strange', top: false, id: 7 },
  { name: 'Batman', top: false, id: 8 },
];
