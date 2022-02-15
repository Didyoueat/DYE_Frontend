import React, { useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import Text from "@atoms/Text";
import Base from "@organisms/Base";

const Temp = () => {
	const [cookies, setCookie, removeCookie] = useCookies([
		"access_token",
		"refresh_token",
	]);

	const test = async () => {
		await axios
			.post(process.env.REACT_APP_PROXY + "/v0/auth/sign", {
				userId: 1,
				group: 1,
			})
			.then((res) => {
				console.log(res);
				console.log(document.cookie);
				// setCookie("access_token", res.headers.access_token, {
				// 	path: "/",
				// 	httpOnly: true,
				// 	secure: true,
				// });
				// setCookie("refresh_token", res.headers.refresh_token, {
				// 	path: "/",
				// 	httpOnly: true,
				// 	secure: true,
				// });
				console.log("complete");
			})
			.catch((err) => {
				// removeCookie(cookies.access_token);
				// removeCookie(cookies.refresh_token);
				console.log(err);
			});
	};

	// useEffect(() => {
	// 	test();
	// }, []);

	return (
		<Base>
			<Text>페이지 내용</Text>
		</Base>
	);
};

export default Temp;
