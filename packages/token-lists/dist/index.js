import fs from 'fs';
import path from 'path';
import { getAddress, isAddress } from '@ethersproject/address';
import { request, gql } from 'graphql-request';
import slugify from 'slugify';
import axios from 'axios';
import _ from 'lodash';
import { ethers } from 'ethers';

var name$6 = "LibraX Default";
var timestamp$6 = "2022-03-01T08:37:04.410Z";
var version$6 = {
	major: 2,
	minor: 16,
	patch: 5
};
var logoURI$6 = "https://librax.finance/logo.png";
var keywords$6 = [
	"twinklibraxleswap",
	"default"
];
var tokens$6 = [
	{
		name: "Astar",
		address: "0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720",
		symbol: "WASTR",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720.png"
	},
	{
		name: "Shiden",
		address: "0x75364D4F779d0Bd0facD9a218c67f87dD9Aff3b4",
		symbol: "WSDN",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x75364D4F779d0Bd0facD9a218c67f87dD9Aff3b4.png"
	},
	{
		name: "USDC",
		address: "0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98",
		symbol: "USDC",
		decimals: 6,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98.png"
	},
	{
		name: "DAI",
		address: "0x6De33698e9e9b787e09d3Bd7771ef63557E148bb",
		symbol: "DAI",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x6De33698e9e9b787e09d3Bd7771ef63557E148bb.png"
	},
	{
		name: "ETH",
		address: "0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c",
		symbol: "ETH",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c.png"
	},
	{
		name: "BTC",
		address: "0xad543f18cFf85c77E140E3E5E3c3392f6Ba9d5CA",
		symbol: "BTC",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xad543f18cFf85c77E140E3E5E3c3392f6Ba9d5CA.png"
	},
	{
		name: "MATIC",
		address: "0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF",
		symbol: "MATIC",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF.png"
	},
	{
		name: "BNB",
		address: "0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52",
		symbol: "BNB",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52.png"
	},
	{
		name: "BUSD",
		address: "0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E",
		symbol: "BUSD",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E.png"
	}
];
var defaultList = {
	name: name$6,
	timestamp: timestamp$6,
	version: version$6,
	logoURI: logoURI$6,
	keywords: keywords$6,
	tokens: tokens$6
};

var name$5 = "LibraX Extended";
var timestamp$5 = "2022-03-14T09:47:16.403Z";
var version$5 = {
	major: 2,
	minor: 16,
	patch: 77
};
var logoURI$5 = "https://pancakeswap.finance/logo.png";
var keywords$5 = [
	"librax",
	"extended"
];
var tokens$5 = [
	{
		name: "Astar",
		address: "0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720",
		symbol: "WASTR",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720.png"
	},
	{
		name: "Shiden",
		address: "0x75364D4F779d0Bd0facD9a218c67f87dD9Aff3b4",
		symbol: "WSDN",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x75364D4F779d0Bd0facD9a218c67f87dD9Aff3b4.png"
	},
	{
		name: "USDC",
		address: "0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98",
		symbol: "USDC",
		decimals: 6,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98.png"
	},
	{
		name: "DAI",
		address: "0x6De33698e9e9b787e09d3Bd7771ef63557E148bb",
		symbol: "DAI",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x6De33698e9e9b787e09d3Bd7771ef63557E148bb.png"
	},
	{
		name: "ETH",
		address: "0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c",
		symbol: "ETH",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c.png"
	},
	{
		name: "BTC",
		address: "0xad543f18cFf85c77E140E3E5E3c3392f6Ba9d5CA",
		symbol: "BTC",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xad543f18cFf85c77E140E3E5E3c3392f6Ba9d5CA.png"
	},
	{
		name: "MATIC",
		address: "0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF",
		symbol: "MATIC",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF.png"
	},
	{
		name: "BNB",
		address: "0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52",
		symbol: "BNB",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52.png"
	},
	{
		name: "BUSD",
		address: "0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E",
		symbol: "BUSD",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E.png"
	}
];
var extendedtList = {
	name: name$5,
	timestamp: timestamp$5,
	version: version$5,
	logoURI: logoURI$5,
	keywords: keywords$5,
	tokens: tokens$5
};

var name$4 = "PancakeSwap Top 15";
var timestamp$4 = "2022-03-01T08:37:57.425Z";
var version$4 = {
	major: 2,
	minor: 17,
	patch: 2
};
var logoURI$4 = "https://pancakeswap.finance/logo.png";
var keywords$4 = [
	"pancakeswap",
	"top 15"
];
var tokens$4 = [
	{
		name: "Astar",
		address: "0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720",
		symbol: "WASTR",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720.png"
	},
	{
		name: "Shiden",
		address: "0x75364D4F779d0Bd0facD9a218c67f87dD9Aff3b4",
		symbol: "WSDN",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x75364D4F779d0Bd0facD9a218c67f87dD9Aff3b4.png"
	},
	{
		name: "USDC",
		address: "0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98",
		symbol: "USDC",
		decimals: 6,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98.png"
	},
	{
		name: "DAI",
		address: "0x6De33698e9e9b787e09d3Bd7771ef63557E148bb",
		symbol: "DAI",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x6De33698e9e9b787e09d3Bd7771ef63557E148bb.png"
	},
	{
		name: "ETH",
		address: "0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c",
		symbol: "ETH",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c.png"
	},
	{
		name: "BTC",
		address: "0xad543f18cFf85c77E140E3E5E3c3392f6Ba9d5CA",
		symbol: "BTC",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xad543f18cFf85c77E140E3E5E3c3392f6Ba9d5CA.png"
	},
	{
		name: "MATIC",
		address: "0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF",
		symbol: "MATIC",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF.png"
	},
	{
		name: "BNB",
		address: "0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52",
		symbol: "BNB",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52.png"
	},
	{
		name: "BUSD",
		address: "0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E",
		symbol: "BUSD",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E.png"
	}
];
var top15List = {
	name: name$4,
	timestamp: timestamp$4,
	version: version$4,
	logoURI: logoURI$4,
	keywords: keywords$4,
	tokens: tokens$4
};

