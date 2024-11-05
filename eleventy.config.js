import { DateTime } from "luxon";

export default async function(eleventyConfig) {

	// Date handling
	// eleventyConfig.addDateParsing(function(dateValue) {
	// 	if (dateValue !== undefined) {
	// 		console.log('defined');
	// 		console.log(dateValue);
	// 		console.log(DateTime.fromFormat(dateValue, "yyyy-MM-dd"));
	// 		// return DateTime.fromFormat(dateValue, "yyyy-MM-dd");
	// 	} else {
	// 		console.log('UNdefined');
	// 		console.log(dateValue);
	// 		return dateValue;
	// 	}
	// });
};
