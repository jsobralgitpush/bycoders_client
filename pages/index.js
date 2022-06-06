import FileUploader from "../components/Input";
import Filter from "../components/Filter";
import ListTransactions from "../components/ListTransactions";
import { Box, SimpleGrid, Container, Center } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export default function Home() {
  const [transactions, setTransactions] = useState([]);
  const [optionSelected, setOptionSelected] = useState(null);
  const [options, setOptions] = useState([]);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3002/api/transactions')
      .then(res => res.json())
      .then(data => {
        setTransactions(data);
        setOptions([...new Set(data.map(transaction => transaction.store_name))])
      })
  }, [])


  return (
    <>
        <SimpleGrid colums={1} spacing={5}>
          <Container>
            <Box m={10}>
              <FileUploader optionSelected={optionSelected} setTransactions={setTransactions} setBalance={setBalance}></FileUploader>
            </Box>
            <Box m={5}>
              <Filter setBalance={setBalance} setTransactions={setTransactions} setOptionSelected={setOptionSelected} optionsAvailable={options}></Filter>
            </Box>
              {optionSelected ? <Box bg={balance > 0 ? 'green' : 'red'} w='100%' p={4} color='white'>Saldo disponível para {optionSelected}: R$ {balance} </Box> : ''}
          </Container>
          <Box>
            <ListTransactions scope={transactions}></ListTransactions>
          </Box>
        </SimpleGrid>
    </>
  )
}