var name$3 = "PancakeSwap Top 100";
var timestamp$3 = "2022-03-01T08:36:38.679Z";
var version$3 = {
	major: 2,
	minor: 16,
	patch: 12
};
var logoURI$3 = "https://pancakeswap.finance/logo.png";
var keywords$3 = [
	"pancakeswap",
	"top 100"
];
var tokens$3 = [
	{
		name: "Astar",
		address: "0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720",
		symbol: "WASTR",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720.png"
	},
	{
		name: "Shiden",
		address: "0x75364D4F779d0Bd0facD9a218c67f87dD9Aff3b4",
		symbol: "WSDN",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x75364D4F779d0Bd0facD9a218c67f87dD9Aff3b4.png"
	},
	{
		name: "USDC",
		address: "0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98",
		symbol: "USDC",
		decimals: 6,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98.png"
	},
	{
		name: "DAI",
		address: "0x6De33698e9e9b787e09d3Bd7771ef63557E148bb",
		symbol: "DAI",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x6De33698e9e9b787e09d3Bd7771ef63557E148bb.png"
	},
	{
		name: "ETH",
		address: "0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c",
		symbol: "ETH",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c.png"
	},
	{
		name: "BTC",
		address: "0xad543f18cFf85c77E140E3E5E3c3392f6Ba9d5CA",
		symbol: "BTC",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xad543f18cFf85c77E140E3E5E3c3392f6Ba9d5CA.png"
	},
	{
		name: "MATIC",
		address: "0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF",
		symbol: "MATIC",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF.png"
	},
	{
		name: "BNB",
		address: "0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52",
		symbol: "BNB",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52.png"
	},
	{
		name: "BUSD",
		address: "0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E",
		symbol: "BUSD",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E.png"
	}
];
var top100tList = {
	name: name$3,
	timestamp: timestamp$3,
	version: version$3,
	logoURI: logoURI$3,
	keywords: keywords$3,
	tokens: tokens$3
};

var name$2 = "CoinGecko";
var timestamp$2 = "2022-03-11T04:24:59.070Z";
var version$2 = {
	major: 1,
	minor: 0,
	patch: 5
};
var logoURI$2 = "https://www.coingecko.com/assets/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png";
var keywords$2 = [
	"defi"
];
var tokens$2 = [
];
var coingeckoList = {
	name: name$2,
	timestamp: timestamp$2,
	version: version$2,
	logoURI: logoURI$2,
	keywords: keywords$2,
	tokens: tokens$2
};

var name$1 = "PancakeSwap Mini";
var timestamp$1 = "2022-03-09T22:55:34.170Z";
var version$1 = {
	major: 1,
	minor: 0,
	patch: 0
};
var logoURI$1 = "https://pancakeswap.finance/logo.png";
var keywords$1 = [
	"pancakeswap",
	"binance",
	"mini program",
	"mini"
];
var tokens$1 = [
	{
		name: "Astar",
		address: "0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720",
		symbol: "WASTR",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720.png"
	},
	{
		name: "Shiden",
		address: "0x75364D4F779d0Bd0facD9a218c67f87dD9Aff3b4",
		symbol: "WSDN",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x75364D4F779d0Bd0facD9a218c67f87dD9Aff3b4.png"
	},
	{
		name: "USDC",
		address: "0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98",
		symbol: "USDC",
		decimals: 6,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98.png"
	},
	{
		name: "DAI",
		address: "0x6De33698e9e9b787e09d3Bd7771ef63557E148bb",
		symbol: "DAI",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x6De33698e9e9b787e09d3Bd7771ef63557E148bb.png"
	},
	{
		name: "ETH",
		address: "0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c",
		symbol: "ETH",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c.png"
	},
	{
		name: "BTC",
		address: "0xad543f18cFf85c77E140E3E5E3c3392f6Ba9d5CA",
		symbol: "BTC",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xad543f18cFf85c77E140E3E5E3c3392f6Ba9d5CA.png"
	},
	{
		name: "MATIC",
		address: "0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF",
		symbol: "MATIC",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF.png"
	},
	{
		name: "BNB",
		address: "0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52",
		symbol: "BNB",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52.png"
	},
	{
		name: "BUSD",
		address: "0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E",
		symbol: "BUSD",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E.png"
	}
];
var miniList = {
	name: name$1,
	timestamp: timestamp$1,
	version: version$1,
	logoURI: logoURI$1,
	keywords: keywords$1,
	tokens: tokens$1
};

var name = "PancakeSwap Mini Ext";
var timestamp = "2022-03-10T06:46:35.797Z";
var version = {
	major: 1,
	minor: 0,
	patch: 0
};
var logoURI = "https://pancakeswap.finance/logo.png";
var keywords = [
	"pancakeswap",
	"binance",
	"mini program",
	"mini",
	"extended"
];
var tokens = [
	{
		name: "Astar",
		address: "0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720",
		symbol: "WASTR",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720.png"
	},
	{
		name: "Shiden",
		address: "0x75364D4F779d0Bd0facD9a218c67f87dD9Aff3b4",
		symbol: "WSDN",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x75364D4F779d0Bd0facD9a218c67f87dD9Aff3b4.png"
	},
	{
		name: "USDC",
		address: "0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98",
		symbol: "USDC",
		decimals: 6,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98.png"
	},
	{
		name: "DAI",
		address: "0x6De33698e9e9b787e09d3Bd7771ef63557E148bb",
		symbol: "DAI",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x6De33698e9e9b787e09d3Bd7771ef63557E148bb.png"
	},
	{
		name: "ETH",
		address: "0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c",
		symbol: "ETH",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c.png"
	},
	{
		name: "BTC",
		address: "0xad543f18cFf85c77E140E3E5E3c3392f6Ba9d5CA",
		symbol: "BTC",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xad543f18cFf85c77E140E3E5E3c3392f6Ba9d5CA.png"
	},
	{
		name: "MATIC",
		address: "0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF",
		symbol: "MATIC",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF.png"
	},
	{
		name: "BNB",
		address: "0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52",
		symbol: "BNB",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52.png"
	},
	{
		name: "BUSD",
		address: "0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E",
		symbol: "BUSD",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E.png"
	}
];
var miniExtendedList = {
	name: name,
	timestamp: timestamp,
	version: version,
	logoURI: logoURI,
	keywords: keywords,
	tokens: tokens
};

