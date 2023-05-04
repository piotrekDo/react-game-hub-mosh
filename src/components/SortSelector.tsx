import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGameQueryStore from '../store';


export const SortSelector = () => {
  const selectedSortOrder = useGameQueryStore(s=> s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore(s=> s.setSortOrder);
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ];

  const currentSordOrder = sortOrders.find(order => order.value === selectedSortOrder)

  return (
    <Menu>
      <MenuButton minWidth={'200px'} rightIcon={<BsChevronDown />} as={Button}>
        Order by: {currentSordOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map(sort => (
          <MenuItem key={sort.label} onClick={() => setSortOrder(sort.value)}>
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
