import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import BottomTab from './components/BottomTab';

function App() {
  return (
    <main>
      {/* <section className="lg:w-[40%] mx-auto"> */}
      <Header />
      <TodoList />
      <BottomTab />
      {/* </section> */}
    </main>
  );
}

export default App;
