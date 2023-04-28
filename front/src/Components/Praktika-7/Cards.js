import React, {useState, useEffect} from 'react';
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';

const url = 'https://api.github.com/users';

function Cards() {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
        //console.log(users);
    };
    useEffect(() => {
        getUsers();
    }, []);
    let AllCards = users.map((user) => {
        return(
            <Card key={uuidv4()} username = {user.login} img = {user.avatar_url} />
        );
    });
  return (
    <div className="row">{AllCards}</div>
  );
}

export default Cards;