import { useEffect } from 'react';
import { useModel } from 'umi';
import styles from './index.less';
import imgUrl from '@/assets/images/partyMember.png';
import _ from '@umijs/plugin-qiankun';

export default function IndexPage() {
  const actions = useModel('@@qiankunStateFromMaster') || {};
  useEffect(() => {
    console.log('react mounted----------->');
    fetch('http://localhost:8001/api/getAppInfo', { method: 'POST' });
  }, []);

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Micro App</h1>
      {/* <p>{masterState?.data}</p> */}
      <div className={styles.bg}>
        <img src={imgUrl} alt="" />
      </div>
    </div>
  );
}
