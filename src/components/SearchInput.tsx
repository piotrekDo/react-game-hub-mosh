import { Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { TiDelete } from 'react-icons/ti';

interface Props {
  onSearch: (searchText: string) => void;
}

export const SearchInput = ({ onSearch }: Props) => {
  const [typing, setTyping] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);

  const submit = (event: any) => {
    event.preventDefault();
    if (ref.current) {
      onSearch(ref.current.value);
    }
  };

  return (
    <form style={{ width: '100%' }} onSubmit={event => submit(event)}>
      <InputGroup borderRadius={20} variant={'filled'}>
        <InputLeftElement children={<BsSearch />} />
        <Input onChange={() => setTyping(true)} ref={ref} placeholder='Search games...' variant={'filled'}></Input>
        {typing && (
          <Button>
            <TiDelete size={35} onClick={(event) => {
                if(ref.current) ref.current.value = '';
                setTyping(false)
                submit(event);
            }}/>
          </Button>
        )}
        <Button variant={'filled'} onClick={event => submit(event)}>
          Search
        </Button>
      </InputGroup>
    </form>
  );
};
