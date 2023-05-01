import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  onSelectedSortOrder: (sort: string) => void;
  selectedSortOrder: string | null;
}

export const SortSelector = ({ onSelectedSortOrder, selectedSortOrder }: Props) => {
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
          <MenuItem key={sort.label} onClick={() => onSelectedSortOrder(sort.value)}>
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
