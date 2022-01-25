const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
	app.use(
		createProxyMiddleware("/v0", {
			target: "http://localhost:4000/",
			changeOrigin: true,
		}),
	);
};
