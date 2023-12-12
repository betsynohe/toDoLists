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
        <Center display='flex' flexDirection='column'>
            <Box bg='#c5f9f9' display='flex' justifyContent='center' alignItems='center' mt='50px' mr='0px'>
                <Box display='flex'>
                    <Form setAllNotes={setAllNotes} setSelectedFilter={setSelectedFilter} />
                </Box>
            </Box>
            
                        <Box bg='#c5f9f9' width={{md:"80%", lg:"50%"}}  size='sm' mt='50px'>
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
               
        </Center>


    )
}
export default ContainerForm