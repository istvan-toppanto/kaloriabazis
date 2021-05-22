import Grid from '@material-ui/core/Grid';
import IntakeRow from '../IntakeRow'


const IntakeTable = (props) => {
    const { intakeData } = props

    return <Grid style={{ paddingLeft: 150, paddingRight: 0, paddingTop: 30 }} container spacing={3}>
        {intakeData.map((value, index) =>
            <IntakeRow key={index} rowData={value} ></IntakeRow>
        )}
    </Grid >
}




export default IntakeTable;

