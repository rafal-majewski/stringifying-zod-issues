export function computeIndentForStringifiedZodIssue(depth: number): string {
	const indent: string = `	`.repeat(depth);
	return indent;
}
