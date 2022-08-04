import { useTheme } from '../contexts/ThemeContext';
import InputField from './InputField';
import Sun from '../assets/icon-sun.svg';
import Moon from '../assets/icon-moon.svg';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`w-[100%] bg-[url('./assets/bg-mobile-light.jpg')] dark:bg-[url('./assets/bg-mobile-dark.jpg')] bg-no-repeat bg-cover`}
    >
      <div className="w-[90%] flex justify-between items-center py-14 mx-auto">
        <h1 className="text-4xl text-white font-semibold tracking-[0.35rem]">
          TODO
        </h1>
        <div onClick={toggleTheme}>
          <img src={theme === 'light' ? Moon : Sun} alt="" />
        </div>
      </div>
      <InputField />
    </div>
  );
};

export default Header;
