import React from "react";

const Form = (props) => {
  return (
    <form>
      <div>
        <input type="text" placeholder="Логин" />
      </div>
      <div>
        <input type="text" placeholder="Пароль" />
      </div>
      <div>
        <input type="checkbox" placeholder="запомнить меня" />
      </div>
      <button>Залогиниться</button>
    </form>
  );
};

const Authorization = (props) => {
  return (
    <div>
      <h1>Авторизация</h1>
      <Form />
    </div>
  );
};

export default Authorization;
