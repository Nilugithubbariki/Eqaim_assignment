import Image from 'next/image'
import Sidebar from './(sidebar)/sidebar/Sidebar'
import CommentSide from './comment/CommentSide'
import React from 'react'
import Container from '../../components/Container'

export default function Home() {
  return (
    <Container>
      <div className='flex pt-20 flex-col gap-[1.88rem] lg:flex-row'>
        <Sidebar />
        <CommentSide data={undefined}/>
      </div>
    </Container>
  )
}
