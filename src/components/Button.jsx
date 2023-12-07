import { Button as ButtonChakra, FormControl } from '@chakra-ui/react'


function Button() {
    return (
        <FormControl display='flex' justifyContent='center' mb='15px'>
            <ButtonChakra  type='submit' textAlign='center' colorScheme='black' variant='outline'>
                Agregar
            </ButtonChakra>
        </FormControl>
    
    )
}
export default Button