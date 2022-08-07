import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import BottomTab from './components/BottomTab';

function App() {
  return (
    <main>
      <Header />
      <TodoList />
      <BottomTab />
      <div className="w-[60%] pl-[5%]  lg:pl-[21%] -translate-y-8 lg:-translate-y-16 mx-auto">
        <p className="text-sm text-slate-600 font-medium">
          Drag and drop to reorder list
        </p>
      </div>
    </main>
  );
}

export default App;
