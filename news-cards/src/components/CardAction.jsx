import React from 'react';
import { UilBookmark, UilHeart, UilComment } from '@iconscout/react-unicons'

const CardAction = ({className, save, like, comment, iconSize}) => {
  return (
    <div className={`flex items-center text-white ${className}`}>
      <span className='text-sm flex flex-col gap-1 items-center'>
         {save}
         <UilBookmark size={iconSize}/>
      </span>

      <span className='text-sm flex flex-col gap-1 items-center'>
         {like}
         <UilHeart size={iconSize}/>
      </span>

      <span className='text-sm flex flex-col gap-1 items-center'>
         {comment}
         <UilComment size={iconSize}/>
      </span>
    </div>
  )
}

export default CardAction