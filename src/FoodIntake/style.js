import { makeStyles } from '@material-ui/core/styles';
import globalStyle from '../globalStyles/style'

const useStyles = makeStyles({
    root: {
        ...globalStyle.defaultColor,
        table: {
            minWidth: 650,
        },
    }

});

export default useStyles