// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
	app.use(
		createProxyMiddleware("/v0", {
			target: process.env.REACT_APP_PROXY,
			changeOrigin: true,
		}),
	);
};
