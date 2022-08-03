import fs from "fs";
import path from "path";
import { TokenList } from "@uniswap/token-lists";
import { version as libraxDefaultVersion } from "../lists/librax-default.json";
import { version as libraxExtendedVersion } from "../lists/librax-extended.json";
import { version as libraxTop15Version } from "../lists/librax-top-15.json";
import { version as libraxTop100Version } from "../lists/librax-top-100.json";
import { version as coingeckoVersion } from "../lists/coingecko.json";
import { version as libraxMiniVersion } from "../lists/librax-mini.json";
import { version as libraxMiniExtendedVersion } from "../lists/librax-mini-extended.json";
import libraxDefault from "./tokens/librax-default.json";
import libraxExtended from "./tokens/librax-extended.json";
import libraxTop100 from "./tokens/librax-top-100.json";
import libraxTop15 from "./tokens/librax-top-15.json";
import coingecko from './tokens/coingecko.json'
import libraxMini from "./tokens/librax-mini.json";
import libraxMiniExtended from "./tokens/librax-mini-extended.json";

export enum VersionBump {
  "major" = "major",
  "minor" = "minor",
  "patch" = "patch",
}

type Version = {
  major: number;
  minor: number;
  patch: number;
};

const lists = {
  "librax-default": {
    list: libraxDefault,
    name: "LibraX Default",
    keywords: ["librax", "default"],
    logoURI: "https://librax.finance/logo.png",
    sort: false,
    currentVersion: libraxDefaultVersion,
  },
  "librax-extended": {
    list: libraxExtended,
    name: "LibraX Extended",
    keywords: ["librax", "extended"],
    logoURI: "https://librax.finance/logo.png",
    sort: true,
    currentVersion: libraxExtendedVersion,
  },
  "librax-top-100": {
    list: libraxTop100,
    name: "LibraX Top 100",
    keywords: ["librax", "top 100"],
    logoURI: "https://librax.finance/logo.png",
    sort: true,
    currentVersion: libraxTop100Version,
  },
  "librax-top-15": {
    list: libraxTop15,
    name: "LibraX Top 15",
    keywords: ["librax", "top 15"],
    logoURI: "https://librax.finance/logo.png",
    sort: true,
    currentVersion: libraxTop15Version,
  },
  "coingecko": {
    list: coingecko,
    name: "CoinGecko",
    keywords: ["defi"],
    logoURI: "https://www.coingecko.com/assets/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png",
    sort: true,
    currentVersion: coingeckoVersion,
  },
  "librax-mini": {
    list: libraxMini,
    name: "LibraX Mini",
    keywords: ["librax", "avalanche", "mini program", "mini"],
    logoURI: "https://librax.finance/logo.png",
    sort: true,
    currentVersion: libraxMiniVersion,
  },
  "librax-mini-extended": {
    list: libraxMiniExtended,
    name: "LibraX Mini Ext",
    keywords: ["librax", "avalanche", "mini program", "mini", "extended"],
    logoURI: "https://librax.finance/logo.png",
    sort: true,
    currentVersion: libraxMiniExtendedVersion,
  },
};

const getNextVersion = (currentVersion: Version, versionBump?: VersionBump) => {
  const { major, minor, patch } = currentVersion;
  switch (versionBump) {
    case VersionBump.major:
      return { major: major + 1, minor, patch };
    case VersionBump.minor:
      return { major, minor: minor + 1, patch };
    case VersionBump.patch:
    default:
      return { major, minor, patch: patch + 1 };
  }
};

export const buildList = (listName: string, versionBump?: VersionBump): TokenList => {
  const { list, name, keywords, logoURI, sort, currentVersion } = lists[listName];
  const version = getNextVersion(currentVersion, versionBump);
  return {
    name,
    timestamp: new Date().toISOString(),
    version,
    logoURI,
    keywords,
    // sort them by symbol for easy readability (not applied to default list)
    tokens: sort
      ? list.sort((t1, t2) => {
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

export const saveList = (tokenList: TokenList, listName: string): void => {
  const tokenListPath = `${path.resolve()}/lists/${listName}.json`;
  const stringifiedList = JSON.stringify(tokenList, null, 2);
  fs.writeFileSync(tokenListPath, stringifiedList);
  console.info("Token list saved to ", tokenListPath);
};
