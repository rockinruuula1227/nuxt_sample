/*
 * Storeのローカルストレージ保存用プラグイン
 */
import createPersistedState from "vuex-persistedstate";

export default ({ store }) => {
  (window as any).onNuxtReady(() => {
    createPersistedState({})(store);
  });
};
