//버튼별로 색, 클릭을 주기위한 컴포넌트
function CustomButton(props) {
  //props를 객체구조분해함, props로 color onClick children
  const { color, onClick, children } = props;
  //만약 색깔에 해당하는 값이 있다면
  if (color) {
    return (
      //버튼의 style과 onClick지정
      <button
        //style을 지정해주는데, 여기서 color은 위에서 props를 객체구조분해 했던 color이다.
        style={{ backgroundColor: color, color: 'white' }}
        //onClick에 대한 onClick은 위에서 props를 객체구조분해 했던 onClick이다.
        onClick={onClick}
      >
        {/* 꺽쇠 사이에 들어가는 값을 children으로 받아옴 */}
        {children}
      </button>
    );
  }
  //만약 color에 해당하는 값이 없을때 반환하는 것
  return (
    <button
      //onClick에 대한 onClick은 위에서 props를 객체구조분해 했던 onClick이다.
      onClick={onClick}
    >
      {/* 객체사이에 들어가는 값을 children으로 props를 받아옴 */}
      {children}
    </button>
  );
}

export default CustomButton;
