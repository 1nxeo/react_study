import React,{useState} from 'react';


function App() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  function onChangeId(event){
    const idValue = event.target.value
    setId(idValue)
  }

  function onChangePw(event){
    const pwValue = event.target.value
    setPw(pwValue)
  }

  function onClickSubmit(event){
    console.log(event)
    alert(`입력한 아이디는 '${id}'이며, 비밀번호는 '${pw}'입니다.`)
    // setId("")
    // setPw("")
  }

  // const submitForm = document.querySelector('#submit-form');
  //       function handleSubmit(event){
  //           event.preventDefault();
  //           alert(`입력한 아이디는 '${id}'이며, 비밀번호는 '${pw}'입니다.`)
  //           setId("")
  //           setPw("")
  //       }

  //       submitForm.addEventListener("submit", handleSubmit);

  return (
    <form onSubmit={onClickSubmit}>
      <label>아이디 : </label><input type="text" value={id} required onChange={onChangeId}/>
      <label>비밀번호 : </label><input type="password" value={pw} required onChange={onChangePw}/>
      <input type="submit" value="로그인"/>
    </form>
  )
}

export default App;