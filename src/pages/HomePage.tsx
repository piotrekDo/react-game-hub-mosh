import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react'
import { GameGrid } from '../components/GameGrid'
import { SortSelector } from '../components/SortSelector'
import { GameHeadings } from '../components/GameHeadings'
import { PlatformSelector } from '../components/PlatformSelector'
import { GenreList } from '../components/GenreList'

export const HomePage = () => {
  return (
    <Grid
    templateAreas={{
      base: `"main"`,
      lg: `"aside main"`,
    }}
    templateColumns={{
      base: '1fr',
      lg: '200px 1fr',
    }}
  >
    <Show above='lg'>
      <GridItem area={'aside'} paddingX={5}>
        <GenreList />
      </GridItem>
    </Show>
    <GridItem area={'main'}>
      <Box paddingLeft={2}>
        <GameHeadings />
        <Flex marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector />
          </Box>
          <SortSelector />
        </Flex>
      </Box>
      <GameGrid />
    </GridItem>
  </Grid>
  )
}
