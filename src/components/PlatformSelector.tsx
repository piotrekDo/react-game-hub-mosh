import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms, { Platform } from '../hooks/usePlatforms';

interface Props {
    onSelectedPlatform: (platform: Platform | null) => void,
    selectedPlatform: Platform | null
}

export const PlatformSelector = ({onSelectedPlatform, selectedPlatform}: Props) => {
  const { data, error, isLoading } = usePlatforms();


  if (error) return null;
  return (
    <Menu>
      <MenuButton minWidth={'200px'} rightIcon={<BsChevronDown />} as={Button}>
        {selectedPlatform ? selectedPlatform.name : 'Platform'}
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
