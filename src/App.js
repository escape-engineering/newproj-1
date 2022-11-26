import React from 'react';
import './App.css'; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.
import { useState } from 'react';
import CustomButton from './components/CustomButton';
import User from './components/User';

const App = () => {
  //users객체의 기본state만들기
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: '송중기' },
    { id: 2, age: 24, name: '송강' },
    { id: 3, age: 21, name: '김유정' },
    { id: 4, age: 29, name: '구교환' },
  ]);

  //name state 만들기
  const [name, setName] = useState('');

  //age state 만들기
  const [age, setAge] = useState('');

  //새롭게 추가하는 버튼에 대한 기능만들기
  const addUserHandler = () => {
    //newUser에대한 형식
    const newUser = {
      //이미 있는 것 뒤에 추가하므로 length+1
      id: users.length + 1,
      //input태그의 value값인 age를 넣음
      age: age,
      //input태그의 value값인 name을 넣음
      name: name,
    };
    //위에서 새로운 유저를 생성했으니,
    //기존 유저들을 전개하고 그 뒤에 새로운 유저를 추가하는 방식
    setUsers([...users, newUser]);
  };

  //기존유저를 제거하는 버튼에대한 기능 만들기
  //id를 받을건데 삭제할 id를 받아서 삭제를 해야한다.
  const deleteUserHandler = (id) => {
    //users에서 filter를 하는데 각각의 user을 봐서
    //user의 id가 지금 내가 설정한 id와 같지 않다면 filter를 진행
    //그러니까 이 버튼은 각 유저마다에 위치하는데, 그 유저와 id값이 나머지는 다 다르므로
    //해당 삭제버튼 id를 제외한 나머지만 newUserList에 들어가게된다.
    //따라서 setUsers(newUserList)를 하게되면, 일치하는 해당 아이디를 제외한 나머지만 남게 된다.
    const newUserList = users.filter((user) => user.id !== id);
    //삭제버튼 당사의 id만 제외한 리스트를 setUsers하기때문에 state값이 변한다.
    setUsers(newUserList);
    // setUsers(users.filter((user) => user.id !== id)) 이렇게 직접 넣어도 됨
  };

  return (
    <div>
      {/* 큰틀div */}
      <div className="app-style">
        {/* users에서 각 객체마다 map을 진행한다. */}
        {users.map((user) => {
          // 만약 user.age가 25보다 낮다면
          if (user.age < 25) {
            return (
              // User컴포넌트로 prop을 보내라
              <User
                // 삭제하는 함수를 보내라
                handleDelete={deleteUserHandler}
                // user state값을 보내라
                user={user}
                // 키값을 보내라(키값을 보내지 않으면 오류발생)
                key={user.id}
              ></User>
            );
          }
          // user.age가 25보다 크다면
          else {
            // null을 보내라
            return null;
          }
        })}
      </div>
      {/* 큰틀div끝 */}

      {/* 이름입력input */}
      <input
        //작성되는 값은 name변수
        value={name}
        placeholder="이름을 입력해주세요"
        // 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
        onChange={(e) => setName(e.target.value)}
      />
      <input
        //작성되는 값은 age변수
        value={age}
        placeholder="나이를 입력해주세요"
        // 인풋 이벤트로 들어온 입력 값을 age의 값으로 업데이트
        onChange={(e) => setAge(e.target.value)}
      />
      {/* 커스텀버튼에대한 props 전달하기 */}
      <CustomButton
        //색을 green으로 props를 넘김
        color="green"
        //onClick을 addUserHandler로 넘김
        onClick={addUserHandler}
      >
        추가하기
      </CustomButton>
    </div>
  );
};

export default App;
