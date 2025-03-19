import { DateTime } from "luxon";

export default function(eleventyConfig) {
	eleventyConfig.addDateParsing(function(dateValue) {
		if (typeof dateValue === "string") {
			return DateTime.fromFormat(dateValue, "yyyy-MM-dd HH:mm:ss ZZZ");
		}
	});
};