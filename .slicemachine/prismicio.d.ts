// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Event documents */
interface EventDocumentData {
    /**
     * Name field in *Event*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: event.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.TitleField;
    /**
     * Location field in *Event*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: event.location
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    location: prismicT.RichTextField;
    /**
     * Chat field in *Event*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: event.chat
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    chat: prismicT.LinkField;
    /**
     * Schedule field in *Event*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: event.schedule[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    schedule: prismicT.GroupField<Simplify<EventDocumentDataScheduleItem>>;
}
/**
 * Item in Event → Schedule
 *
 */
export interface EventDocumentDataScheduleItem {
    /**
     * Reg field in *Event → Schedule*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: event.schedule[].reg
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    reg: prismicT.RelationField<"reg">;
}
/**
 * Event document from Prismic
 *
 * - **API ID**: `event`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type EventDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<EventDocumentData>, "event", Lang>;
/** Content for Reg documents */
interface RegDocumentData {
    /**
     * Name field in *Reg*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Speaker's name
     * - **API ID Path**: reg.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.TitleField;
    /**
     * Image field in *Reg*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: reg.image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Title field in *Reg*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Role
     * - **API ID Path**: reg.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Bio field in *Reg*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Bio
     * - **API ID Path**: reg.bio
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    bio: prismicT.RichTextField;
    /**
     * Twitter field in *Reg*
     *
     * - **Field Type**: Link
     * - **Placeholder**: Twitter profile URL
     * - **API ID Path**: reg.link
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
    /**
     * Reg field in *Reg*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: reg.reg
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    reg: prismicT.RelationField<"reg">;
}
/**
 * Reg document from Prismic
 *
 * - **API ID**: `reg`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type RegDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<RegDocumentData>, "reg", Lang>;
/** Content for Speaker documents */
interface SpeakerDocumentData {
    /**
     * Name field in *Speaker*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Speaker's name
     * - **API ID Path**: speaker.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.TitleField;
    /**
     * Image field in *Speaker*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: speaker.image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Title field in *Speaker*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Role
     * - **API ID Path**: speaker.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Company field in *Speaker*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Company
     * - **API ID Path**: speaker.company
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    company: prismicT.TitleField;
    /**
     * Bio field in *Speaker*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Bio
     * - **API ID Path**: speaker.bio
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    bio: prismicT.RichTextField;
    /**
     * Twitter field in *Speaker*
     *
     * - **Field Type**: Link
     * - **Placeholder**: Twitter profile URL
     * - **API ID Path**: speaker.twitter
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    twitter: prismicT.LinkField;
    /**
     * Github field in *Speaker*
     *
     * - **Field Type**: Link
     * - **Placeholder**: GitHub profile URL
     * - **API ID Path**: speaker.github
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    github: prismicT.LinkField;
    /**
     * Talk field in *Speaker*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: speaker.talk
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    talk: prismicT.RelationField<"talk">;
}
/**
 * Speaker document from Prismic
 *
 * - **API ID**: `speaker`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SpeakerDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<SpeakerDocumentData>, "speaker", Lang>;
/** Content for Sponsor documents */
interface SponsorDocumentData {
    /**
     * Name field in *Sponsor*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Speaker's name
     * - **API ID Path**: sponsor.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.TitleField;
    /**
     * Image field in *Sponsor*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: sponsor.image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Title field in *Sponsor*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Role
     * - **API ID Path**: sponsor.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Bio field in *Sponsor*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Bio
     * - **API ID Path**: sponsor.bio
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    bio: prismicT.RichTextField;
    /**
     * Link field in *Sponsor*
     *
     * - **Field Type**: Link
     * - **Placeholder**: URL
     * - **API ID Path**: sponsor.link
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Sponsor document from Prismic
 *
 * - **API ID**: `sponsor`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SponsorDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<SponsorDocumentData>, "sponsor", Lang>;
/** Content for Stage documents */
interface StageDocumentData {
    /**
     * Name field in *Stage*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: stage.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.TitleField;
    /**
     * Stream field in *Stage*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: stage.stream
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    stream: prismicT.LinkField;
    /**
     * Discord field in *Stage*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: stage.discord
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    discord: prismicT.LinkField;
    /**
     * Schedule field in *Stage*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: stage.schedule[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    schedule: prismicT.GroupField<Simplify<StageDocumentDataScheduleItem>>;
}
/**
 * Item in Stage → Schedule
 *
 */
export interface StageDocumentDataScheduleItem {
    /**
     * Talk field in *Stage → Schedule*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: stage.schedule[].talk
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    talk: prismicT.RelationField<"talk">;
}
/**
 * Stage document from Prismic
 *
 * - **API ID**: `stage`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type StageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<StageDocumentData>, "stage", Lang>;
/** Content for Talk documents */
interface TalkDocumentData {
    /**
     * Title field in *Talk*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Talk title
     * - **API ID Path**: talk.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Speakers field in *Talk*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: talk.speakers[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    speakers: prismicT.GroupField<Simplify<TalkDocumentDataSpeakersItem>>;
    /**
     * Start field in *Talk*
     *
     * - **Field Type**: Timestamp
     * - **Placeholder**: *None*
     * - **API ID Path**: talk.start
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/timestamp
     *
     */
    start: prismicT.TimestampField;
    /**
     * End field in *Talk*
     *
     * - **Field Type**: Timestamp
     * - **Placeholder**: *None*
     * - **API ID Path**: talk.end
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/timestamp
     *
     */
    end: prismicT.TimestampField;
    /**
     * Description field in *Talk*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Talk description
     * - **API ID Path**: talk.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Item in Talk → Speakers
 *
 */
export interface TalkDocumentDataSpeakersItem {
    /**
     * Speaker field in *Talk → Speakers*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: Add a speaker
     * - **API ID Path**: talk.speakers[].speaker
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    speaker: prismicT.RelationField<"speaker">;
}
/**
 * Talk document from Prismic
 *
 * - **API ID**: `talk`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TalkDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<TalkDocumentData>, "talk", Lang>;
/** Content for test documents */
type TestDocumentData = Record<string, never>;
/**
 * test document from Prismic
 *
 * - **API ID**: `test`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TestDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<TestDocumentData>, "test", Lang>;
/** Content for Workshop documents */
interface WorkshopDocumentData {
    /**
     * Name field in *Workshop*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: workshop.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.TitleField;
    /**
     * Location field in *Workshop*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: workshop.location
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    location: prismicT.RichTextField;
    /**
     * Chat field in *Workshop*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: workshop.chat
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    chat: prismicT.LinkField;
    /**
     * Schedule field in *Workshop*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: workshop.schedule[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    schedule: prismicT.GroupField<Simplify<WorkshopDocumentDataScheduleItem>>;
}
/**
 * Item in Workshop → Schedule
 *
 */
export interface WorkshopDocumentDataScheduleItem {
    /**
     * Talk field in *Workshop → Schedule*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: workshop.schedule[].talk
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    talk: prismicT.RelationField<"talk">;
}
/**
 * Workshop document from Prismic
 *
 * - **API ID**: `workshop`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type WorkshopDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<WorkshopDocumentData>, "workshop", Lang>;
export type AllDocumentTypes = EventDocument | RegDocument | SpeakerDocument | SponsorDocument | StageDocument | TalkDocument | TestDocument | WorkshopDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { EventDocumentData, EventDocumentDataScheduleItem, EventDocument, RegDocumentData, RegDocument, SpeakerDocumentData, SpeakerDocument, SponsorDocumentData, SponsorDocument, StageDocumentData, StageDocumentDataScheduleItem, StageDocument, TalkDocumentData, TalkDocumentDataSpeakersItem, TalkDocument, TestDocumentData, TestDocument, WorkshopDocumentData, WorkshopDocumentDataScheduleItem, WorkshopDocument, AllDocumentTypes };
    }
}
