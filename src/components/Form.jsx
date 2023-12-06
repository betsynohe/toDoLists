/* import { useState } from 'react'; */
import {FormControl, FormLabel, Input} from '@chakra-ui/react'

export default function Form() {
    
    return (
        <FormControl  display="flex" m='30px'>
            <FormLabel display="flex" mr='20px' alignItems="center">Agregue Nueva Tarea</FormLabel>
            <Input  htmlSize={30} width='auto' type='text' />
        </FormControl>
    )
}

