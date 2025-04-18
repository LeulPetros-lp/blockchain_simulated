import React from 'react'
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import { Block } from '../interfaces/interfaces';
import Typography from '@mui/joy/Typography';


function SingleCard({ block }: { block: Block }) {
  return (
    <div className='w-90 m-5'>
      {
        block.index === 0 ?
          <Card variant="solid">
            <CardContent>
              <Typography level="title-md" textColor="inherit">
                {block.data}
              </Typography>
              <Typography color='white'>{block.hash.length > 25 ? block.hash.slice(0, 25) : block.hash} ...</Typography>
            </CardContent>
          </Card>
          :

          <Card variant="outlined">
            <CardContent>
              <Typography level="title-md">{block.data}</Typography>
              <Typography>{block.hash.length > 25 ? block.hash.slice(0, 25) : block.hash} ...</Typography>
            </CardContent>
          </Card>
      }
    </div>
  )
}

export default SingleCard