var srcDefault = [
	{
		name: "Astar",
		address: "0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720",
		symbol: "WASTR",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720.png"
	},
	{
		name: "Shiden",
		address: "0x75364D4F779d0Bd0facD9a218c67f87dD9Aff3b4",
		symbol: "WSDN",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x75364D4F779d0Bd0facD9a218c67f87dD9Aff3b4.png"
	},
	{
		name: "USDC",
		address: "0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98",
		symbol: "USDC",
		decimals: 6,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98.png"
	},
	{
		name: "DAI",
		address: "0x6De33698e9e9b787e09d3Bd7771ef63557E148bb",
		symbol: "DAI",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x6De33698e9e9b787e09d3Bd7771ef63557E148bb.png"
	},
	{
		name: "ETH",
		address: "0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c",
		symbol: "ETH",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c.png"
	},
	{
		name: "BTC",
		address: "0xad543f18cFf85c77E140E3E5E3c3392f6Ba9d5CA",
		symbol: "BTC",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xad543f18cFf85c77E140E3E5E3c3392f6Ba9d5CA.png"
	},
	{
		name: "MATIC",
		address: "0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF",
		symbol: "MATIC",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF.png"
	},
	{
		name: "BNB",
		address: "0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52",
		symbol: "BNB",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52.png"
	},
	{
		name: "BUSD",
		address: "0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E",
		symbol: "BUSD",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E.png"
	}
];

var srcExtended = [
	{
		name: "Astar",
		address: "0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720",
		symbol: "WASTR",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720.png"
	},
	{
		name: "Shiden",
		address: "0x75364D4F779d0Bd0facD9a218c67f87dD9Aff3b4",
		symbol: "WSDN",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x75364D4F779d0Bd0facD9a218c67f87dD9Aff3b4.png"
	},
	{
		name: "USDC",
		address: "0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98",
		symbol: "USDC",
		decimals: 6,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98.png"
	},
	{
		name: "DAI",
		address: "0x6De33698e9e9b787e09d3Bd7771ef63557E148bb",
		symbol: "DAI",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x6De33698e9e9b787e09d3Bd7771ef63557E148bb.png"
	},
	{
		name: "ETH",
		address: "0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c",
		symbol: "ETH",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c.png"
	},
	{
		name: "BTC",
		address: "0xad543f18cFf85c77E140E3E5E3c3392f6Ba9d5CA",
		symbol: "BTC",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xad543f18cFf85c77E140E3E5E3c3392f6Ba9d5CA.png"
	},
	{
		name: "MATIC",
		address: "0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF",
		symbol: "MATIC",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF.png"
	},
	{
		name: "BNB",
		address: "0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52",
		symbol: "BNB",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52.png"
	},
	{
		name: "BUSD",
		address: "0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E",
		symbol: "BUSD",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E.png"
	}
];

var srcTop100 = [
	{
		name: "Astar",
		address: "0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720",
		symbol: "WASTR",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720.png"
	},
	{
		name: "Shiden",
		address: "0x75364D4F779d0Bd0facD9a218c67f87dD9Aff3b4",
		symbol: "WSDN",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x75364D4F779d0Bd0facD9a218c67f87dD9Aff3b4.png"
	},
	{
		name: "USDC",
		address: "0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98",
		symbol: "USDC",
		decimals: 6,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98.png"
	},
	{
		name: "DAI",
		address: "0x6De33698e9e9b787e09d3Bd7771ef63557E148bb",
		symbol: "DAI",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x6De33698e9e9b787e09d3Bd7771ef63557E148bb.png"
	},
	{
		name: "ETH",
		address: "0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c",
		symbol: "ETH",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c.png"
	},
	{
		name: "BTC",
		address: "0xad543f18cFf85c77E140E3E5E3c3392f6Ba9d5CA",
		symbol: "BTC",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xad543f18cFf85c77E140E3E5E3c3392f6Ba9d5CA.png"
	},
	{
		name: "MATIC",
		address: "0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF",
		symbol: "MATIC",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF.png"
	},
	{
		name: "BNB",
		address: "0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52",
		symbol: "BNB",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52.png"
	},
	{
		name: "BUSD",
		address: "0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E",
		symbol: "BUSD",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E.png"
	}
];

var srcTop15 = [
	{
		name: "Astar",
		address: "0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720",
		symbol: "WASTR",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720.png"
	},
	{
		name: "Shiden",
		address: "0x75364D4F779d0Bd0facD9a218c67f87dD9Aff3b4",
		symbol: "WSDN",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x75364D4F779d0Bd0facD9a218c67f87dD9Aff3b4.png"
	},
	{
		name: "USDC",
		address: "0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98",
		symbol: "USDC",
		decimals: 6,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98.png"
	},
	{
		name: "DAI",
		address: "0x6De33698e9e9b787e09d3Bd7771ef63557E148bb",
		symbol: "DAI",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x6De33698e9e9b787e09d3Bd7771ef63557E148bb.png"
	},
	{
		name: "ETH",
		address: "0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c",
		symbol: "ETH",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c.png"
	},
	{
		name: "BTC",
		address: "0xad543f18cFf85c77E140E3E5E3c3392f6Ba9d5CA",
		symbol: "BTC",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xad543f18cFf85c77E140E3E5E3c3392f6Ba9d5CA.png"
	},
	{
		name: "MATIC",
		address: "0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF",
		symbol: "MATIC",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF.png"
	},
	{
		name: "BNB",
		address: "0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52",
		symbol: "BNB",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52.png"
	},
	{
		name: "BUSD",
		address: "0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E",
		symbol: "BUSD",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E.png"
	}
];

