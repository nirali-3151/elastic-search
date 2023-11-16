import TextField from '@mui/material/TextField';
import UserService from "../../services/userService"
import { useHistory } from 'react-router-dom';
import { useState ,useEffect } from 'react';
import { useSelector } from "react-redux"

function UpdateBooks() {

    const users = useSelector((state) => state.UserReducer)

    const history = useHistory()

    const { book } = users
    const [data, setData] = useState({
        title: "",
        author: "",
        content: "",
    })

    //on change handler
    const onChangeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    //onoCLick aadd book in btn
    const onClickAddBtn = async () => {
        if (data.title !== "" && data.author !== "" && data.content !== "") {
            const id = book._id
            const newData = {
                title: data.title,
                author: data.author,
                content: data.content
            }
            const initialData = await UserService.updateBookList(id,newData)
            history.push('/')
        }
        else {
            alert("every feild is required")
        }
    }

    useEffect(() => {
        setData(book._source)
    }, [])

    console.log("data is :", data);
    return (
        <>
            <div className="user-sign-in-form-wrapper-inner-right">
                <div className="user-sign-in-form-wrapper-inner-right-inner">
                    <div className="user-sign-in-form-sign-in-here">
                        Update Books
                    </div>
                    <div className="user-sign-in-form-name">
                        <TextField
                            fullWidth
                            required
                            id="standard-required"
                            label="title"
                            variant="standard"
                            name="title"
                            value={data.title}
                            onChange={onChangeHandler}
                        />
                    </div>

                    <div className="user-sign-in-form-password">
                        <TextField
                            fullWidth
                            required
                            id="standard-required"
                            label="author"
                            name="author"
                            value={data.author}
                            onChange={onChangeHandler}
                            variant="standard"
                        />
                    </div>

                    <div className="user-sign-in-form-password">
                        <TextField
                            fullWidth
                            required
                            id="standard-required"
                            label="content"
                            name="content"
                            value={data.content}
                            onChange={onChangeHandler}
                            variant="standard"
                        />
                    </div>

                    <div className="user-sign-in-form-signin-btn"
                        onClick={() => onClickAddBtn()}
                    >
                        Update Books
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateBooks