import Grid from '@material-ui/core/Grid';


const IntakeRow = (props) => {
    const { rowData } = props

    return (
        <>
            <Grid item xs={5} >{rowData.name}</Grid>
            <Grid align="center" item xs={1} >{rowData.szenhidrat}</Grid >
            <Grid align="center" item xs={1} >{rowData.zsir}</Grid >
            <Grid align="center" item xs={1} >{rowData.feherje}</Grid >
            <Grid align="center" item xs={1} >{rowData.kesztomeg}</Grid >
            <Grid align="center" item xs={1} >{rowData.nyerstomeg}</Grid >
        </>
    );
}




export default IntakeRow;

