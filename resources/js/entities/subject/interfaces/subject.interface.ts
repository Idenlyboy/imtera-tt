interface Subject {
    id: number;
    url: string;
    yandex_business_id: string;
}

export interface Review {
    businessComment?: BusinessComment;
    reviewId: string;
    businessId: string;
    author: Author;
    text?: string;
    textLanguage: string;
    textTranslations: Record<string, string>;
    rating: number;
    updatedTime: string;
    reactions: Reactions;
    photos: Photo[];
    videos: Video[];
}

export interface BusinessComment {
    text: string;
    updatedTime: string;
}

export interface Author {
    name: string;
    avatarUrl: string;
    professionLevel?: string;
    rtb?: string;
    rtbType?: string;
    publicId: string;
    achievements: unknown[];
    professions: unknown[];
    isSubscribed: boolean;
}

export interface Reactions {
    likes: number;
    dislikes: number;
    userReaction: 'LIKE' | 'DISLIKE' | 'NONE';
}

export interface Photo {
    type: 'photo';
    id: string;
    businessId: string;
    urlTemplate: string;
    createdTime: number;
    moderation: Moderation;
    showReactions: boolean;
    reactions: Reactions;
    copyright: Copyright;
}

export interface Moderation {
    status: 'ACCEPTED' | 'REJECTED' | 'PENDING';
}

export interface Copyright {
    name: string;
    publicId: string;
    imageUrlTemplate: string;
    updateTime: number;
    hasPublicProfile: boolean;
    isSubscribed: boolean;
}

export interface Video {
    [key: string]: unknown;
}

interface Aspect {
    text?: string,
    count: number;
    positive?: number;
    negative?: number;
}

interface SubjectData {
    subject: Subject;
    reviews: Review[];
    aspects: Aspect[];
}

export type { SubjectData, Subject }