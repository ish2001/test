import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Strong, Span, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Menu, Section } from "@quarkly/components";
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
		<Section padding="1px 0 1px 0" color="--light" background="--color-darkL2">
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="--lead">
					Awesome Company
				</Text>
				<Menu
					display="flex"
					justify-content="center"
					font="--base"
					font-weight="700"
					md-flex-direction="column"
					md-align-items="center"
				>
					<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
					<Override slot="link-active" color="--primary" />
					<Override slot="item" padding="6px" />
				</Menu>
			</Box>
		</Section>
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
			<Override
				slot="SectionContent"
				margin="50px 64px 0px 64px"
				sm-margin="50px 64px 0px 20px"
				sm-position="relative"
				md-position="relative"
				md-margin="50px 64px 0px 0px"
			/>
			<Text color="#ffffff" margin="16px 0px 16px 78px" font="64px rubik">
				<Strong>
					Hey🖐,
					<br />
					I'm Ishika Mitra.{"\n\n"}
				</Strong>
			</Text>
			<Text color="#ffffff" margin="16px 0px 16px 78px" font="32px sans-serif">
				{" "}A{"  "}
				<Strong
					background="--color-indigo"
					data-q-widget-type="PRIMITIVE"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					<Span
						background="--color-indigo"
						data-q-widget-type="PRIMITIVE"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						{" "}Digital{" "}
					</Span>
					<Span
						background="--color-indigo"
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
							Designer{" "}
						</Span>
					</Span>
				</Strong>
				{" "}based in Kolkata, India.
			</Text>
			<Text color="rgba(255, 255, 255, 0.47)" margin="16px 100px 16px 78px" font="26px sans-serif">
				I love crafting meaningful and impactful user experiences by connecting the dots between business goals, technical constraints, and user satisfaction. I experiment, I design, I write, and do a lot of stuffs.{"\n\n"}
			</Text>
			<Button
				margin="40px 750px 0px 78px"
				background="--color-indigo"
				padding="12px 24px 12px 24px"
				border-radius="5px"
				sm-position="relative"
				sm-left="0px"
				sm-right="0px"
				sm-margin="40px 90px 0px 78px"
				sm-padding="22px 24px 22px 24px"
				sm-font="normal 300 3px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
				md-position="relative"
				md-margin="40px 290px 0px 78px"
			>
				<Strong
					font="500 18px Rubik"
					data-q-widget-type="PRIMITIVE"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					sm-font="500 26px Rubik"
				>
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