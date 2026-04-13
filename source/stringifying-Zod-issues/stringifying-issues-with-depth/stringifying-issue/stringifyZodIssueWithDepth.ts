import {
	stringifyInvalidUnionZodIssueWithDepth,
	stringifyUnknownZodIssueWithDepth,
} from "./implementations/index.ts";
import type {z} from "zod";
export function stringifyZodIssueWithDepth(
	issue: z.core.$ZodIssue,
	depth: number,
): string {
	switch (issue.code) {
		case `custom`:
		case `invalid_element`:
		case `invalid_format`:
		case `invalid_key`:
		case `invalid_type`:
		case `invalid_value`:
		case `not_multiple_of`:
		case `too_big`:
		case `too_small`:
		case `unrecognized_keys`: {
			const stringifiedIssue: string = stringifyUnknownZodIssueWithDepth(
				issue,
				depth,
			);
			return stringifiedIssue;
		}
		case `invalid_union`: {
			const stringifiedIssue: string = stringifyInvalidUnionZodIssueWithDepth(
				issue,
				depth,
			);
			return stringifiedIssue;
		}
	}
}
