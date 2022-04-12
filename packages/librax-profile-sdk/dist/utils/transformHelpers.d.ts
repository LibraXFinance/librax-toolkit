import { Campaign, TranslatableText, Profile } from "../types";
export declare type ProfileResponse = {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: boolean;
};
export declare const transformProfileResponse: (profileResponse: ProfileResponse) => Partial<Profile>;
export declare const getAchievementTitle: (campaign?: Campaign, campaignId?: string) => TranslatableText;
export declare const getAchievementDescription: (campaign?: Campaign) => TranslatableText;