var srcCoingecko = [
	{
		name: "Astar",
		address: "0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720",
		symbol: "WASTR",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720.png"
	},
	{
		name: "Shiden",
		address: "0x75364D4F779d0Bd0facD9a218c67f87dD9Aff3b4",
		symbol: "WSDN",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x75364D4F779d0Bd0facD9a218c67f87dD9Aff3b4.png"
	},
	{
		name: "USDC",
		address: "0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98",
		symbol: "USDC",
		decimals: 6,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98.png"
	},
	{
		name: "DAI",
		address: "0x6De33698e9e9b787e09d3Bd7771ef63557E148bb",
		symbol: "DAI",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x6De33698e9e9b787e09d3Bd7771ef63557E148bb.png"
	},
	{
		name: "ETH",
		address: "0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c",
		symbol: "ETH",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c.png"
	},
	{
		name: "BTC",
		address: "0xad543f18cFf85c77E140E3E5E3c3392f6Ba9d5CA",
		symbol: "BTC",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xad543f18cFf85c77E140E3E5E3c3392f6Ba9d5CA.png"
	},
	{
		name: "MATIC",
		address: "0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF",
		symbol: "MATIC",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF.png"
	},
	{
		name: "BNB",
		address: "0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52",
		symbol: "BNB",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52.png"
	},
	{
		name: "BUSD",
		address: "0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E",
		symbol: "BUSD",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E.png"
	}
];

var srcMini = [
	{
		name: "Astar",
		address: "0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720",
		symbol: "WASTR",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720.png"
	},
	{
		name: "Shiden",
		address: "0x75364D4F779d0Bd0facD9a218c67f87dD9Aff3b4",
		symbol: "WSDN",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x75364D4F779d0Bd0facD9a218c67f87dD9Aff3b4.png"
	},
	{
		name: "USDC",
		address: "0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98",
		symbol: "USDC",
		decimals: 6,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98.png"
	},
	{
		name: "DAI",
		address: "0x6De33698e9e9b787e09d3Bd7771ef63557E148bb",
		symbol: "DAI",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x6De33698e9e9b787e09d3Bd7771ef63557E148bb.png"
	},
	{
		name: "ETH",
		address: "0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c",
		symbol: "ETH",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c.png"
	},
	{
		name: "BTC",
		address: "0xad543f18cFf85c77E140E3E5E3c3392f6Ba9d5CA",
		symbol: "BTC",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xad543f18cFf85c77E140E3E5E3c3392f6Ba9d5CA.png"
	},
	{
		name: "MATIC",
		address: "0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF",
		symbol: "MATIC",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF.png"
	},
	{
		name: "BNB",
		address: "0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52",
		symbol: "BNB",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52.png"
	},
	{
		name: "BUSD",
		address: "0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E",
		symbol: "BUSD",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E.png"
	}
];

var srcMiniExtended = [
	{
		name: "Astar",
		address: "0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720",
		symbol: "WASTR",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720.png"
	},
	{
		name: "Shiden",
		address: "0x75364D4F779d0Bd0facD9a218c67f87dD9Aff3b4",
		symbol: "WSDN",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x75364D4F779d0Bd0facD9a218c67f87dD9Aff3b4.png"
	},
	{
		name: "USDC",
		address: "0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98",
		symbol: "USDC",
		decimals: 6,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98.png"
	},
	{
		name: "DAI",
		address: "0x6De33698e9e9b787e09d3Bd7771ef63557E148bb",
		symbol: "DAI",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x6De33698e9e9b787e09d3Bd7771ef63557E148bb.png"
	},
	{
		name: "ETH",
		address: "0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c",
		symbol: "ETH",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c.png"
	},
	{
		name: "BTC",
		address: "0xad543f18cFf85c77E140E3E5E3c3392f6Ba9d5CA",
		symbol: "BTC",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xad543f18cFf85c77E140E3E5E3c3392f6Ba9d5CA.png"
	},
	{
		name: "MATIC",
		address: "0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF",
		symbol: "MATIC",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF.png"
	},
	{
		name: "BNB",
		address: "0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52",
		symbol: "BNB",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52.png"
	},
	{
		name: "BUSD",
		address: "0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E",
		symbol: "BUSD",
		decimals: 18,
		chainId: 592,
		logoURI: "https://raw.githubusercontent.com/starbank-finance/assets/main/images/astar/0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E.png"
	}
];

