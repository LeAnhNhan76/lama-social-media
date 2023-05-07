import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';


const storyCard = () => {
  return (
    <div className='story-card'
        style={{
            backgroundImage: 'url("https://images.pexels.com/photos/11432837/pexels-photo-11432837.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")',
            height: '140px',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            borderRadius: '5px',
            minWidth: '100px',
            position: 'relative'
        }}
    >
      <AddCircleRoundedIcon color='primary' style={{
        color: 'white',
        position: 'absolute',
        bottom: '5px',
        left: '5px',
        display: 'none'
      }} className='add-btn'></AddCircleRoundedIcon>
    </div>
  )
}

export default storyCard;