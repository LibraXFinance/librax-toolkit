export interface Address {
    97?: string;
    56: string;
}
export declare type Images = {
    lg: string;
    md: string;
    sm: string;
    ipfs?: string;
};
export declare type NftImages = {
    blur?: string;
} & Images;
export declare type NftVideo = {
    webm: string;
    mp4: string;
};
export declare type Nft = {
    name: string;
    description: string;
    images: NftImages;
    sortOrder: number;
    type: NftType;
    video?: NftVideo;
    identifier: string;
    variationId?: number | string;
};
export declare enum NftType {
    PANCAKE = "pancake",
    MIXIE = "mixie"
}
export declare type NftUriData = {
    name: string;
    description: string;
    image: string;
    attributes: {
        bunnyId: string;
    };
};
export declare type NftSource = {
    [key in NftType]: {
        address: Address;
        identifierKey: string;
    };
};
export declare type TeamImages = {
    alt: string;
} & Images;
export declare type Team = {
    id: number;
    name: string;
    description: string;
    isJoinable?: boolean;
    users: number;
    points: number;
    images: TeamImages;
    background: string;
    textColor: string;
};
export interface GetProfileResponse {
    hasRegistered: boolean;
    profile?: Profile;
}
export interface Profile {
    userId: number;
    points: number;
    teamId: number;
    nftAddress: string;
    tokenId: number;
    isActive: boolean;
    username: string;
    nft?: Nft;
    team: Team;
    hasRegistered: boolean;
}
export declare type TranslatableText = string | {
    id: number;
    fallback: string;
    data?: {
        [key: string]: string | number;
    };
};
export declare type CampaignType = "ifo" | "teambattle";
export declare type Campaign = {
    id: string;
    type: CampaignType;
    title?: TranslatableText;
    description?: TranslatableText;
    badge?: string;
};
export interface Achievement {
    id: string;
    type: CampaignType;
    address: string;
    title: TranslatableText;
    description?: TranslatableText;
    badge: string;
    points: number;
}
export interface UserPointIncreaseEvent {
    campaignId: string;
    id: string;
    points: string;
}
