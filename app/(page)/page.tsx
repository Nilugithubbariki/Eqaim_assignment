
import Image from 'next/image'
import Sidebar from './(sidebar)/sidebar/Sidebar'
import CommentSide from './comment/CommentSide'
import React from 'react'
import Container from '../../components/Container'

export default function Home() {
  return (
    <Container>
      <div className='flex pt-20 gap-[1.88rem]'>
        <Sidebar />
        <CommentSide />
      </div>
    </Container>
  )
}
