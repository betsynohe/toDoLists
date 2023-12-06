import { Select, FormLabel, FormControl } from '@chakra-ui/react'

export default function SelectForm() {
    return (
        <FormControl m='50px' display="flex">
            <FormLabel display="flex" mr='20px' ml='20px' alignItems="center">Seleciona una Opción</FormLabel>
            <Select width='15%'>
                <option value='Todas'>Todas</option>
                <option name='Completas' value='Completas'>Completas</option>
                <option name='Incompletas' value='Incompletas'>Incompletas</option>
            </Select>
        </FormControl>
    
    )
}
