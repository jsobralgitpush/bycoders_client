import FileUploader from "../components/Input";
import Filter from "../components/Filter";
import ListTransactions from "../components/ListTransactions";
import { Box, SimpleGrid } from '@chakra-ui/react'
import { useState } from 'react'

export default function Home({initialScope}) {
  const [transactions, setTransactions] = useState(initialScope);
  const [optionSelected, setOptionSelected] = useState(null);
  const [balance, setBalance] = useState(0);

  const options = [...new Set(initialScope.map(transaction => transaction.store_name))]


  return (
    <>
        <SimpleGrid colums={1} spacing={5}>
          <Box>
            <FileUploader optionSelected={optionSelected} setTransactions={setTransactions} setBalance={setBalance}></FileUploader>
          </Box>
          <Box>
            <Filter setBalance={setBalance} setTransactions={setTransactions} setOptionSelected={setOptionSelected} optionsAvailable={options}></Filter>
          </Box>
            {optionSelected ? <Box bg={balance > 0 ? 'green' : 'red'} w='100%' p={4} color='white'>Saldo disponível para {optionSelected}: R$ {balance} </Box> : ''}
          <Box>
            <ListTransactions scope={transactions}></ListTransactions>
          </Box>
        </SimpleGrid>
    </>
  )
}

export async function getStaticProps(context) {
  const res = await fetch('http://localhost:3000/api/transactions');
  const initialScope = await res.json()

  return {
      props: {initialScope}
  }
}