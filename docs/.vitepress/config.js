// vitepress/config.js
module.exports = {
	title: "Docs",
	base: "/", //  The default path during deployment / secondary address / base can be used/
	Lang: "es Es",
	// Page header configuration, icon, css, js
	head: [
		// Change the icon of the title
		[
			"link",
			{
				rel: "icon",
				href: "./console.png", //The pictures are placed in the public folder
			},
		],
	],
	// Theme configuration
	themeConfig: {
		repo: "carlososuna11/docs", // Your github warehouse address will jump in the upper right corner of the page
		//   Head navigation
		logo: "./console.png",
		// nav: [
		// 	{
		// 		text: "front-end technology",
		// 		items: [
		// 			{ text: "TS", link: "/ts/basics", activeMatch: "^/ts/" },
		// 			{ text: "vue", link: "/skills/vue/" },
		// 		],
		// 	},
		// ],

		// sidebar: {
		// 	"/ts/": getTsSidebar(),
		// },
	},
	markdown: {
		// options for markdown-it-anchor
		anchor: { permalink: false },

		// options for markdown-it-toc
		toc: { includeLevel: [1, 2] },

		config: (md) => {
			const { demoBlockPlugin } = require("vitepress-theme-demoblock");
			md.use(demoBlockPlugin, {
				cssPreprocessor: "less",
			});
		},
	},
};

function getTsSidebar() {
	return [
		{
			text: "Basic knowledge",
			children: [
				{ text: "Basics", link: "/ts/basics" }, // Link corresponds to the link of the header navigation, and the access file is docs/ts/basics.md file
				{ text: "Built in type", link: "/ts/inside-type" },
			],
		},
	];
}
