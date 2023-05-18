import Typography from '@mui/material/Typography'
const PageTitle = props => {
  const { title } = props
  return (
    <div className="manage-title">
      <Typography variant="h1">{title}</Typography>
    </div>
  )
}
export default PageTitle
