import Axios from 'axios'
import getTransactions from './getTransactions';

export default function postTransactions(file, setTransactions, setBalance, optionSelected) {
    let formData = new FormData();
    formData.append('file', file)

    Axios.post('http://localhost:3000/api/transactions', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(res => {
        getTransactions(optionSelected, setTransactions, setBalance)
        alert('Arquivo enviado com sucesso!')

    })
}