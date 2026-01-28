'use client';
import { Autocomplete, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchBar() {
  // сделать тупым, всю логику в page, сделать запрос к API по query-параметру
  const router = useRouter();
  const [searchBarInput, setSearchBarInput] = useState('');

  return (
    <Autocomplete<string, false, false, true>
      options={[]} // позже
      freeSolo
      inputValue={searchBarInput}
      onInputChange={(_, newInput) => setSearchBarInput(newInput)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && searchBarInput.trim()) {
          router.push(`/?q=${encodeURIComponent(searchBarInput)}`);
        }
      }}
      renderInput={(params) => <TextField {...params} label="Искать аниме" variant="outlined" />}
      sx={{ width: 350 }}
    />
  );
}
