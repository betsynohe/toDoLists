import { Button as ButtonChakra, FormControl } from '@chakra-ui/react'


function Button() {
    return (
        <FormControl display='flex' justifyContent='center'>
            <ButtonChakra type='submit' textAlign='center' colorScheme='cyan' variant='outline'>
                Agregar
            </ButtonChakra>
        </FormControl>
    
    )
}
export default Button