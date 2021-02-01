import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(()=>({
        form: {
            width: '20%',
            margin: 'auto',
            marginTop: '25px'
        },
        searchBox: {
            padding: '5px 20px 5px 5px',
            outline: 'none',
            fontFamily: 'italic'
        },
        btn: {
            padding: '4px 6px',
            marginLeft: '1px',
            color: '#FFFFFF',
            backgroundColor: '#080808',
            outline: 'none'
        }
}));