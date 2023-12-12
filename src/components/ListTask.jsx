import { List, ListItem, ListIcon, Box, Button, Stack } from '@chakra-ui/react'
import { AttachmentIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { useState } from 'react';
import ModalDelete from './ModalDelete';

function ListTask({ task, id, setAllNotes, value, onCheckButtonClick }) {
    const [openModal, setOpenModal] = useState(false);
    const [check, setCheck] = useState(value === "complete");

    const handleButtonCheck = () => {
        setCheck(!check);
        onCheckButtonClick(id);
    };

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };
    return (
        <List id={id} display='flex' mt='10px' mb='20px' justifyContent='space-between'>
            <ListItem justifyContent='center' display='flex' alignItems='center' style={{ textDecoration: check ? 'line-through' : 'none', color: check ? 'red' : 'black' }}>
                <ListIcon as={AttachmentIcon} color='black' mr='10px' ml='10px' />
                {task}
            </ListItem>
            <Box>
                <Stack direction='row' mr='30px'>
                    <Button onClick={handleButtonCheck} leftIcon={<EditIcon />} colorScheme='blue' size={{md:'sm', lg:'md'}} variant='outline' style={{ textDecoration: check ? 'line-through' : 'none', color: check ? 'gray' : 'blue' }} >
                    </Button>
                    <Button onClick={handleOpenModal} rightIcon={<DeleteIcon />} colorScheme='red' size={{md:'sm', lg:'md'}} variant='outline' >
                    </Button>
                    <ModalDelete task={task} id={id} setAllNotes={setAllNotes} isOpen={openModal} onClose={handleCloseModal}/>
                </Stack>
            </Box>
        </List>
    )
}
export default ListTask