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
          url: '/biguiyuan/biguiyuan-api/park/list',
        });
      } catch (e) {

      }
    }
}

export default new IndexStore();
