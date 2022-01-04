import { useState, useEffect } from 'react';

export function useQiankunStateForSlave() {
  const [globalState, setQiankunGlobalState] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setQiankunGlobalState({ data: '异步数据' });
    }, 1000);
  }, []);
  
  return {
    globalState,
    // 重命名是为了避免被子应用接受到的 props.setGlobalState 覆盖
    setQiankunGlobalState,
  };
}
