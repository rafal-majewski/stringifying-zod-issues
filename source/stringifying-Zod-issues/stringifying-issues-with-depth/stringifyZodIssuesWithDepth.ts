import {stringifyZodIssueWithDepth} from "./stringifying-issue/index.ts";
import type {z} from "zod";
export function stringifyZodIssuesWithDepth(
	issues: readonly z.core.$ZodIssue[],
	depth: number,
): string {
	const stringifiedIssues: readonly string[] = issues.map<string>(
		function mapIssue(issue: z.core.$ZodIssue): string {
			const stringifiedIssue: string = stringifyZodIssueWithDepth(issue, depth);
			return stringifiedIssue;
		},
	);
	return stringifiedIssues.join(`\n`);
}
