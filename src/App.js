import React from 'react';
import './App.css'; // ๐ฅ ๋ฐ๋์ App.css ํ์ผ์ import ํด์ค์ผ ํฉ๋๋ค.
import { useState } from 'react';
import CustomButton from './components/CustomButton';
import User from './components/User';

const App = () => {
  //users๊ฐ์ฒด์ ๊ธฐ๋ณธstate๋ง๋ค๊ธฐ
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: '์ก์ค๊ธฐ' },
    { id: 2, age: 24, name: '์ก๊ฐ' },
    { id: 3, age: 21, name: '๊น์ ์ ' },
    { id: 4, age: 29, name: '๊ตฌ๊ตํ' },
  ]);

  //name state ๋ง๋ค๊ธฐ
  const [name, setName] = useState('');

  //age state ๋ง๋ค๊ธฐ
  const [age, setAge] = useState('');

  //์๋กญ๊ฒ ์ถ๊ฐํ๋ ๋ฒํผ์ ๋ํ ๊ธฐ๋ฅ๋ง๋ค๊ธฐ
  const addUserHandler = () => {
    //newUser์๋ํ ํ์
    const newUser = {
      //์ด๋ฏธ ์๋ ๊ฒ ๋ค์ ์ถ๊ฐํ๋ฏ๋ก length+1
      id: users.length + 1,
      //inputํ๊ทธ์ value๊ฐ์ธ age๋ฅผ ๋ฃ์
      age: age,
      //inputํ๊ทธ์ value๊ฐ์ธ name์ ๋ฃ์
      name: name,
    };
    //์์์ ์๋ก์ด ์ ์ ๋ฅผ ์์ฑํ์ผ๋,
    //๊ธฐ์กด ์ ์ ๋ค์ ์ ๊ฐํ๊ณ  ๊ทธ ๋ค์ ์๋ก์ด ์ ์ ๋ฅผ ์ถ๊ฐํ๋ ๋ฐฉ์
    setUsers([...users, newUser]);
  };

  //๊ธฐ์กด์ ์ ๋ฅผ ์ ๊ฑฐํ๋ ๋ฒํผ์๋ํ ๊ธฐ๋ฅ ๋ง๋ค๊ธฐ
  //id๋ฅผ ๋ฐ์๊ฑด๋ฐ ์ญ์ ํ  id๋ฅผ ๋ฐ์์ ์ญ์ ๋ฅผ ํด์ผํ๋ค.
  const deleteUserHandler = (id) => {
    //users์์ filter๋ฅผ ํ๋๋ฐ ๊ฐ๊ฐ์ user์ ๋ด์
    //user์ id๊ฐ ์ง๊ธ ๋ด๊ฐ ์ค์ ํ id์ ๊ฐ์ง ์๋ค๋ฉด filter๋ฅผ ์งํ
    //๊ทธ๋ฌ๋๊น ์ด ๋ฒํผ์ ๊ฐ ์ ์ ๋ง๋ค์ ์์นํ๋๋ฐ, ๊ทธ ์ ์ ์ id๊ฐ์ด ๋๋จธ์ง๋ ๋ค ๋ค๋ฅด๋ฏ๋ก
    //ํด๋น ์ญ์ ๋ฒํผ id๋ฅผ ์ ์ธํ ๋๋จธ์ง๋ง newUserList์ ๋ค์ด๊ฐ๊ฒ๋๋ค.
    //๋ฐ๋ผ์ setUsers(newUserList)๋ฅผ ํ๊ฒ๋๋ฉด, ์ผ์นํ๋ ํด๋น ์์ด๋๋ฅผ ์ ์ธํ ๋๋จธ์ง๋ง ๋จ๊ฒ ๋๋ค.
    const newUserList = users.filter((user) => user.id !== id);
    //์ญ์ ๋ฒํผ ๋น์ฌ์ id๋ง ์ ์ธํ ๋ฆฌ์คํธ๋ฅผ setUsersํ๊ธฐ๋๋ฌธ์ state๊ฐ์ด ๋ณํ๋ค.
    setUsers(newUserList);
    // setUsers(users.filter((user) => user.id !== id)) ์ด๋ ๊ฒ ์ง์  ๋ฃ์ด๋ ๋จ
  };

  return (
    <div>
      {/* ํฐํdiv */}
      <div className="app-style">
        {/* users์์ ๊ฐ ๊ฐ์ฒด๋ง๋ค map์ ์งํํ๋ค. */}
        {users.map((user) => {
          // ๋ง์ฝ user.age๊ฐ 25๋ณด๋ค ๋ฎ๋ค๋ฉด
          if (user.age < 25) {
            return (
              // User์ปดํฌ๋ํธ๋ก prop์ ๋ณด๋ด๋ผ
              <User
                // ์ญ์ ํ๋ ํจ์๋ฅผ ๋ณด๋ด๋ผ
                handleDelete={deleteUserHandler}
                // user state๊ฐ์ ๋ณด๋ด๋ผ
                user={user}
                // ํค๊ฐ์ ๋ณด๋ด๋ผ(ํค๊ฐ์ ๋ณด๋ด์ง ์์ผ๋ฉด ์ค๋ฅ๋ฐ์)
                key={user.id}
              ></User>
            );
          }
          // user.age๊ฐ 25๋ณด๋ค ํฌ๋ค๋ฉด
          else {
            // null์ ๋ณด๋ด๋ผ
            return null;
          }
        })}
      </div>
      {/* ํฐํdiv๋ */}

      {/* ์ด๋ฆ์๋ ฅinput */}
      <input
        //์์ฑ๋๋ ๊ฐ์ name๋ณ์
        value={name}
        placeholder="์ด๋ฆ์ ์๋ ฅํด์ฃผ์ธ์"
        // ์ธํ ์ด๋ฒคํธ๋ก ๋ค์ด์จ ์๋ ฅ ๊ฐ์ name์ ๊ฐ์ผ๋ก ์๋ฐ์ดํธ
        onChange={(e) => setName(e.target.value)}
      />
      <input
        //์์ฑ๋๋ ๊ฐ์ age๋ณ์
        value={age}
        placeholder="๋์ด๋ฅผ ์๋ ฅํด์ฃผ์ธ์"
        // ์ธํ ์ด๋ฒคํธ๋ก ๋ค์ด์จ ์๋ ฅ ๊ฐ์ age์ ๊ฐ์ผ๋ก ์๋ฐ์ดํธ
        onChange={(e) => setAge(e.target.value)}
      />
      {/* ์ปค์คํ๋ฒํผ์๋ํ props ์ ๋ฌํ๊ธฐ */}
      <CustomButton
        //์์ green์ผ๋ก props๋ฅผ ๋๊น
        color="green"
        //onClick์ addUserHandler๋ก ๋๊น
        onClick={addUserHandler}
      >
        ์ถ๊ฐํ๊ธฐ
      </CustomButton>
    </div>
  );
};

export default App;
