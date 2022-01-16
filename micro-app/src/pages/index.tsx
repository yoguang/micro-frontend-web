import { useEffect } from 'react';
import { useModel } from 'umi';
import styles from './index.less';
import imgUrl from '@/assets/images/partyMember.png';
import _ from '@umijs/plugin-qiankun';

export default function IndexPage() {
  const actions = useModel('@@qiankunStateFromMaster') || {};
  const { globalState, setQiankunGlobalState } = actions;

  useEffect(() => {
    console.log('useEffect----------->', actions);
    fetch('http://localhost:8001/api/getAppInfo', { method: 'POST' });
  }, []);

  console.log('React Micro App globalState-------->', globalState);

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Micro App</h1>
      {/* <p>{masterState?.data}</p> */}
      <div className={styles.bg}>
        <img src={imgUrl} alt="" />
      </div>
      <button onClick={() => {
        setQiankunGlobalState({ data: '子应用修改状态' });
      }}>点击改变全局状态 globalState</button>
    </div >
  );
}
