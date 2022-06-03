import setTransactionType from "./setTransactionType"

export default function getTransactions(storeName, setTransactions, setBalance) {
    fetch(`http://localhost:3000/api/transactions?store_name=${storeName}`)
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data)
        setBalance(
            data
              .map(transaction => setTransactionType(transaction.transaction_type).operator == '+' ? transaction.amount : -transaction.amount)
              .reduce((acc, curr) => acc + curr, 0) / 100
        )
    })
}