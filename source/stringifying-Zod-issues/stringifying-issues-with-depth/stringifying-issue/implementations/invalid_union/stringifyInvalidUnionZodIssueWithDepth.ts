import {stringifyZodIssuesWithDepth} from "../../../stringifyZodIssuesWithDepth.ts";
import {computeIndentForStringifiedZodIssue} from "../../computing-indent/index.ts";
import {stringifyPathForStringifiedZodIssue} from "../../stringifying-path/index.ts";
import {computeSeparatorForStringifiedInvalidUnionZodIssue} from "./computing-separator/index.ts";
import type {z} from "zod";
export function stringifyInvalidUnionZodIssueWithDepth(
	issue: z.core.$ZodIssueInvalidUnion,
	depth: number,
): string {
	const indent: string = computeIndentForStringifiedZodIssue(depth);
	const stringifiedPath: string = stringifyPathForStringifiedZodIssue(
		issue.path,
	);
	const separator: string = computeSeparatorForStringifiedInvalidUnionZodIssue(
		depth + 1,
	);
	const stringifiedIssue: string = `${indent}${stringifiedPath}and one of:
${issue.errors
	.map<string>(function mapNestedIssues(
		nestedIssues: readonly z.core.$ZodIssue[],
	): string {
		const stringifiedNestedIssues: string = stringifyZodIssuesWithDepth(
			nestedIssues,
			depth + 1,
		);
		return stringifiedNestedIssues;
	})
	.join(separator)}`;
	return stringifiedIssue;
}
