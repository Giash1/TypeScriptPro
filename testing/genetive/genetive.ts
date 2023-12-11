export function getGenitive(name: string): string {
  return name.endsWith('s') ? `${name}'` : `${name}'s`;
}
//  the ternary conditional operator ?,
// which is a shorthand for if/else.
