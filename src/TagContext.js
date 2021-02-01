import React, { createContext, useState } from 'react'

//KEEP THE OBJECT ON A GLOBAL STATE SO I CAN USE IT ANYWHERE ON THE APP

export const TagContext = createContext();

export const TagProvider = (props) => {
    const [query,setQuery] = useState(
        {
            name:'',
            price:'',
            title:'',
            img:''
        }
       )

    return(
        <TagContext.Provider value={[query,setQuery]}>
            {props.children}
        </TagContext.Provider>
    )
}