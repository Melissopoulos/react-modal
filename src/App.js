import React from 'react';
import SearchBox from './SearchBox/SearchBox'
import IkeaImage from './IkeaImage/IkeaImage'

import {Container} from '@material-ui/core'
import useStyles from './styles'

import { TagProvider } from './TagContext'


function App() {
  const classes = useStyles();

  return (
    <TagProvider>
      <Container maxWidth='lg'>
        <SearchBox />
        <IkeaImage />
      </Container>
    </TagProvider>

  );
}

export default App;
