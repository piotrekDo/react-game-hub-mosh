import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms, { Platform } from '../hooks/usePlatforms';
import usePlatform from '../hooks/usePlatform';

interface Props {
    onSelectedPlatform: (platform: Platform | null) => void,
    selectedPlatformId?: number;
}

export const PlatformSelector = ({onSelectedPlatform, selectedPlatformId}: Props) => {
  const { data, error, isLoading } = usePlatforms();
  const platform = usePlatform(selectedPlatformId);

  if (error) return null;
  return (
    <Menu>
      <MenuButton minWidth={'200px'} rightIcon={<BsChevronDown />} as={Button}>
        {platform ? platform.name : 'Platform'}
      </MenuButton>
      <MenuList>
        <MenuItem key={null} onClick={() => onSelectedPlatform(null)}>All platforms</MenuItem>
        {data?.results.map(platform => (
          <MenuItem key={platform.id} onClick={() => onSelectedPlatform(platform)}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
