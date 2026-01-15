"use client"
import { Autocomplete, TextField } from "@mui/material";

type SearchBarProps = {
  value: string | null;
  onChange: (value: string | null) => void;
}

export default function SearchBar({value, onChange}: SearchBarProps) {

  return (
    <Autocomplete<string, false, false, true>
      value={value}
      options={[]}
      onChange={(_, newValue) => onChange(newValue)} 
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Search anime" variant="outlined" />
      )}
      sx={{ width: 350}}
    />
  )
}