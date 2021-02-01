import React,{useContext, useEffect, useState} from 'react';
import Modal from 'react-modal'

import { TagContext } from '../TagContext'

import Tag from './Tag/Tag'
import ikeaImage from '../images/ikeaImage.jpg'

import useStyles from './styles'
import { BiChevronUp } from 'react-icons/bi';
import tableImage from '../images/table.png'
import couchImage from '../images/couch.png'
import portraitImage from '../images/portrait.png'
import watchImage from '../images/watch.png'



function IkeaImage() {
  const classes = useStyles();

  const [query,setQuery] = useContext(TagContext);
  const [isOpenTable,setIsOpenTable] = useState(false)
  const [isOpenCouch,setIsOpenCouch] = useState(false)
  const [isOpenPortrait,setIsOpenPortrait] = useState(false)
  const [isOpenWatch,setIsOpenWatch] = useState(false)

  //CHANGE VALUE WHEN YOU CLICK A BUTTON
  const changeQueryOnClickTable= () =>{
    setQuery({ name: 'EKERO',
              price: '€220',
              title:'table',
              img: tableImage

     })
  }
  const changeQueryOnClickCouch= () =>{
    setQuery({ name: 'SODERHANN',
              price: '€450',
              title:'couch',
              img: couchImage

     })
  }
  const changeQueryOnClickPortrait= () =>{
    setQuery({ name: 'PORTRAIT',
              price: '€180',
              title:'portrait',
              img: portraitImage

     })
  }
  const changeQueryOnClickWatch= () =>{
    setQuery({ name: 'ROLEX',
              price: '€110',
              title:'watch',
              img: watchImage

     })
  }

  //OPEN DIFFERENT MODAL FOR EACH VALUE
  const handleShowModals = () =>{
    if(query.name==='EKERO' || query.title==='table'){
      setIsOpenTable(true)   
    }
    else if(query.name==='SODERHANN' || query.title==='couch')
    {
      setIsOpenCouch(true)
    }
    else if(query.name==='PORTRAIT' || query.title==='portrait')
    {  
      setIsOpenPortrait(true)
    }
    else if(query.name==='ROLEX' || query.title==='watch')
    {
      setIsOpenWatch(true)
    }
  }
  //OPEN MODAL WHEN THE VALUE CHANGES
  useEffect(()=>{
    handleShowModals();
  },[query]);

  return (
      <div className={classes.container}>
        <img className={classes.image} src={ikeaImage} alt='Living Room'/>
        <button className={classes.tableButton} onClick={changeQueryOnClickTable}><BiChevronUp /></button>
        <button className={classes.couchButton} onClick={changeQueryOnClickCouch}><BiChevronUp /></button>
        <button className={classes.portraitButton} onClick={changeQueryOnClickPortrait}><BiChevronUp /></button>
        <button className={classes.watchButton} onClick={changeQueryOnClickWatch}><BiChevronUp /></button>

        <Modal className={classes.modalTable} isOpen={isOpenTable} onRequestClose={()=>setIsOpenTable(false)}>
          <Tag name={query.name} price={query.price} title={query.title} img={query.img}/>
        </Modal>
        <Modal className={classes.modalCouch} isOpen={isOpenCouch} onRequestClose={()=>setIsOpenCouch(false)}>
          <Tag name={query.name} price={query.price} title={query.title} img={query.img}/>
        </Modal>
        <Modal className={classes.modalPortrait} isOpen={isOpenPortrait} onRequestClose={()=>setIsOpenPortrait(false)}>
          <Tag name={query.name} price={query.price} title={query.title} img={query.img}/>
        </Modal>
        <Modal className={classes.modalWatch} isOpen={isOpenWatch} onRequestClose={()=>setIsOpenWatch(false)}>
          <Tag name={query.name} price={query.price} title={query.title} img={query.img}/>
        </Modal>
      </div>
  );
}

export default IkeaImage;
