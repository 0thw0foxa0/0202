const state = {
  storeCounter:0,
}

const mutations = {
  incrementCounter( state ) {
      store.storeCounter++;
  }
};

export const store = {
  state,
  mutations,
}