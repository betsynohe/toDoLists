import { Select, FormLabel, FormControl } from '@chakra-ui/react'

export default function SelectForm ({ setSelectedFilter }) {
    const handleFiltroChange = (e) => {
        setSelectedFilter(e.target.value);
    };
    
    return (
        <FormControl display={{ md: "flex" }} >
            <FormLabel display="flex" ml={{ md: "0px", lg: "20px" }} alignItems="center">Seleciona una Opción</FormLabel>
            <Select width='40%' variant='filled' borderColor='black' mt={{ md: "50px", lg: "0px"}} onChange={handleFiltroChange}>
                <option value='all'>Todas</option>
                <option name='complete' value='complete'>Completas</option>
                <option name='incomplete' value='incomplete'>Incompletas</option>
            </Select>
        </FormControl>
    
    )
}
