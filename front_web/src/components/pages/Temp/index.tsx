import React, { useEffect } from "react";
// import axios from "axios";
// import { useCookies } from "react-cookie";
import Base from "@organisms/Base";
import Box from "@atoms/Box";
// import Input from "@atoms/Input";
import Text from "@atoms/Text";

const Temp = () => {
	// const [cookies, setCookie, removeCookie] = useCookies([
	// 	"access_token",
	// 	"refresh_token",
	// ]);

	// const test = async () => {
	// 	await axios
	// 		.post(process.env.REACT_APP_PROXY + "/v0/auth/sign", {
	// 			userId: 1,
	// 			group: 1,
	// 		})
	// 		.then((res) => {
	// 			console.log(res);
	// 			console.log(document.cookie);
	// 			// setCookie("access_token", res.headers.access_token, {
	// 			// 	path: "/",
	// 			// 	httpOnly: true,
	// 			// 	secure: true,
	// 			// });
	// 			// setCookie("refresh_token", res.headers.refresh_token, {
	// 			// 	path: "/",
	// 			// 	httpOnly: true,
	// 			// 	secure: true,
	// 			// });
	// 			console.log("complete");
	// 		})
	// 		.catch((err) => {
	// 			// removeCookie(cookies.access_token);
	// 			// removeCookie(cookies.refresh_token);
	// 			console.log(err);
	// 		});
	// };

	// const test = async (e: any) => {
	// 	const formData = new FormData();
	// 	formData.append("image", e.target.files[0]);
	// 	formData.append("username", "seonkim");
	// 	formData.append("requestId", "1");
	// 	for (const [key, value] of formData) {
	// 		console.log(key, value);
	// 	}
	// 	await axios
	// 		.post(process.env.REACT_APP_PROXY + "/v0/shops/test", formData, {
	// 			headers: {
	// 				"Content-Type": "multipart/form-data",
	// 			},
	// 		})
	// 		.then((res) => console.log(res))
	// 		.catch((err) => console.log(err));
	// };

	return (
		<Base>
			<Box>
				{/* <Input type="file" onChange={test} /> */}
				<Text>내용</Text>
			</Box>
		</Base>
	);
};

export default Temp;
