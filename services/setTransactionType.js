export default function setTransactionType(type) {
    switch (type) {
        case '1':
            return  {
                description: 'Débito',
                nature: 'Entrada',
                operator: '+'
            }
        case '2':
            return  {
                description: 'Boleto',
                nature: 'Saída',
                operator: '-'
            }
        case '3':
            return  {
                description: 'Financiamento',
                nature: 'Saída',
                operator: '-'
            }
        case '4':
            return  {
                description: 'Cŕedito',
                nature: 'Entrada',
                operator: '+'
            }
        case '5':
            return  {
                description: 'Recebimento de Empréstimo',
                nature: 'Entrada',
                operator: '+'
            }
        case '6':
            return  {
                description: 'Vendas',
                nature: 'Entrada',
                operator: '+'
            }
        case '7':
            return  {
                description: 'Recebimento de TED',
                nature: 'Entrada',
                operator: '+'
            }
        case '8':
            return  {
                description: 'Recebimento de DOC',
                nature: 'Entrada',
                operator: '+'
            }
        case '9':
            return  {
                description: 'Aluguel',
                nature: 'Saída',
                operator: '-'
            }
    }

}