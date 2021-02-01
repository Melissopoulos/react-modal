import React from 'react';

import useStyles from './styles'


function Tag(props) {
    const classes = useStyles();

    return (
        <div className={classes.modalBox}>
            <img className={classes.img} src={props.img} />
            <h4 className={classes.name}>{props.name}</h4>
            <p className={classes.title}>{props.title}</p>
            <h5 className={classes.price}>{props.price}</h5>
        </div>
     );
}

export default Tag;
