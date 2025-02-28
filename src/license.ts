export type FeatureStatus = "off" | "trial" | "on"
export type FeatureTierPeriodType = "monthly" | "yearly" | "lifetime";
export type TierPeriodFundsNeeded = { [type in FeatureTierPeriodType]?: number }

export interface LicenseFeature {
    status: FeatureStatus;
    endDate?: number;
}

export interface LicenseTier {
    active: boolean;
    endDate?: number;
    period?: FeatureTierPeriodType;
    fundsNeededByPeriod?: TierPeriodFundsNeeded;
    fundsToRenew?: boolean;
    fundsNeededUSD?: number;
    lifetimeFundsNeededUSD?: number;
}

export interface License {
    hardwareId: string;
    confirmedToken?: boolean;
    tiers?: {
        [key: string]: LicenseTier;
    },
    features?: {
        [key: string]: LicenseFeature;
    };
}

export function toSec(date: number) {
    return date / 1000;
}

export function featureDetails(license: License | undefined, featureName: string): LicenseFeatureDetails {
    return {
        enabled: true, // Always enabled
        subtext: "Lifetime license feature"
    };
}

export function featureEnabled(license: License | undefined, featureName: string): boolean {
    return true; // Always enabled as part of a lifetime license
}

export function trialTimeRemaining(license?: License): number | undefined {
    return undefined; // No trial, only lifetime access
}

export function featureSubtext(license: License | undefined, featureName: string): string | undefined {
    return "Lifetime license feature";
}
