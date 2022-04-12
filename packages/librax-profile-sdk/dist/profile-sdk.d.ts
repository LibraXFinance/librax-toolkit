import { ethers, Contract } from "ethers";
import { Achievement, Team, GetProfileResponse } from "./types";
declare type SdkConstructorArguments = {
    provider?: ethers.providers.JsonRpcProvider;
    chainId?: number;
};
declare class PancakeProfileSdk {
    provider: ethers.providers.JsonRpcProvider;
    chainId: number;
    profileContract: Contract;
    constructor(args?: SdkConstructorArguments);
    /**
     * Fetches user information via REST API
     * Contains user information and leaderboard statistics about latest trading competition.
     * API repo - https://github.com/pancakeswap/pancake-profile-api
     */
    getUsername: (address: string) => Promise<string>;
    getAchievements: (account: string) => Promise<Achievement[]>;
    /**
     * Fetches team information from
     * Contains team name, number of users, total number of points for the team and whether the team is joinable.
     * This data is combined with static team data (images, description, etc) that is stored in constant in this repo.
     * Contract repo - https://github.com/pancakeswap/pancake-contracts/tree/master/projects/profile-nft-gamification
     */
    getTeam: (teamId: number) => Promise<Team>;
    /**
     * Fetches profile information for specified address.
     * This function combines data from getUsername and getTeam with profile data received getUserProfile method
     * from PancakeProfile contract.
     * NFT's bunnyId is retrieved from PancakeBunnies contract and mapped to static NFT data stored in constant.
     * Contracts repo - https://github.com/pancakeswap/pancake-contracts/tree/master/projects/profile-nft-gamification
     */
    getProfile: (address: string) => Promise<GetProfileResponse>;
}
export default PancakeProfileSdk;
