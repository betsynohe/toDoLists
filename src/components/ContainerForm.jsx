import { Box, Container } from '@chakra-ui/react'
import Form from "./Form";
import SelectForm from './SelectForm';
import Button from './Button';

function ContainerForm ({setForm, setSelectForm, setButtonForm}) {
    return (
        <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' mt='50px'>
            <Box display='flex'>
                <Form setForm={setForm} />
                <SelectForm setSelectForm={setSelectForm} />
            </Box>
            <Container>
                <Button setButtonForm={setButtonForm} />
            </Container>
            
        </Box>
    
    )
}
export default ContainerForm