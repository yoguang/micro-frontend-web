import { useState, useEffect } from 'react';

export function useQiankunStateForSlave() {
  const [globalState, setQiankunGlobalState] = useState({});

  useEffect(() => {
    setTimeout(() => {
      // 获取用户信息等公共接口数据
      setQiankunGlobalState({ data: '异步数据' });
    }, 1000);
  }, []);
  
  return {
    globalState,
    // 重命名是为了避免被子应用接受到的 props.setGlobalState 覆盖
    setQiankunGlobalState,
  };
}
