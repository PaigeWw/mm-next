import { parse } from "querystring"

export const px2rem = (px) => `${px / (750 / 10)}rem`
export const pptPx2rem = (px) => `${px / (1920 / 10)}rem`

// export const baseUrl = "http://8.209.64.159:3001/"
export const baseUrl = "/"
// export const baseUrl = "http://localhost:3001/"

export const getPageQuery = () => parse(window.location.href.split("?")[1])
export const guid = () => {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
		var r = (Math.random() * 16) | 0,
			v = c == "x" ? r : (r & 0x3) | 0x8
		return v.toString(16)
	})
}
