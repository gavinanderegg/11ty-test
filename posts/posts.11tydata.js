export default {
	permalink: function (data) {
		// console.log(data);

		return `/${data.page.date.getFullYear()}/${data.page.date.month}/${data.page.date.day}/${data.page.fileSlug}`;
	},
};