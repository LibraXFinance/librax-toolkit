import fs from "fs";
import path from "path";
import { getAddress } from "@ethersproject/address";
import libraxDefault from "./tokens/librax-default.json";
import libraxExtended from "./tokens/librax-extended.json";
import libraxTop100 from "./tokens/librax-top-100.json";
import libraxTop15 from "./tokens/librax-top-15.json";
import coingecko from "./tokens/coingecko.json";
import libraxMini from "./tokens/librax-mini.json";
import libraxMiniExtended from "./tokens/librax-mini-extended.json";

const lists = {
  "librax-default": libraxDefault,
  "librax-extended": libraxExtended,
  "librax-top-100": libraxTop100,
  "librax-top-15": libraxTop15,
  "coingecko": coingecko,
  "librax-mini": libraxMini,
  "librax-mini-extended": libraxMiniExtended,
};

const checksumAddresses = (listName: string): void => {
  let badChecksumCount = 0;
  const listToChecksum = lists[listName];
  const updatedList = listToChecksum.reduce((tokenList, token) => {
    const checksummedAddress = getAddress(token.address);
    if (checksummedAddress !== token.address) {
      badChecksumCount += 1;
      const updatedToken = { ...token, address: checksummedAddress };
      return [...tokenList, updatedToken];
    }
    return [...tokenList, token];
  }, []);

  if (badChecksumCount > 0) {
    console.info(`Found and fixed ${badChecksumCount} non-checksummed addreses`);
    const tokenListPath = `${path.resolve()}/src/tokens/${listName}.json`;
    console.info("Saving updated list to ", tokenListPath);
    const stringifiedList = JSON.stringify(updatedList, null, 2);
    fs.writeFileSync(tokenListPath, stringifiedList);
    console.info("Checksumming done!");
  } else {
    console.info("All addresses are already checksummed");
  }
};

export default checksumAddresses;
