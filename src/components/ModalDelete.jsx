import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, Text, Button} from '@chakra-ui/react'

export default function ModalDelete ({ onClose, setAllNotes, id, task, isOpen, onOpen,}) {

    const handleButtonDelete = () => {
        setAllNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    };

    return (
        <>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalBody pb={6}>
            <Text> ¿Esta seguro de querer eliminar <span>{task}</span>? Esta acción no podra deshacerse.</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleButtonDelete}>
            Eliminar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    )
}
