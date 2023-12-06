import { List, ListItem, ListIcon,} from '@chakra-ui/react'
import { AttachmentIcon } from '@chakra-ui/icons'

function ListTask () {
    return (
        <List spacing={3} m='20px'
        >
            <ListItem>
                <ListIcon as={AttachmentIcon} color='cyan' />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
        </List>
    )
}
export default ListTask