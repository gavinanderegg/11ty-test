import { DateTime } from "luxon";

export default async function(eleventyConfig) {

	// Date handling
	eleventyConfig.addDateParsing(function(dateValue) {
		if (dateValue !== undefined) {
			return DateTime.fromFormat(dateValue, "yyyy-MM-dd hh:mm:ss z");
		} else {
			return dateValue;
		}
	});
};