var VersionBump;
(function (VersionBump) {
    VersionBump["major"] = "major";
    VersionBump["minor"] = "minor";
    VersionBump["patch"] = "patch";
})(VersionBump || (VersionBump = {}));
var lists$2 = {
    "librax-default": {
        list: srcDefault,
        name: "LibraX Default",
        keywords: ["librax", "default"],
        logoURI: "https://librax.finance/logo.png",
        sort: false,
        currentVersion: version$6,
    },
    "librax-extended": {
        list: srcExtended,
        name: "LibraX Extended",
        keywords: ["librax", "extended"],
        logoURI: "https://librax.finance/logo.png",
        sort: true,
        currentVersion: version$5,
    },
    "librax-top-100": {
        list: srcTop100,
        name: "LibraX Top 100",
        keywords: ["librax", "top 100"],
        logoURI: "https://librax.finance/logo.png",
        sort: true,
        currentVersion: version$3,
    },
    "librax-top-15": {
        list: srcTop15,
        name: "LibraX Top 15",
        keywords: ["librax", "top 15"],
        logoURI: "https://librax.finance/logo.png",
        sort: true,
        currentVersion: version$4,
    },
    "coingecko": {
        list: srcCoingecko,
        name: "CoinGecko",
        keywords: ["defi"],
        logoURI: "https://www.coingecko.com/assets/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png",
        sort: true,
        currentVersion: version$2,
    },
    "librax-mini": {
        list: srcMini,
        name: "LibraX Mini",
        keywords: ["librax", "astar", "mini program", "mini"],
        logoURI: "https://librax.finance/logo.png",
        sort: true,
        currentVersion: version$1,
    },
    "librax-mini-extended": {
        list: srcMiniExtended,
        name: "LibraX Mini Ext",
        keywords: ["librax", "astar", "mini program", "mini", "extended"],
        logoURI: "https://librax.finance/logo.png",
        sort: true,
        currentVersion: version,
    },
};
var getNextVersion = function (currentVersion, versionBump) {
    var major = currentVersion.major, minor = currentVersion.minor, patch = currentVersion.patch;
    switch (versionBump) {
        case VersionBump.major:
            return { major: major + 1, minor: minor, patch: patch };
        case VersionBump.minor:
            return { major: major, minor: minor + 1, patch: patch };
        case VersionBump.patch:
        default:
            return { major: major, minor: minor, patch: patch + 1 };
    }
};
var buildList = function (listName, versionBump) {
    var _a = lists$2[listName], list = _a.list, name = _a.name, keywords = _a.keywords, logoURI = _a.logoURI, sort = _a.sort, currentVersion = _a.currentVersion;
    var version = getNextVersion(currentVersion, versionBump);
    return {
        name: name,
        timestamp: new Date().toISOString(),
        version: version,
        logoURI: logoURI,
        keywords: keywords,
        // sort them by symbol for easy readability (not applied to default list)
        tokens: sort
            ? list.sort(function (t1, t2) {
                if (t1.chainId === t2.chainId) {
                    // CAKE first in extended list
                    if ((t1.symbol === "CAKE") !== (t2.symbol === "CAKE")) {
                        return t1.symbol === "CAKE" ? -1 : 1;
                    }
                    return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
                }
                return t1.chainId < t2.chainId ? -1 : 1;
            })
            : list,
    };
};
var saveList = function (tokenList, listName) {
    var tokenListPath = path.resolve() + "/lists/" + listName + ".json";
    var stringifiedList = JSON.stringify(tokenList, null, 2);
    fs.writeFileSync(tokenListPath, stringifiedList);
    console.info("Token list saved to ", tokenListPath);
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var lists$1 = {
    "librax-default": srcDefault,
    "librax-extended": srcExtended,
    "librax-top-100": srcTop100,
    "librax-top-15": srcTop15,
    "coingecko": srcCoingecko,
    "librax-mini": srcMini,
    "librax-mini-extended": srcMiniExtended,
};
var checksumAddresses = function (listName) {
    var badChecksumCount = 0;
    var listToChecksum = lists$1[listName];
    var updatedList = listToChecksum.reduce(function (tokenList, token) {
        var checksummedAddress = getAddress(token.address);
        if (checksummedAddress !== token.address) {
            badChecksumCount += 1;
            var updatedToken = __assign(__assign({}, token), { address: checksummedAddress });
            return __spreadArray(__spreadArray([], tokenList), [updatedToken]);
        }
        return __spreadArray(__spreadArray([], tokenList), [token]);
    }, []);
    if (badChecksumCount > 0) {
        console.info("Found and fixed " + badChecksumCount + " non-checksummed addreses");
        var tokenListPath = path.resolve() + "/src/tokens/" + listName + ".json";
        console.info("Saving updated list to ", tokenListPath);
        var stringifiedList = JSON.stringify(updatedList, null, 2);
        fs.writeFileSync(tokenListPath, stringifiedList);
        console.info("Checksumming done!");
    }
    else {
        console.info("All addresses are already checksummed");
    }
};

var lists = [
    {
        name: "librax-default",
        src: srcDefault,
        actual: defaultList,
    },
    {
        name: "librax-extended",
        src: srcExtended,
        actual: extendedtList,
    },
    {
        name: "librax-top-15",
        src: srcTop15,
        actual: top15List,
    },
    {
        name: "librax-top-100",
        src: srcTop100,
        actual: top100tList,
    },
    {
        name: "coingeckoList",
        src: srcCoingecko,
        actual: coingeckoList
    },
    {
        name: "librax-mini",
        src: srcMini,
        actual: miniList,
    },
    {
        name: "librax-mini-extended",
        src: srcMiniExtended,
        actual: miniExtendedList,
    },
];
var compareLists = function (listPair) {
    var name = listPair.name, src = listPair.src, actual = listPair.actual;
    if (src.length !== actual.tokens.length) {
        throw Error("List " + name + " seems to be not properly regenerated. Soure file has " + src.length + " tokens but actual list has " + actual.tokens.length + ". Did you forget to run yarn makelist?");
    }
    src.sort(function (t1, t2) { return (t1.address < t2.address ? -1 : 1); });
    actual.tokens.sort(function (t1, t2) { return (t1.address < t2.address ? -1 : 1); });
    src.forEach(function (srcToken, index) {
        if (JSON.stringify(srcToken) !== JSON.stringify(actual.tokens[index])) {
            throw Error("List " + name + " seems to be not properly regenerated. Tokens from src/tokens directory don't match up with the final list. Did you forget to run yarn makelist?");
        }
    });
};
/**
 * Check in CI that author properly updated token list
 * i.e. not just changed token list in src/tokens but also regenerated lists with yarn makelist command.
 * Github Action runs only on change in src/tokens directory.
 */
var ciCheck = function () {
    lists.forEach(function (listPair) {
        compareLists(listPair);
    });
};

var pathToImages = process.env.CI
    ? path.join(process.env.GITHUB_WORKSPACE, "packages", "token-lists", "lists", "images")
    : path.join(path.resolve(), "lists", "images");
var logoFiles = fs.readdirSync(pathToImages);
// Default token list for exchange + manual exclusion of broken BEP-20 token(s)
var blacklist = [
    // List of default tokens to exclude
    "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
    "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
    "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    "0x55d398326f99059fF775485246999027B3197955",
    "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
    "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
    "0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51",
    "0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63",
    "0x8f0528ce5ef7b51152a59745befdd91d97091d2f",
    "0x7083609fce4d1d8dc0c979aab8c869ea2c873402",
    "0x4e6415a5727ea08aae4580057187923aec331227",
    "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
    "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
    "0x844fa82f1e54824655470970f7004dd90546bb28",
    // List of broken tokens
    "0x4269e4090ff9dfc99d8846eb0d42e67f01c3ac8b",
    "0xe2e7329499e8ddb1f2b04ee4b35a8d7f6881e4ea",
];
/**
 * Return today / 1 month ago ISO-8601 DateTime.
 *
 * @returns string[]
 */
var getDateRange = function () {
    var today = new Date();
    var todayISO = today.toISOString();
    today.setMonth(today.getMonth() - 1);
    var monthAgoISO = today.toISOString();
    return [todayISO, monthAgoISO];
};
/**
 * Fetch Top100 Tokens traded on PancakeSwap v2, ordered by trading volume,
 * for the past 30 days, filtered to remove default / broken tokens.
 *
 * @returns BitqueryEntity[]]
 */
var getTokens$1 = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, today, monthAgo, ethereum, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = getDateRange(), today = _a[0], monthAgo = _a[1];
                return [4 /*yield*/, request("https://graphql.bitquery.io/", gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        query ($from: ISO8601DateTime, $till: ISO8601DateTime, $blacklist: [String!]) {\n          ethereum(network: bsc) {\n            dexTrades(\n              options: { desc: \"Total_USD\", limit: 100 }\n              exchangeName: { is: \"Pancake v2\" }\n              baseCurrency: { notIn: $blacklist }\n              date: { since: $from, till: $till }\n            ) {\n              Total_USD: tradeAmount(calculate: sum, in: USD)\n              baseCurrency {\n                address\n                name\n                symbol\n                decimals\n              }\n            }\n          }\n        }\n      "], ["\n        query ($from: ISO8601DateTime, $till: ISO8601DateTime, $blacklist: [String!]) {\n          ethereum(network: bsc) {\n            dexTrades(\n              options: { desc: \"Total_USD\", limit: 100 }\n              exchangeName: { is: \"Pancake v2\" }\n              baseCurrency: { notIn: $blacklist }\n              date: { since: $from, till: $till }\n            ) {\n              Total_USD: tradeAmount(calculate: sum, in: USD)\n              baseCurrency {\n                address\n                name\n                symbol\n                decimals\n              }\n            }\n          }\n        }\n      "]))), {
                        from: monthAgo,
                        till: today,
                        blacklist: blacklist,
                    })];
            case 1:
                ethereum = (_b.sent()).ethereum;
                return [2 /*return*/, ethereum.dexTrades];
            case 2:
                error_1 = _b.sent();
                return [2 /*return*/, error_1];
            case 3: return [2 /*return*/];
        }
    });
}); };
/**
 * Returns the URI of a token logo
 * Note: If present in extended list, use main logo, else fallback to TrustWallet
 *
 * @returns string
 */
