export function stringifySegmentOfPathForStringifiedZodIssue(
	segment: PropertyKey,
): string {
	switch (typeof segment) {
		case `number`: {
			const stringifiedSegment: string = segment.toString(10);
			return stringifiedSegment;
		}
		case `string`: {
			return segment;
		}
		case `symbol`: {
			const stringifiedSegment: string = segment.toString();
			return stringifiedSegment;
		}
	}
}
