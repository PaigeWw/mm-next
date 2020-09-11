import { parse } from "querystring"

export const px2rem = (px) => `${px / (750 / 10)}rem`
export const pptPx2rem = (px) => `${px / (1920 / 10)}rem`

export const baseUrl = "http://8.209.64.159:3001/"
// export const baseUrl = "/"
// export const baseUrl = "http://localhost:3001/"
// export const baseUrl = "https://we-idesign.com/"
export const downloadUrl = "https://crm.we-idesign.com/"
export const imgUrl = "https://ik.imagekit.io/"
export const getPageQuery = () => parse(window.location.href.split("?")[1])
export const guid = () => {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
		var r = (Math.random() * 16) | 0,
			v = c == "x" ? r : (r & 0x3) | 0x8
		return v.toString(16)
	})
}

export const filterImageUrl = (url) => {
	if (!url || !url.split) {
		return ""
	}
	let arrs = url.split("/")
	// 本地数据
	if (arrs.length >= 3) {
		if (url.indexOf(".svg") >= 0) {
			console.log("svg-url", `/${url}`)

			return `https://we-idesign.com/${url}`
		} else {
			return `${imgUrl}mrmiss//${arrs[2]}`
		}
	} else {
		return `${imgUrl}${url}`
	}
}
