import { List, ListItem, ListIcon, Box, Button, Stack } from '@chakra-ui/react'
import { AttachmentIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { useState } from 'react';

function ListTask({ task, id, setAllNotes, value, onCheckButtonClick }) {
    /* const [openModal, setOpenModal] = useState(false); */
    const [check, setCheck] = useState(value === "complete");

    const handleButtonCheck = () => {
        setCheck(!check);
        onCheckButtonClick(id);
    };
    return (
        <List id={id} display='flex' mt='10px' justifyContent='space-between'>
            <ListItem display='flex' alignItems='center'>
                <ListIcon as={AttachmentIcon} color='black' mr='10px' ml='10px' className={ check ? "bg-[#cccccc] w-full text-xl line-through flex justify-between" : "bg-white w-full text-xl flex justify-between"}/>
                {task}
            </ListItem>
            <Box>
                <Stack direction='row'>
                    <Button id={id} leftIcon={<EditIcon />} colorScheme='black' size='sm' variant='outline' className={ check ? "bg-[#cccccc] min-w-[80px] px-0 h-full border-l-2 border-[#D99951]" : "bg-[#D99951] min-w-[80px] "} onClick={handleButtonCheck}>
                        Completar
                    </Button>
                    <Button rightIcon={<DeleteIcon />} colorScheme='black' size='sm' variant='outline'>
                        Eliminar
                    </Button>
                </Stack>
            </Box>
        </List>
    )
}
export default ListTask