
import ListTask from './ListTask'
import { Card, CardBody, Stack, StackDivider, Box, Center, Heading } from '@chakra-ui/react'

function ContainerTask(setListTask) {
    return (
        <Center mt='50px'>
            <Card bg='#c5f9f9' w='50%' display='flex' size='sm' >
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                <ListTask setListTask={setListTask} />
                            </Heading>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </Center>

    )
}
export default ContainerTask