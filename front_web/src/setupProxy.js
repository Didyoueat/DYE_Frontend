const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
	app.use(
		createProxyMiddleware("/v0", {
			target: "http://8402-121-135-181-61.ngrok.io",
			changeOrigin: true,
		})
	);
};
