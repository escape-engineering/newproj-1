import CustomButton from './CustomButton';

//나이와 이름을 나타내기위한 자식컴포넌트
function User(props) {
  return (
    //데이터별로 나타낼 div
    <div className="square-style">
      {/* props에서 user의 age을 표시함 */}
      <div>{props.user.age}살 - </div>
      {/* prop에서 user의 name을 표시함 */}
      <div>{props.user.name}</div>

      {/* 버튼에대한 props를 CustomButton에 넘기기 */}
      <CustomButton
        // color에 대한 props를 넘겨준다.
        color="red"
        //온클릭에 대한 props를 넘겨주는데 props로 받아온 handleDelete가 들어감
        //handleDelete는 함수인데 id값을 요구하므로 props.user.id를 넣는다.
        onClick={() => {
          props.handleDelete(props.user.id);
        }}
      >
        삭제하기
      </CustomButton>
    </div>
  );
}

export default User;
