import { Link } from "react-router-dom";
import { useState } from "react";
import { arrUser } from "../../utils/data";

export const Register = () => {
  const [error, setError] = useState(false);
  const [dataUser, setDataUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordCheck: "",
  });

  const registersss = () => {
    event?.preventDefault();
    if (dataUser.password !== dataUser.passwordCheck) setError(true);
    if (dataUser.password === dataUser.passwordCheck) setError(false);

    arrUser.push({ ...dataUser });
    console.log(arrUser);
  };

  return (
    <main className=" w-[30rem] p-[1rem]  border border-violet-3">
      <h1 className="text-violet font-medium text-[25px] max-w-[70%]">
        Cadastre-se na nussta e seja bem-vindo.
      </h1>
      <form className="flex flex-col">
        <input
          className="w-full p-[0.8rem] border-b border-violet-10 mt-[1rem] placeholder:text-[15px] placeholder:text-violet-500  outline-none	"
          type="text"
          placeholder="Nome"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDataUser({
              ...dataUser,
              name: e.target.value,
            })
          }
        />
        <input
          className="w-full p-[0.8rem] border-b border-violet-10 mt-[1rem] placeholder:text-[15px] placeholder:text-violet-500 outline-none	"
          type="email"
          placeholder="example@gmail.com"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDataUser({
              ...dataUser,
              email: e.target.value,
            })
          }
        />
        <input
          style={{
            borderBottom: error ? "1px solid #F97F87" : "1px solid #ececec",
          }}
          className="w-full p-[0.8rem] border-b border-violet-10 mt-[1rem] placeholder:text-[15px] placeholder:text-violet-500 outline-none	"
          type="password"
          placeholder="Digite a sua senha"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDataUser({
              ...dataUser,
              password: e.target.value,
            })
          }
        />
        {error ? (
          <label className="text-red-500 text-[14px] mt-[0.5rem]">
            As senhas nao se batem
          </label>
        ) : (
          <></>
        )}
        <input
          style={{
            borderBottom: error ? "1px solid #F97F87" : "1px solid #ececec",
          }}
          className="w-full p-[0.8rem] border-b border-violet-10 mt-[1rem] placeholder:text-[15px] placeholder:text-violet-500 outline-none	"
          type="password"
          placeholder="Digite a sua senha"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDataUser({
              ...dataUser,
              passwordCheck: e.target.value,
            })
          }
        />
        {error ? (
          <label className="text-red-500 text-[14px] mt-[0.5rem]">
            As senhas nao se batem
          </label>
        ) : (
          <></>
        )}

        <button
          onClick={() => registersss()}
          className="transition duration-2 ease-out p-[0.8rem] bg-violet mt-[2.5rem] text-white font-medium	placeholder:text-[15px] placeholder:text-violet-500 outline-none hover:bg-violetTwo "
        >
          Cadastrar
        </button>

        <Link to="/">
          <span className="w-full flex justify-center mt-[2rem] ">
            Ja e usuario?
            <a
              href="#"
              className="underline decoration-2 ml-[0.5rem] text-violet"
            >
              faca login
            </a>
          </span>
        </Link>
      </form>
    </main>
  );
};
