import { Box, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import { NavBar } from './components/NavBar';
import { GenreList } from './components/GenreList';
import { useState } from 'react';
import { PlatformSelector } from './components/PlatformSelector';
import { SortSelector } from './components/SortSelector';
import { GameHeadings } from './components/GameHeadings';
import { GameGrid } from './components/GameGrid';

export interface GameQuery { 
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchTag: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: '1fr',
          lg: '200px 1fr',
        }}
      >
        <GridItem area={'nav'}>
          <NavBar onSearch={searchTag => setGameQuery({ ...gameQuery, searchTag })} />
        </GridItem>
        <Show above='lg'>
          <GridItem area={'aside'} paddingX={5}>
            <GenreList
              onSelectedGenre={genre => setGameQuery({ ...gameQuery, genreId: genre.id })}
              selectedGenreId={gameQuery.genreId}
            />
          </GridItem>
        </Show>
        <GridItem area={'main'}>
          <Box paddingLeft={2}>
            <GameHeadings gameQuery={gameQuery} />
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector
                  onSelectedPlatform={platform => setGameQuery({ ...gameQuery, platformId: platform ? platform.id : undefined })}
                  selectedPlatformId={gameQuery.platformId}
                ></PlatformSelector>
              </Box>
              <SortSelector
                onSelectedSortOrder={sortOrder => setGameQuery({ ...gameQuery, sortOrder })}
                selectedSortOrder={gameQuery.sortOrder}
              />
            </Flex>
          </Box>
          <GameGrid gameQuery={gameQuery}/>
        </GridItem>
      </Grid>
  );
}

export default App;
