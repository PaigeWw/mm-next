import { parse } from "querystring"

export const px2rem = (px) => `${px / (750 / 10)}rem`
export const pptPx2rem = (px) => `${px / (1920 / 10)}rem`

// export const baseUrl = "http://8.209.64.159:3001/"
export const baseUrl = "http://192.168.124.25:3000/"

export const getPageQuery = () => parse(window.location.href.split("?")[1])

// const jjj =
