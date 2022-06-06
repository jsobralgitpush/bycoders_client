import DataTable from 'react-data-table-component';
import setTransactionType from '../../services/setTransactionType';
import formatDateTime from '../../services/formatDateTime';

export default function ListTransactions({scope}) {
    const columns = [
        {
            name: 'Nome da Loja',
            selector: row => row.store_name,
            sortable: true
        },
        {
            name: 'Nome do Dono da Loja',
            selector: row => row.store_owner,
            sortable: true
        },
        {
            name: 'Tipo de transação',
            selector: row => row.transaction_type,
            sortable: true
        },
        {
            name: 'Data',
            selector: row => row.date,
            sortable: true
        },  
        {
            name: 'Hora',
            selector: row => row.time,
            sortable: true
        },  
        {
            name: 'Tipo de extrato',
            selector: row => row.extract_type,
            sortable: true
        },
        {
            name: 'Valor',
            selector: row => row.amount,
            sortable: true
        },
    ];
    
    const data = scope.map(transaction => {
        const { description, nature, operator } = setTransactionType(transaction.transaction_type)
        const { date, time } = formatDateTime(transaction.date, transaction.time)

        return {
            store_name: transaction.store_name,
            store_owner: transaction.store_owner,
            transaction_type: description,
            date: date,
            time: time,
            extract_type: nature,
            amount: `R$ ${transaction.amount/100}`,
        }
    })

    return (
        <>
            <DataTable
                columns={columns}
                data={data}
                sortable
            />
        </>
    )
}