import { Box, Group, Image, Text, UnstyledButton } from "@mantine/core"
import { modals } from "@mantine/modals"
import { CodeHighlight } from "@mantine/code-highlight"
import { MediaItem } from "../types"
import { normalizeMedia } from "../tmdb"
import classes from "./SearchResultItem.module.css"

const POSTER_WIDTH = 46

const SearchResultItem = ({ media }: { media: MediaItem }) => {
  const { poster, title, year } = normalizeMedia(media, { posterWidth: POSTER_WIDTH })

  return (
    <UnstyledButton
      p="xs"
      pr="xl"
      className={classes.item}
      onClick={() => {
        modals.open({
          children: <CodeHighlight language="json" code={JSON.stringify(media, null, 2)} />,
          size: "xl",
        })
      }}
    >
      <Group gap="xs" wrap="nowrap">
        <Image src={poster} width={POSTER_WIDTH} height={POSTER_WIDTH * 1.5} loading="lazy" />
        <Box miw={0}>
          <Text truncate>{title}</Text>
          <Text c="dimmed" size="xs">
            {year}
          </Text>
        </Box>
      </Group>
    </UnstyledButton>
  )
}

export default SearchResultItem
