export default {
	permalink: function (data) {
		console.log(data.page.date);

		let day = data.page.date.getUTCDate();
		let month = data.page.date.getUTCMonth() + 1;
		let year = data.page.date.getFullYear();

		let pDay = day.toString().padStart(2, '0');
		let pMonth = month.toString().padStart(2, '0');

		return `/${year}/${pMonth}/${pDay}/${data.page.fileSlug}.html`;
	},
};