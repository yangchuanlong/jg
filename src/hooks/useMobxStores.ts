// useMobxStores.ts
import React, { useContext } from 'react';
import { MobXProviderContext } from 'mobx-react';

const useMobxStores = <T extends Record<string, any>>(): T => useContext<T>(MobXProviderContext as React.Context<T>);

export default useMobxStores;
