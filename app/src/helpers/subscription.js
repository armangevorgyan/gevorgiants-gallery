import store from 'store/store';


export const getSubscriptionByUuid = (uuid) => {
  const {subscriptionsList} = store.getState().subscription;
  return  subscriptionsList.find(subscription => subscription.uuid === uuid) || null;
};
