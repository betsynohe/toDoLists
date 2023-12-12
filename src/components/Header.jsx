import { Heading, Container, Image} from '@chakra-ui/react'
import Imagen1 from '../assets/img/imagen1.png'


import React from 'react'

export default function Header() {
    return (
        <Container display="flex" alignItems="center" justifyContent="center" pt="50px">
            <Image boxSize='100px' src={Imagen1} alt='task' />
            <Heading size='xl' ml="20px" >Mis Tareas</Heading>
        </Container>
    )
}
