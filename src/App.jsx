import "./App.css";
import { Todo, UserForm } from "./components";

function App() {
  return (
    <div className="flex flex-col w-full">
      <div className="text-2xl lg:text-4xl text-white text-center font-semibold mx-auto uppercase my-4">
        TOdo and form task: kunochdigi
      </div>

      <div className="h-screen md:h-auto flex lg:flex-row flex-col justify-between container m-auto mt-20 mb-10 lg:my-0 gap-10">
        <Todo />
        <UserForm />
      </div>
    </div>
  );
}

export default App;