var getTokenLogo = function (address) {
    // Note: fs.existsSync can't be used here because its not case sensetive
    if (logoFiles.includes(address + ".png")) {
        return "https://tokens.pancakeswap.finance/images/" + address + ".png";
    }
    return "https://assets.trustwalletapp.com/blockchains/smartchain/assets/" + address + "/logo.png";
};
/**
 * Main function.
 * Fetch tokems, build list, save list.
 */
var main$1 = function () { return __awaiter(void 0, void 0, void 0, function () {
    var tokens, sanitizedTokens, tokenListPath, stringifiedList, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, getTokens$1()];
            case 1:
                tokens = _a.sent();
                sanitizedTokens = tokens.reduce(function (list, item) {
                    var checksummedAddress = getAddress(item.baseCurrency.address);
                    var updatedToken = {
                        name: slugify(item.baseCurrency.name, {
                            replacement: " ",
                            remove: /[^\w\s.]/g,
                        }),
                        symbol: slugify(item.baseCurrency.symbol, {
                            replacement: "-",
                            remove: /[^\w\s.]/g,
                        }).toUpperCase(),
                        address: checksummedAddress,
                        chainId: 56,
                        decimals: item.baseCurrency.decimals,
                        logoURI: getTokenLogo(checksummedAddress),
                    };
                    return __spreadArray(__spreadArray([], list), [updatedToken]);
                }, []);
                tokenListPath = path.resolve() + "/src/tokens/pancakeswap-top-100.json";
                console.info("Saving updated list to ", tokenListPath);
                stringifiedList = JSON.stringify(sanitizedTokens, null, 2);
                fs.writeFileSync(tokenListPath, stringifiedList);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.error("Error when fetching Top100 Tokens by volume for the past 30 days, error: " + error_2.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var templateObject_1;

var MulticalAbi = [
	{
		inputs: [
			{
				components: [
					{
						internalType: "address",
						name: "target",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "callData",
						type: "bytes"
					}
				],
				internalType: "struct Multicall2.Call[]",
				name: "calls",
				type: "tuple[]"
			}
		],
		name: "aggregate",
		outputs: [
			{
				internalType: "uint256",
				name: "blockNumber",
				type: "uint256"
			},
			{
				internalType: "bytes[]",
				name: "returnData",
				type: "bytes[]"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "address",
						name: "target",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "callData",
						type: "bytes"
					}
				],
				internalType: "struct Multicall2.Call[]",
				name: "calls",
				type: "tuple[]"
			}
		],
		name: "blockAndAggregate",
		outputs: [
			{
				internalType: "uint256",
				name: "blockNumber",
				type: "uint256"
			},
			{
				internalType: "bytes32",
				name: "blockHash",
				type: "bytes32"
			},
			{
				components: [
					{
						internalType: "bool",
						name: "success",
						type: "bool"
					},
					{
						internalType: "bytes",
						name: "returnData",
						type: "bytes"
					}
				],
				internalType: "struct Multicall2.Result[]",
				name: "returnData",
				type: "tuple[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "blockNumber",
				type: "uint256"
			}
		],
		name: "getBlockHash",
		outputs: [
			{
				internalType: "bytes32",
				name: "blockHash",
				type: "bytes32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getBlockNumber",
		outputs: [
			{
				internalType: "uint256",
				name: "blockNumber",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getCurrentBlockCoinbase",
		outputs: [
			{
				internalType: "address",
				name: "coinbase",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getCurrentBlockDifficulty",
		outputs: [
			{
				internalType: "uint256",
				name: "difficulty",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getCurrentBlockGasLimit",
		outputs: [
			{
				internalType: "uint256",
				name: "gaslimit",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getCurrentBlockTimestamp",
		outputs: [
			{
				internalType: "uint256",
				name: "timestamp",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "addr",
				type: "address"
			}
		],
		name: "getEthBalance",
		outputs: [
			{
				internalType: "uint256",
				name: "balance",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getLastBlockHash",
		outputs: [
			{
				internalType: "bytes32",
				name: "blockHash",
				type: "bytes32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bool",
				name: "requireSuccess",
				type: "bool"
			},
			{
				components: [
					{
						internalType: "address",
						name: "target",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "callData",
						type: "bytes"
					}
				],
				internalType: "struct Multicall2.Call[]",
				name: "calls",
				type: "tuple[]"
			}
		],
		name: "tryAggregate",
		outputs: [
			{
				components: [
					{
						internalType: "bool",
						name: "success",
						type: "bool"
					},
					{
						internalType: "bytes",
						name: "returnData",
						type: "bytes"
					}
				],
				internalType: "struct Multicall2.Result[]",
				name: "returnData",
				type: "tuple[]"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bool",
				name: "requireSuccess",
				type: "bool"
			},
			{
				components: [
					{
						internalType: "address",
						name: "target",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "callData",
						type: "bytes"
					}
				],
				internalType: "struct Multicall2.Call[]",
				name: "calls",
				type: "tuple[]"
			}
		],
		name: "tryBlockAndAggregate",
		outputs: [
			{
				internalType: "uint256",
				name: "blockNumber",
				type: "uint256"
			},
			{
				internalType: "bytes32",
				name: "blockHash",
				type: "bytes32"
			},
			{
				components: [
					{
						internalType: "bool",
						name: "success",
						type: "bool"
					},
					{
						internalType: "bytes",
						name: "returnData",
						type: "bytes"
					}
				],
				internalType: "struct Multicall2.Result[]",
				name: "returnData",
				type: "tuple[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	}
];

var RPC_URL = "https://nodes.pancakeswap.com";
var simpleRpcProvider = new ethers.providers.StaticJsonRpcProvider(RPC_URL, 56);

/**
 * Multicall V2 uses the new "tryAggregate" function. It is different in 2 ways
 *
 * 1. If "requireSuccess" is false multicall will not bail out if one of the calls fails
 * 2. The return includes a boolean whether the call was successful e.g. [wasSuccessful, callResult]
 */
var multicallv2 = function (abi, calls, options) {
    if (options === void 0) { options = { requireSuccess: true }; }
    return __awaiter(void 0, void 0, void 0, function () {
        var requireSuccess, multi, itf, calldata, returnData, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    requireSuccess = options.requireSuccess;
                    multi = new ethers.Contract("0xfF6FD90A470Aaa0c1B8A54681746b07AcdFedc9B", MulticalAbi, simpleRpcProvider);
                    itf = new ethers.utils.Interface(abi);
                    calldata = calls.map(function (call) { return ({
                        target: call.address.toLowerCase(),
                        callData: itf.encodeFunctionData(call.name, call.params),
                    }); });
                    return [4 /*yield*/, multi.tryAggregate(requireSuccess, calldata)];
                case 1:
                    returnData = _a.sent();
                    res = returnData.map(function (call, i) {
                        var result = call[0], data = call[1];
                        return result ? itf.decodeFunctionResult(calls[i].name, data) : null;
                    });
                    return [2 /*return*/, res];
            }
        });
    });
};

var erc20 = [
	{
		constant: true,
		inputs: [
		],
		name: "name",
		outputs: [
			{
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "_spender",
				type: "address"
			},
			{
				name: "_value",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "_from",
				type: "address"
			},
			{
				name: "_to",
				type: "address"
			},
			{
				name: "_value",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "decimals",
		outputs: [
			{
				name: "",
				type: "uint8"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				name: "_owner",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				name: "balance",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "_to",
				type: "address"
			},
			{
				name: "_value",
				type: "uint256"
			}
		],
		name: "transfer",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				name: "_owner",
				type: "address"
			},
			{
				name: "_spender",
				type: "address"
			}
		],
		name: "allowance",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		payable: true,
		stateMutability: "payable",
		type: "fallback"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				name: "spender",
				type: "address"
			},
			{
				indexed: false,
				name: "value",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				name: "value",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	}
];

var getTokens = function () { return __awaiter(void 0, void 0, void 0, function () {
    var url, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = "https://tokens.coingecko.com/binance-smart-chain/all.json";
                return [4 /*yield*/, axios.get(url)];
            case 1:
                data = (_a.sent()).data;
                return [2 /*return*/, data.tokens];
        }
    });
}); };
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var tokens, chunkSize, chunkArray, realTokensDecimals_1, _loop_1, _i, chunkArray_1, chunk, sanitizedTokens, tokenListPath, stringifiedList, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                return [4 /*yield*/, getTokens()];
            case 1:
                tokens = _a.sent();
                chunkSize = 200;
                chunkArray = tokens.length >= chunkSize ? _.chunk(tokens, chunkSize) : [tokens];
                realTokensDecimals_1 = new Map();
                _loop_1 = function (chunk) {
                    var mapAddress, tokenInfoCalls, tokenInfoResponse;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                mapAddress = chunk.filter(function (token) { return isAddress(token.address); }).map(function (token) { return token.address; });
                                tokenInfoCalls = mapAddress.flatMap(function (address) { return [
                                    {
                                        address: address,
                                        name: "decimals",
                                    },
                                ]; });
                                return [4 /*yield*/, multicallv2(erc20, tokenInfoCalls, { requireSuccess: false })];
                            case 1:
                                tokenInfoResponse = _b.sent();
                                mapAddress.forEach(function (address, i) {
                                    try {
                                        realTokensDecimals_1.set(address, tokenInfoResponse[i][0]);
                                    }
                                    catch (error) {
                                        console.error(tokenInfoResponse[i], address);
                                    }
                                });
                                return [2 /*return*/];
                        }
                    });
                };
                _i = 0, chunkArray_1 = chunkArray;
                _a.label = 2;
            case 2:
                if (!(_i < chunkArray_1.length)) return [3 /*break*/, 5];
                chunk = chunkArray_1[_i];
                return [5 /*yield**/, _loop_1(chunk)];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4:
                _i++;
                return [3 /*break*/, 2];
            case 5:
                sanitizedTokens = tokens
                    .filter(function (token, index, array) {
                    var isNotDuplicate = array.findIndex(function (t) { return t.address === token.address || t.name === token.name; }) === index;
                    return isNotDuplicate && isAddress(token.address) && realTokensDecimals_1.get(token.address) === token.decimals;
                })
                    .map(function (token) {
                    var checksummedAddress = getAddress(token.address);
                    return __assign(__assign({}, token), { address: checksummedAddress });
                });
                tokenListPath = path.resolve() + "/src/tokens/coingecko.json";
                console.info("Saving updated list to ", tokenListPath);
                stringifiedList = JSON.stringify(sanitizedTokens, null, 2);
                fs.writeFileSync(tokenListPath, stringifiedList);
                return [3 /*break*/, 7];
            case 6:
                error_1 = _a.sent();
                console.error("Error when fetching Coingecko Tokens, error: " + error_1.message);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };

var rawMiniExtended = [];

var rawLists = {
    "pcs-mini-extended": rawMiniExtended,
};
var getTokensChainData = function (listName, addressArray) { return __awaiter(void 0, void 0, void 0, function () {
    var isTest, tokens, chunkSize, chunkArray, tokensWithChainData, _loop_1, _i, chunkArray_1, chunk, tokenListPath, stringifiedList;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                isTest = addressArray && addressArray.length > 0;
                tokens = isTest ? addressArray : rawLists[listName];
                if (!tokens) {
                    console.error("No raw address list found");
                    return [2 /*return*/, []];
                }
                chunkSize = 200;
                chunkArray = tokens.length >= chunkSize ? _.chunk(tokens, chunkSize) : [tokens];
                tokensWithChainData = [];
                _loop_1 = function (chunk) {
                    var tokenInfoCalls, tokenInfoResponse, data;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                tokenInfoCalls = chunk.flatMap(function (address) { return [
                                    {
                                        address: address,
                                        name: "symbol",
                                    },
                                    {
                                        address: address,
                                        name: "name",
                                    },
                                    {
                                        address: address,
                                        name: "decimals",
                                    },
                                ]; });
                                return [4 /*yield*/, multicallv2(erc20, tokenInfoCalls)];
                            case 1:
                                tokenInfoResponse = _b.sent();
                                data = chunk.map(function (address, i) { return ({
                                    name: tokenInfoResponse[i * 3 + 1][0],
                                    symbol: tokenInfoResponse[i * 3][0],
                                    address: address,
                                    chainId: 56,
                                    decimals: tokenInfoResponse[i * 3 + 2][0],
                                    logoURI: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/" + address + "/logo.png",
                                }); });
                                tokensWithChainData.push.apply(tokensWithChainData, data);
                                return [2 /*return*/];
                        }
                    });
                };
                _i = 0, chunkArray_1 = chunkArray;
                _a.label = 1;
            case 1:
                if (!(_i < chunkArray_1.length)) return [3 /*break*/, 4];
                chunk = chunkArray_1[_i];
                return [5 /*yield**/, _loop_1(chunk)];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4:
                if (!isTest) {
                    tokenListPath = path.resolve() + "/src/tokens/" + listName + ".json";
                    stringifiedList = JSON.stringify(tokensWithChainData, null, 2);
                    fs.writeFileSync(tokenListPath, stringifiedList);
                    console.info("Generated token list source json to ", tokenListPath);
                }
                return [2 /*return*/, tokensWithChainData];
        }
    });
}); };

var command = process.argv[2];
var listName = process.argv[3];
var versionBump = process.argv[4];
switch (command) {
    case "checksum":
        checksumAddresses(listName);
        break;
    case "generate":
        saveList(buildList(listName, versionBump), listName);
        break;
    case "fetch":
        main$1();
        main();
        break;
    case "ci-check":
        ciCheck();
        break;
    case "get-list-from-addresses":
        getTokensChainData("pancakeswap-mini-extended");
        break;
    default:
        console.info("Unknown command");
        break;
}
