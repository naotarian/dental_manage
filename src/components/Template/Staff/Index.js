import Grid from '@mui/material/Grid'
import StaffList from '@/components/Parts/Staff/StaffList'
import StaffRegist from '@/components/Parts/Staff/StaffRegist'
const Index = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <StaffList />
        </Grid>
        <Grid item xs={8}>
          <StaffRegist />
        </Grid>
      </Grid>
    </>
  )
}
export default Index
