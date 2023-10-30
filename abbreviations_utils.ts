import * as abbreviations from './abbreviations.json';

export const getSymbolFromAbbrev = (text: String) => {
	const replace = abbreviations[text];
	console.log("looking for", text);
	return replace;
}
