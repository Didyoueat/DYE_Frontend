import React from "react";
import A, { AProps } from "./index";

export default {
	title: "Atoms/A",
	component: A,
};

const Template = (args: AProps) => {
	return <A {...args} />;
};

export const Default = (props: AProps) => {
	return <Template {...props} />;
};
