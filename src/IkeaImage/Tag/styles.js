import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(()=>({
     modalBox: {
         backgroundColor:'white',
     },
     img: {
        width:'38%',
        height:'38%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop:'10px',
        padding:'10px'
     },
     name: {
        textAlign: 'center',
        marginBlockStart: '4px',
        marginBlockEnd: '15px'
     },
     price:{
        textAlign: 'center',
        fontStyle: 'italic',
        marginBottom:'5px',
        marginBlockStart: '20px',
        marginBlockEnd: '20px',
        padding: '20px'
     },
     title:{
        textAlign: 'center',
        fontStyle: 'italic',
        marginBlockStart: '6px',
        marginBlockEnd: '8px'
     }

}));