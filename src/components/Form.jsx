import { useState } from 'react';
import { FormControl, FormLabel, Input, Button as ButtonChakra, Box } from '@chakra-ui/react'
import SelectForm from './SelectForm';

export default function Form({ setSelectedFilter, setAllNotes }) {
    const [task, setTask] = useState("");
    const handleChange = (e) => {
        setTask(e.target.value);
    };
    const handleSubmit = (e) => { 
        e.preventDefault();
        if (task.trim() !== "") {
            const newTask = {
                id: crypto.randomUUID(),
                text: task.trim(),
                value: "incomplete",
            };
            setAllNotes((prevNotes) => [...prevNotes, newTask]);
            setTask("");
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <FormControl  display="flex" m='30px' flexDirection='column'>
            <Box display='flex'>
                <FormLabel display="flex" mr='20px' alignItems="center">Agregue Nueva Tarea</FormLabel>
                <Input onChange={handleChange} variant='filled' borderColor='black' htmlSize={30} width='auto' type='text' name="tarea" value={task} placeholder="Agregue la tarea" />
                <SelectForm setSelectedFilter={setSelectedFilter} />
            </Box>
            <FormControl display='flex' justifyContent='center' mt='25px' mb='15px'>
                <ButtonChakra type='submit' textAlign='center' colorScheme='black' variant='outline'>
                    Agregar
                </ButtonChakra>
            </FormControl>
        </FormControl>
        </form>
        
    )
}

