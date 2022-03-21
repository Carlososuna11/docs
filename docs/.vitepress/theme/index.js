import theme from "vitepress/dist/client/theme-default";
import "vitepress-theme-demoblock/theme/styles/index.css";
import { registerComponents } from "./register-components";
import "./styles/index.css";
import Layout from "./Layout.vue";
export default {
	...theme,
	Layout,
	// NotFound: () => "custom 404", // <- this is a Vue 3 functional component
	enhanceApp({ app, router, siteData }) {
		registerComponents(app);
	},
};
