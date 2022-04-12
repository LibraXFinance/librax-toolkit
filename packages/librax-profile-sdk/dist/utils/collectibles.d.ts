import { ethers } from "ethers";
import { Nft, NftUriData } from "../types";
/**
 * Gets the identifier key based on the nft address
 * Helpful for looking up the key when all you have is the address
 */
export declare const getIdentifierKeyFromAddress: (nftAddress: string, chainId: number) => string | null;
/**
 * Some sources like Pancake do not return HTTP tokenURI's
 */
export declare const getTokenUrl: (tokenUri: string) => string;
export declare const getTokenUriData: (nftAddress: string, tokenId: number, provider: ethers.providers.JsonRpcProvider) => Promise<NftUriData | null>;
export declare const getNftByTokenId: (nftAddress: string, tokenId: number, provider: ethers.providers.JsonRpcProvider, chainId: number) => Promise<Nft | null>;
