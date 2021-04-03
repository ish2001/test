import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Text, Span, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-darkL2"
			display="flex"
			flex-direction="column"
			filter="url()"
			font="34"
		>
			<Override slot="SectionContent" margin="50px 64px 0px 64px" />
			<Text color="#ffffff" margin="16px 0px 16px 78px" font="64px rubik">
				<Strong>
					Hey🖐,
					<br />
					I'm Ishika Mitra.{"\n\n"}
				</Strong>
			</Text>
			<Text color="#ffffff" margin="16px 0px 16px 78px" font="32px sans-serif">
				{" "}A{" "}
				<Strong background="#e34bff">
					Digital{" "}
				</Strong>
				<Strong
					background="#da4eff"
					data-q-widget-type="PRIMITIVE"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Product{" "}
					<Span
						data-q-widget-type="PRIMITIVE"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						Designer
					</Span>
				</Strong>
				{" "}based in Kolkata, India.
			</Text>
			<Text color="rgba(255, 255, 255, 0.47)" margin="16px 100px 16px 78px" font="26px sans-serif">
				I love crafting meaningful and impactful user experiences by connecting the dots between business goals, technical constraints, and user satisfaction. I experiment, I design, I write, and do a lot of stuffs.{"\n\n"}
			</Text>
			<Button margin="40px 750px 0px 78px">
				<Strong font="24px Rubik">
					Get in touch with
					<Span
						data-q-widget-type="PRIMITIVE"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						{" "}
					</Span>
					me{" "}
				</Strong>
			</Button>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});