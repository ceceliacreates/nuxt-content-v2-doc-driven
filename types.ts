import type { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types";

export type Section = "blog" | "events";
export type EventCategory = "workshop" | "conference" | "webinar" | "stream";

export interface Blog extends MarkdownParsedContent {
  title: string;
  description: string;
  date: string;
  img?: string;
  tags: string[];
}

export interface Event extends MarkdownParsedContent {
  event: string;
  title: string;
  date: string;
  type: EventCategory;
  description: string;
  url: string;
  img?: string;
  embed?: string;
  video?: string;
  slides?: string;
  tags: string[];
}
