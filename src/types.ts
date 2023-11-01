import z from "zod"

export const BaseMediaItemSchema = z.object({
  id: z.number(),
  poster_path: z.string(),
  vote_count: z.number(),
})

export const MovieItemSchema = BaseMediaItemSchema.extend({
  media_type: z.literal("movie"),
  title: z.string(),
  release_date: z.string(),
})

export const TvItemSchema = BaseMediaItemSchema.extend({
  media_type: z.literal("tv"),
  name: z.string(),
  first_air_date: z.string(),
})

export const MediaItemSchema = z.discriminatedUnion("media_type", [MovieItemSchema, TvItemSchema])

export type MovieItem = z.infer<typeof MovieItemSchema>
export type TvItem = z.infer<typeof TvItemSchema>
export type MediaItem = z.infer<typeof MediaItemSchema>

export function isMovieItem(item: MediaItem): item is MovieItem {
  return item.media_type === "movie"
}

export function isTvItem(item: MediaItem): item is TvItem {
  return item.media_type === "tv"
}
