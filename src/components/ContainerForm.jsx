import { Box, Card, Center, CardBody, Stack, Heading, StackDivider, Text } from '@chakra-ui/react'
import Form from "./Form";
import { useState } from 'react';
import ListTask from './ListTask';

function ContainerForm() {
    const [allNotes, setAllNotes] = useState(() => {
        const tasksLocal = localStorage.getItem("task");
        return tasksLocal ? JSON.parse(tasksLocal) : [];
    });

    const [selectedFilter, setSelectedFilter] = useState("all");

    const handleCheckButtonClick = (taskId) => {
        setAllNotes((prevNotes) =>
            prevNotes.map((note) =>
                note.id === taskId
                    ? { ...note, value: note.value === "incomplete" ? "complete" : "incomplete" }
                    : note
            )
        );
    };
    const filteredElements = allNotes.filter((note) => {
        if (selectedFilter === "all") {
            return true;
        } else {
            return note.value === selectedFilter;
        }
    });

    const tasksLocal = JSON.stringify(allNotes);
    localStorage.setItem("task", tasksLocal);
    return (
        <Center display='flex'flexDirection='column'>
            <Box bg='#c5f9f9' display='flex' justifyContent='center' alignItems='center' flexDirection='column' mt='50px'>
                <Box display='flex'>
                    <Form setAllNotes={setAllNotes} setSelectedFilter={setSelectedFilter} />
                </Box>
            </Box>
            <Card bg='#c5f9f9' w='50%' display='flex' size='sm' mt='50px'>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                        <Text fontSize='3xl' textAlign='center' mb='30px'>Lista de tareas</Text>
                            <Heading size='xs' textTransform='uppercase'>
                                {filteredElements.map((note) => {
                                    return (
                                        <ListTask
                                            key={note.id}
                                            task={note.text}
                                            id={note.id}
                                            value={note.value}
                                            setAllNotes={setAllNotes}
                                            onCheckButtonClick={handleCheckButtonClick}
                                        />
                                    );
                                })}
                            </Heading>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </Center>


    )
}
export default ContainerForm