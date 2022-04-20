import { defineStore } from 'pinia'
import { getActivity } from '../api/activity';

export const useActivityStore = defineStore({
  id: 'activity',
  state: () => ({
    activities: []
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    async getActivitylist(params: object) {
      let res = await getActivity(params);
      this.activities = res.data;
      // console.log(this.activities)
    }
  }
})
