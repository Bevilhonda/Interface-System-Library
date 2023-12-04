import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Centro',
  'Zona  Norte',
  'Zona Sul',
];

function getStyles(name: string, nomeUnidade: string[], theme: Theme) {
  return {
    fontWeight:
      nomeUnidade.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const theme = useTheme();
  const [nomeUnidade, setNomeUnidade] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof nomeUnidade>) => {
    const {
      target: { value },
    } = event;
    setNomeUnidade(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 5, width: 300 }}>
        <InputLabel id="demo-multiple-name-label" sx={{ marginBottom: '8px' }} >Escolha uma Unidade</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={nomeUnidade}
          onChange={handleChange}
          input={<OutlinedInput label="Name" sx={{ marginTop: '8px', marginBottom: '8px' }} />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, nomeUnidade, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}