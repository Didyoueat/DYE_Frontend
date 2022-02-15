import axios from "axios";
import { useCookies } from "react-cookie";

const useToken = async () => {
	const [cookies, setCookie, removeCookie] = useCookies([
		"access_token",
		"refresh_token",
	]);

	await axios
		.post("http://10.19.230.83:5001/v0/auth/sign", {
			userId: 1,
		})
		.then((res) => {
			console.log(res);
			setCookie("access_token", res.headers.access_token, {
				path: "/",
				// httpOnly: true,
				// secure: true,
			});
			setCookie("refresh_token", res.headers.refresh_token, {
				path: "/",
				// httpOnly: true,
				// secure: true,
			});
			return "complete";
		})
		.catch((err) => {
			console.log(err);
			removeCookie(cookies.access_token);
			return "ERROR";
		});
};

export default useToken;
