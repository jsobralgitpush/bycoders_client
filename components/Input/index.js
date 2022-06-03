import postTransactions from "../../services/postTransactions"

export default function FileUploader({optionSelected, setTransactions, setBalance}) {
    return (
        <div className="file-uploader">
            <input type="file" onChange={(e) => {
                postTransactions(e.target.files[0], setTransactions, setBalance, optionSelected)
                e.target.value = ""
            }} />
        </div>
    )
}