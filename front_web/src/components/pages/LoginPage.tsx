import React, { useState } from "react";
import {
	LoginPageStyle,
	LoginBlock,
	LoginInput,
	LoginButton,
	FindPassword,
} from "./LoginPageStyle";
import logo from "../../assets/logo.svg";

const LoginPage = () => {
	const [userid, setUserid] = useState("");
	const [passwd, setPasswd] = useState("");
	const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.preventDefault();
		console.log("userid:", userid, "passwd:", passwd);
		setUserid("");
		setPasswd("");
	};

	return (
		<LoginPageStyle>
			<LoginBlock>
				<img src={logo} alt="dye_logo" />
				<h2>사장님 관리 페이지</h2>
				<LoginInput
					type="text"
					placeholder=" 사장님 아이디"
					value={userid}
					onChange={(e) => setUserid(e.target.value)}
				/>
				<LoginInput
					type="password"
					placeholder=" 사장님 비밀번호"
					value={passwd}
					onChange={(e) => setPasswd(e.target.value)}
				/>
				<LoginButton onClick={(e) => handleClick(e)}>
					<div className="login">로그인</div>
				</LoginButton>
				<FindPassword to="../">비밀번호 찾기</FindPassword>
			</LoginBlock>
		</LoginPageStyle>
	);
};

export default LoginPage;
