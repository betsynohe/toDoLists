import { Select, FormLabel, FormControl } from '@chakra-ui/react'

export default function SelectForm() {
    return (
        <FormControl  display="flex" m='30px'>
            <FormLabel display="flex" ml='20px' alignItems="center">Seleciona una Opción</FormLabel>
            <Select width='40%'>
                <option value='Todas'>Todas</option>
                <option name='Completas' value='Completas'>Completas</option>
                <option name='Incompletas' value='Incompletas'>Incompletas</option>
            </Select>
        </FormControl>
    
    )
}
