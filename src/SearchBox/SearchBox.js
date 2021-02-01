import React,{useState,useContext} from 'react';

import { TagContext } from '../TagContext'

import { AiOutlineSearch } from 'react-icons/ai';
import tableImage from '../images/table.png'
import couchImage from '../images/couch.png'
import portraitImage from '../images/portrait.png'
import watchImage from '../images/watch.png'




import useStyles from './styles'


function SearchBox() {
  const classes = useStyles();

  const [tags,setTags] = useState([
    {
        name:'EKERO',
        price:'€220',
        title:'table',
        img: tableImage
        
    },
    {
        name:'SODERHANN',
        price:'€450',
        title:'couch',
        img: couchImage

    },
    {
        name:'PORTRAIT',
        price:'€180',
        title:'portrait',
        img: portraitImage

    },
    {
        name:'ROLEX',
        price:'€110',
        title:'watch',
        img: watchImage

    },
    
  ]);
  const [search,setSearch] = useState("");
  const [query,setQuery] = useContext(TagContext);

  const updateSearch = e =>{
    setSearch(e.target.value);
    console.log(search)
  };

//CREATE AN OBJECT DEPENDING ON SEARCH
  const getSearch = e => {
    e.preventDefault();
    tags.map((tag)=>{
      if(search===tag.name || search===tag.title){
        setQuery({ name: tag.name,
                   price: tag.price,
                   title:tag.title,
                   img: tag.img
                  })
        setSearch("")
      }
      else{
        setSearch("")
      }
    })      
  }

  return (
    <div>
      <form className={classes.form} onSubmit={getSearch}>
        <input className={classes.searchBox} 
               type='text' 
               placeholder='Select Item' 
               value={search}
               onChange={updateSearch}
               
               />
        <button className={classes.btn} type='submit'><AiOutlineSearch /></button>
      </form>
    </div>
    
  );
}

export default SearchBox;
