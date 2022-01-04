window.__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;

export const qiankun = {
  // 应用加载之前
  async bootstrap(props) {
    console.log('micro app bootstrap', props);
  },
  // 应用 render 之前触发
  async mount(props) {
    console.log('micro app mount', props);
    props.setGlobalState({ data: 'micro app 修改了' });
  },
  // 应用卸载之后触发
  async unmount(props) {
    console.log('micro app unmount', props);
  },
};
