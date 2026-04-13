import {stringifySegmentOfPathForStringifiedZodIssue} from "./stringifying-segment-of-path/index.ts";
export function stringifyPathForStringifiedZodIssue(
	path: readonly PropertyKey[],
): string {
	const stringifiedSegmentsOfPath: readonly string[] = path.map<string>(
		function mapSegmentOfPath(segment: PropertyKey): string {
			const stringifiedSegment: string =
				stringifySegmentOfPathForStringifiedZodIssue(segment);
			const stringifiedSegmentWithSeparator: string = `${stringifiedSegment}: `;
			return stringifiedSegmentWithSeparator;
		},
	);
	const stringifiedPath: string = stringifiedSegmentsOfPath.join(``);
	return stringifiedPath;
}
