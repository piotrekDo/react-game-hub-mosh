import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms, { Platform } from '../hooks/usePlatforms';
import usePlatform from '../hooks/usePlatform';
import useGameQueryStore from '../store';

export const PlatformSelector = () => {
  const selectedPlatformId = useGameQueryStore(s=> s.gameQuery.platformId);
  const setSelectedPlatformId = useGameQueryStore(s=> s.setPlatformId);
  const { data, error, isLoading } = usePlatforms();
  const platform = usePlatform(selectedPlatformId);

  if (error) return null;
  return (
    <Menu>
      <MenuButton minWidth={'200px'} rightIcon={<BsChevronDown />} as={Button}>
        {platform ? platform.name : 'Platform'}
      </MenuButton>
      <MenuList>
        {/* <MenuItem key={null} onClick={() => setSelectedPlatformId(null)}>All platforms</MenuItem> */}
        {data?.results.map(platform => (
          <MenuItem key={platform.id} onClick={() => setSelectedPlatformId(platform.id)}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
