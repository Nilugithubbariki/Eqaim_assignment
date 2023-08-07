import Container from '@/components/Container'
import SideComponent from '@/components/SideComponent'
import Button from '@/components/ui/Button'
import GoBack from '@/components/ui/GoBack'
import Select from '@/components/ui/Select'
import Vote from '@/components/ui/Vote'
import Image from 'next/image'
import Sidebar from './(sidebar)/sidebar/Sidebar'
import CommentSide from './comment/CommentSide'

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
