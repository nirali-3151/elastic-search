import { useEffect, useState } from "react"
import UserService from "../../services/userService"
import "./books.css"
import { useHistory } from "react-router-dom"
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete'
import {editBook} from "../../reduxStore/Actions/user"
import { useDispatch } from "react-redux";

function ViewBooks() {
    const [book, getBook] = useState([])
    const [id, setId] = useState(0)


    const dispatch = useDispatch()

    const history = useHistory()
    const getBooksData = async () => {
        const initialData = await UserService.getBookDataList()
        getBook(initialData.hits.hits)
    }

    useEffect(() => {
        getBooksData()
    }, [])

    const onClickAddBtn = () => {
        history.push("add-books")
    }

    const onClickDeleteIcon = async (id) => {
        const initialData = await UserService.deleteList(id)
        const result =  book.filter(o => !id.includes(o._id))
        getBook(result)
        setId(id)
    }

    const onClickEditIcon = (b) => {
        dispatch(editBook(b))
        history.push("update-books")
    }

    useEffect(() => {
        if (id !== 0) {
            getBooksData()
        }
    }, [id])

    console.log("book is : " , book);
    return (
        <>

            <div className="user-sign-in-form-signin-btn"
                onClick={() => onClickAddBtn()}
            >
                AddBooks
            </div>
            <table className='table1'>
                <thead>
                    <tr>
                        <th style={{ paddingLeft: "40px" }}>Title</th>
                        <th>Author</th>
                        <th>Content</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>

                <tbody className='tbody1'>
                    {
                        book.map((b) => (
                            <tr key={b._id}>
                                <td style={{ paddingLeft: "40px" }}>{b._source.title}</td>
                                <td>{b._source.author}</td>
                                <td>{b._source.content}</td>
                                <td ><DeleteIcon
                                    className="deleteIcon"
                                    onClick={() => onClickDeleteIcon(b._id)}
                                /></td>
                                <td><ModeEditOutlineIcon
                                    className="edit-icon"
                                    onClick={() => onClickEditIcon(b)}
                                />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                <div>
                </div>
            </table>
        </>
    )
}

export default ViewBooks