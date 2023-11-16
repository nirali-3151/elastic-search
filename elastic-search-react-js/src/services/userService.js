import httpClient from "./httpClient";

import React, { Component } from 'react'

class UserService extends Component {

    //get book data
    static async getBookDataList() {
        let result = []
        try {
            let api_name = `view-books`
            result = await httpClient.getBookData(api_name)
        } catch (error) {
            console.log("get login user", error);
        }
        return result
    }

    //add book data
    static async addBookList(newData) {
        let result = []
        try {
            let api_name = "add_users"
            result = await httpClient.addBook(api_name, newData)
        } catch (error) {
            console.log("get login user", error);
        }
        return result
    }


    //update book list
    static async updateBookList(id , newData) {
        let result = []
        try {
            let api_name = `update-books/${id}`
            result = await httpClient.updateBook(api_name, newData)
        } catch (error) {
            console.log("get login user", error);
        }
        return result
    }


    //delete book data
    static async deleteList(id) {
        let result = []
        try {
            let api_name = `delete-books?id=${id}`
            result = await httpClient.delete(api_name,id)
        } catch (error) {
            console.log("get login user", error);
        }
        return result
    }


}

export default UserService;