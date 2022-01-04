import { useEffect } from 'react';
import { Input } from 'antd';
import { useModel } from 'umi';
import styles from './index.less';

export default function IndexPage() {
  const { globalState } = useModel('@@qiankunStateFromMaster') || {};

  const handleChange = (e: any) => {
    const _value = e.target.value;
    // setQiankunGlobalState({ data: _value });
  }

  console.log('globalState---->', globalState);

  return (
    <div>
      <h1 className={styles.title}>Main App</h1>
      <Input placeholder="改变主应用传递的参数" onChange={handleChange} />
    </div>
  );
}
