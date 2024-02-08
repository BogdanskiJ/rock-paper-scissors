import iconPaper from "../../images/icon-paper.svg";
import iconRock from "../../images/icon-rock.svg";
import iconLizard from "../../images/icon-lizard.svg";
import iconScissors from "../../images/icon-scissors.svg";
import iconSpock from "../../images/icon-spock.svg";

export const iconNormalData = [
	{
		name: "paper",
		src: iconPaper,
		position: {
			top: 0,
			bottom: "unset",
			left: 0,
			right: "unset",
		},
		transform: {
			x: "-50%",
			y: "-50%",
		},
		colors: {
			first: "hsl(230, 89%, 52%)",
			second: "hsl(230, 89%, 65%)",
		},
	},
	{
		name: "rock",
		src: iconRock,
		position: {
			top: "unset",
			bottom: 0,
			left: "50%",
			right: "unset",
		},
		transform: {
			x: "-50%",
			y: "50%",
		},
		colors: {
			first: "hsl(349, 71%, 42%)",
			second: "hsl(349, 70%, 56%)",
		},
	},
	{
		name: "scissors",
		src: iconScissors,
		position: {
			top: 0,
			bottom: "unset",
			left: "unset",
			right: 0,
		},
		transform: {
			x: "50%",
			y: "-50%",
		},
		colors: {
			first: "hsl(39, 89%, 39%)",
			second: "hsl(40, 84%, 53%)",
		},
	},
];

export const iconExternalData = [
	{
		name: "paper",
		src: iconPaper,
		position: {
			top: "33%",
			bottom: "unset",
			left: "unset",
			right: 0,
		},
		transform: {
			x: "50%",
			y: "-50%",
		},
		colors: {
			first: "hsl(230, 89%, 52%)",
			second: "hsl(230, 89%, 65%)",
		},
	},
	{
		name: "rock",
		src: iconRock,
		position: {
			top: "unset",
			bottom: 0,
			left: "50%",
			right: "unset",
		},
		transform: {
			x: "0%",
			y: "50%",
		},
		colors: {
			first: "hsl(349, 71%, 42%)",
			second: "hsl(349, 70%, 56%)",
		},
	},
	{
		name: "scissors",
		src: iconScissors,
		position: {
			top: 0,
			bottom: "unset",
			left: "50%",
			right: "unset",
		},
		transform: {
			x: "-50%",
			y: "-50%",
		},
		colors: {
			first: "hsl(39, 89%, 39%)",
			second: "hsl(40, 84%, 53%)",
		},
	},
	{
		name: "spock",
		src: iconSpock,
		position: {
			top: "33%",
			bottom: "unset",
			left: 0,
			right: "unset",
		},
		transform: {
			x: "-50%",
			y: "-50%",
		},
		colors: {
			first: "hsl(189, 59%, 35%)",
			second: "hsl(189, 58%, 57%)",
		},
	},
	{
		name: "lizard",
		src: iconLizard,
		position: {
			top: "unset",
			bottom: 0,
			left: 0,
			right: "unset",
		},
		transform: {
			x: "-15%",
			y: "50%",
		},
		colors: {
			first: "hsl(261, 73%, 52%)",
			second: "hsl(261, 72%, 63%)",
		},
	},
];
