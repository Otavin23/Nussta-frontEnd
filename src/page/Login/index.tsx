import { Link } from "react-router-dom";
import ArrowRight from "../../assets/arrowRight.png";

export const Login = () => {
  return (
    <main className=" w-[30rem] p-[1rem]  border border-violet-3">
      <h1 className="text-violet font-medium text-[25px] max-w-[60%]">
        Entre na sua conta e seja bem-vindo.
      </h1>
      <form className="flex flex-col">
        <input
          className="w-full p-[0.8rem] border-b border-violet-10 mt-[1rem] placeholder:text-[15px] placeholder:text-violet-500  outline-none	"
          type="text"
          placeholder="Nome"
        />
        <input
          className="w-full p-[0.8rem] border-b border-violet-10 mt-[1rem] placeholder:text-[15px] placeholder:text-violet-500 outline-none	"
          type="email"
          placeholder="example@gmail.com"
        />
        <input
          className="w-full p-[0.8rem] border-b border-violet-10 mt-[1rem] placeholder:text-[15px] placeholder:text-violet-500 outline-none	"
          type="password"
          placeholder="Digite a sua senha"
        />
        <input
          className="w-full p-[0.8rem] border-b border-violet-10 mt-[1rem] placeholder:text-[15px] placeholder:text-violet-500 outline-none	"
          type="password"
          placeholder="Digite a sua senha"
        />
        <button className="transition duration-2 ease-out p-[0.8rem] bg-violet mt-[2.5rem] text-white font-medium	placeholder:text-[15px] placeholder:text-violet-500 outline-none hover:bg-violetTwo flex justify-center	 items-center	">
          Comecar
          <img
            src={ArrowRight}
            alt="arrow right color of white"
            className="ml-[0.5rem]"
            width="30"
            height="30"
          />
        </button>
        <Link to="/register">
          <span className="w-full flex justify-center mt-[2rem] ">
            ainda nao e usuario?
            <a
              href="#"
              className="underline decoration-2 ml-[0.5rem] text-violet"
            >
              faca seu cadastro
            </a>
          </span>
        </Link>
      </form>
    </main>
  );
};
