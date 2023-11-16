import TextField from '@mui/material/TextField';
import UserService from "../../services/userService"
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
function AddBooks() {
    const history = useHistory()
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
            const newData = {
                title: data.title,
                author: data.author,
                content: data.content
            }
            const initialData = await UserService.addBookList(newData)
            history.push('/')
        }
        else {
            alert("every feild is required")
        }
    }

    return (
        <>
            <div className="user-sign-in-form-wrapper-inner-right">
                <div className="user-sign-in-form-wrapper-inner-right-inner">
                    <div className="user-sign-in-form-sign-in-here">
                         Add Books
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
                        AddBooks
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddBooks