export const joinClasses = (...classNames: (string | false | undefined)[]): string | undefined => {
	if (!classNames || !Array.isArray(classNames)) {
		console.warn("joinClasses returned ''");
		return undefined;
	}
	if (classNames.length === 1) return classNames[0] as string;

	let sanitizedClasses: string[] | string = [];

	for (const className of classNames) {
		if (Boolean(className)) sanitizedClasses.push(className as string);
	}

	const classes = sanitizedClasses.join(' ');

	return Boolean(classes.length) ? classes : undefined;
};
