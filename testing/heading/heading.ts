export function makeHeading(text: string, level: number): string {
    if (level < 1 || level > 6) {
        throw new Error('Level must be between 1 and 6');
    }
    return `<h${level}>${text}</h${level}>`;
}
