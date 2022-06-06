import {
    FormControl,
    FormLabel,
    Box,
    FormHelperText,
    Select
  } from '@chakra-ui/react'
import getTransactions from '../../services/getTransactions'

export default function Filter({optionsAvailable, setOptionSelected, setTransactions, setBalance}) {
    return (
        <>
            <FormControl textAlign='center'>
                <FormLabel htmlFor='email'>Nome da Loja</FormLabel>
                <Select onChange={(e) => {
                    setOptionSelected(e.target.value)
                    getTransactions(e.target.value, setTransactions, setBalance)
                }} placeholder='Todos'>
                    {optionsAvailable.map((option, i) => <option value={option} key={i}>{option}</option>)}
                </Select>
                <FormHelperText>Após selecionar uma loja, o saldo ficará disponível</FormHelperText>
            </FormControl>
        </>
    )
}