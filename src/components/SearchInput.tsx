import { Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { TiDelete } from 'react-icons/ti';
import useGameQueryStore from '../store';
import { useNavigate } from 'react-router-dom';

export const SearchInput = () => {
  const setSearchText = useGameQueryStore(s => s.setSearchText);
  const [typing, setTyping] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);
  const navigate =  useNavigate()

  const submit = (event: any) => {
    event.preventDefault();
    if (ref.current) {
      setSearchText(ref.current.value);
      navigate('/')
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
