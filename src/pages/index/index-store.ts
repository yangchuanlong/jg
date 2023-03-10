import { makeAutoObservable, observable } from 'mobx';
import request from 'utils/request';

class IndexStore {
    parkList = [
      // { name: 'api debug' },
    ]

    constructor() {
      makeAutoObservable(this, { parkList: observable.shallow });
    }

    async getParkList() {
      try {
        const { data } = await request({
          url: '/biguiyuan/biguiyuan-api/park/find-simple-page',
          method: 'POST',
          data: {},
        });
        this.parkList = data?.records || [];
      } catch (e) {
        console.log('get park list e:', e);
      }
    }
}

export default new IndexStore();
