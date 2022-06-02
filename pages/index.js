import FileUploader from "../components/Input";
import Filter from "../components/Filter";
import ListTransactions from "../components/ListTransactions";
import { Container, Box, SimpleGrid } from '@chakra-ui/react'



export default function Home() {
  return (
    <>
      <Container>
        <SimpleGrid colums={1} spacing={5}>
          <Box>
            <FileUploader></FileUploader>
          </Box>
          <Box>
            <Filter></Filter>
          </Box>
          <Box>
            <ListTransactions></ListTransactions>
          </Box>
        </SimpleGrid>
      </Container>
    </>
  )
}
