import { useTabContext } from '../contexts/TabContext';

const BottomTab = () => {
  const { activeTab, changeTab } = useTabContext();

  const filterActive = () => {
    changeTab('active');
  };

  const filterCompleted = () => {
    changeTab('completed');
  };

  const filterAll = () => {
    changeTab('all');
  };

  return (
    <div className="w-[90%] lg:w-[15%] bg-white dark:bg-[#272937] py-4 lg:py-0 my-6 mx-auto -translate-y-12 lg:-translate-y-[6.7rem] rounded-md">
      <div className="bottom-tab w-[60%] lg:w-[100%] mx-auto flex flex-row justify-between content-center lg:-translate-x-4">
        <button
          className={`${
            activeTab === 'all' ? 'text-violet-600' : 'text-slate-500'
          } lg:text-sm font-semibold`}
          onClick={filterAll}
        >
          All
        </button>
        <button
          className={`${
            activeTab === 'active' ? 'text-violet-600' : 'text-slate-500'
          } lg:text-sm font-semibold`}
          onClick={filterActive}
        >
          Active
        </button>
        <button
          className={`${
            activeTab === 'completed' ? 'text-violet-600' : 'text-slate-500'
          } lg:text-sm font-semibold`}
          onClick={filterCompleted}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default BottomTab;
