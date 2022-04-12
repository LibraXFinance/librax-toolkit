import { ethers, Contract } from "ethers";
export declare const getErc721Contract: (address: string, provider: ethers.providers.Provider) => Contract;
export declare const getProfileContract: (provider: ethers.providers.Provider, chainId: number) => Contract;
