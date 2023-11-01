import axios from "axios"
import { MediaItem, isMovieItem } from "./types"

const baseURL = "https://api.themoviedb.org/3"
const api_key = import.meta.env.VITE_TMDB_API_KEY

export const api = axios.create({ baseURL, params: { api_key } })

export function normalizeMedia(media: MediaItem, options: { posterWidth: number }) {
  const title = isMovieItem(media) ? media.title : media.name
  const release_date = isMovieItem(media) ? media.release_date : media.first_air_date
  const year = new Date(release_date).getFullYear() || undefined
  const link = `https://www.themoviedb.org/${media.media_type}/${media.id}`
  const poster = media.poster_path ? `https://image.tmdb.org/t/p/w${options.posterWidth * 2}${media.poster_path}` : ""
  return { ...media, title, release_date, year, link, poster }
}
