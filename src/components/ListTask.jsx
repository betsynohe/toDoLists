import { List, ListItem, ListIcon, Box, Button, Stack} from '@chakra-ui/react'
import { AttachmentIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons'


function ListTask () {
    return (
        <List display='flex' mt='10px' justifyContent='space-between'>
            <ListItem display='flex' alignItems='center'>
                <ListIcon as={AttachmentIcon} color='black' mr='10px' ml='10px' />
                Tarea
            </ListItem>
            <Box>
                <Stack direction='row'>
                    <Button leftIcon={<EditIcon  />} colorScheme='black'  size='sm' variant='outline'>
                        Editar
                    </Button>
                    <Button rightIcon={<DeleteIcon />} colorScheme='black' size='sm'  variant='outline'>
                        Eliminar
                    </Button>
                </Stack>
            </Box>
        </List>
    )
}
export default ListTask