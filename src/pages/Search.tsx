import * as R from "ramda"
import { useQuery } from "@tanstack/react-query"
import { Group, ScrollArea, TextInput } from "@mantine/core"
import { useDebouncedValue } from "@mantine/hooks"
import { useForm } from "@mantine/form"
import { MediaItem } from "../types"
import { api } from "../tmdb"
import SearchResultItem from "./SearchResultItem"

const Search = () => {
  const { getInputProps, values } = useForm({ initialValues: { query: "" } })
  const [debouncedQuery] = useDebouncedValue(values.query, 100)

  const { data } = useQuery<MediaItem[]>({
    queryKey: ["search/multi", debouncedQuery],
    queryFn: async () => {
      const { data } = await api.get<{ results: MediaItem[] }>("search/multi", {
        params: { language: "ko-KR", query: debouncedQuery },
      })

      return data.results
    },
    select: (results) => {
      return R.pipe(
        R.filter(R.propSatisfies((type) => R.includes(type, ["movie", "tv"]), "media_type")),
        R.sortWith([R.descend(R.prop("vote_count"))]),
      )(results)
    },
  })

  return (
    <>
      <TextInput {...getInputProps("query")} type="search" autoFocus size="xl" variant="filled" />
      <ScrollArea py="md">
        <Group wrap="nowrap" align="flex-start">
          {data?.map((media) => <SearchResultItem media={media} key={media.id} />)}
        </Group>
      </ScrollArea>
    </>
  )
}

export default Search
