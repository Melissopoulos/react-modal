import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(()=>({
    container:{
        position: 'relative',
        width: '80%',
        height: '70%'

    },
    image:{
        width: '100%',
        height: '100%',
        margin:'80px',
        marginTop:'25px'
    },
    tableButton:{
        position: 'absolute',
        top: '65%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        msTransform: 'translate(-50%, -50%)',
        backgroundColor: '##FFFFFF',
        color: '#080808',
        fontSize: '16px',
        padding: '12px 20px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
        outline: 'none',
        borderRadius: '50%'
    },
    couchButton:{
        position: 'absolute',
        top: '68%',
        left: '72%',
        transform: 'translate(-50%, -50%)',
        msTransform: 'translate(-50%, -50%)',
        backgroundColor: '##FFFFFF',
        color: '#080808',
        fontSize: '16px',
        padding: '12px 20px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
        outline: 'none',
        borderRadius: '50%'
    },
    portraitButton:{
        position: 'absolute',
        top: '40%',
        left: '65%',
        transform: 'translate(-50%, -50%)',
        msTransform: 'translate(-50%, -50%)',
        backgroundColor: '##FFFFFF',
        color: '#080808',
        fontSize: '16px',
        padding: '12px 20px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
        outline: 'none',
        borderRadius: '50%'
    },
    watchButton:{
        position: 'absolute',
        top: '33%',
        left: '30%',
        transform: 'translate(-50%, -50%)',
        msTransform: 'translate(-50%, -50%)',
        backgroundColor: '##FFFFFF',
        color: '#080808',
        fontSize: '16px',
        padding: '12px 20px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
        outline: 'none',
        borderRadius: '50%'
    },
    modalTable: {
        width: '10%',
        height:'20%',
        position: 'fixed',
        top: '55%',
        left: '37%',
        outline:'none'  
    },
    modalCouch: {
        width: '10%',
        height:'20%',
        position: 'fixed',
        top: '58%',
        left: '53%',
        outline:'none'  
    },
    modalPortrait: {
        width: '10%',
        height:'20%',
        position: 'fixed',
        top: '37%',
        left: '50%',
        outline:'none'   
    },
    modalWatch: {
        width: '10%',
        height:'20%',
        position: 'fixed',
        top: '33%',
        left: '20%',
        outline:'none'      
    },
    

}));