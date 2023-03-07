import { makeAutoObservable, observable } from 'mobx';

class MyParkStore {
    parkList = []

    constructor() {
      makeAutoObservable(this, { parkList: observable.shallow });
    }
}

export default new MyParkStore();
