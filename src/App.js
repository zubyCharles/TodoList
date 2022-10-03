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
    </main>
  );
}

export default App;
