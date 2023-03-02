import React from 'react';
import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './'

const Videos = ({ videos, direction }) => {

  if(!videos?.length) return 'Loading'
    
  return (
    <Stack direction = { direction || "row"}
    flexWrap ='wrap'
    gap = {1}
    justifyContent="start"
    >
      {
        videos.map( (item, idx) => (
            <Box key = {idx}>
                {item.id.videoId && <VideoCard video = { item } />} 
                {/* if the the data coming is a video render the video card */}
                {item.id.channelId && <ChannelCard channelDetail = { item } />} 

            </Box>
        ))
      }
    </Stack>
  )
}

export default Videos;