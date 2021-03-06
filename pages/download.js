import React, { useEffect, useState } from "react"
import { Flex, Text, Box, Button, Image } from "rebass"
import Head from "../components/head"
import { getPageQuery } from "../utils/helper"
import request from "../utils/request.js"
import dynamic from "next/dynamic"
const DynamicComponentWithNoSSR = dynamic(import("../components/excel"), {
	ssr: false,
})
export default () => (
	<div>
		<Head />
		<DynamicComponentWithNoSSR></DynamicComponentWithNoSSR>
	</div>
)
