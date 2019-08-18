<script>
import Pusher from 'pusher-js';

const pusher = new Pusher('19b1e741aaf272e825c7', {
  cluster: 'eu',
  useTLS: true,
  authEndpoint: 'http://localhost:5000/pusher/auth',
  // authEndpoint: 'https://9cxn2e1lqj.execute-api.us-west-2.amazonaws.com/dev',
});

export default {
  getPresenceID() {
    // This function checks the address bar of the browser for params
    const getQueryString = (field, url) => {
      const href = url || window.location.href;
      const reg = new RegExp(`[?&]${field}=([^&#]*)`, 'i');
      const string = reg.exec(href);
      return string ? string[1] : null;
    };
    // Appends 'presence' to the result
    let id = getQueryString('id');
    id = `presence-${id}`;
    return id;
  },
  subscribeToPusher() {
    const presenceid = this.getPresenceID();
    const channel = pusher.subscribe(presenceid);
    return channel;
  },
};
</script>
