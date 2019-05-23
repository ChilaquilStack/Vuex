"use strict"

class User {

    contructor() {
        this._id = 0;
        this._first = '';
        this._last = '';
        this._email = '';
        this._password = '';
    }

    set id(id = 0){
        this._id = id;
    }

    get id(){
        return this._id;
    }

    set first(first = '') {
        this._first = first;
    }

    get first(){
        return this._first;
    }

    set last(last = ''){
        this._last = last;
    }

    get last(){
        return this._last;
    }

    set email(email = ''){
        this._email = email;
    }

    get email(){
        return this._email;
    }

    get password(){
        return this._password;
    }

    set password(password){
        this._password = password;
    }

}

export default User;