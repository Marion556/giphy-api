async function getUsers(token) {
   const res = await axios.get('https://hack-or-snooze-v3.herokuapp.com/users', 
   {params: {token}});
   console.log(res)
}

async function signUp(username, password, name) {
   const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/signup',
   {user: {name, username, password}} )
   console.log(res);
}

async function login(username, password) {
   const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/login',
   {user: {username, password}} )
   console.log(res);
   return res.data.token;
}

/*signUp('Merlin Cat', 'ifrhre', 'Bathtub the bat')*/

async function getUsersWithAuth() {
  const token = await login('Merlin Cat', 'ifrhre');
  console.log(token);
}

async function createStory() {
   const token = await login('Merlin Cat', 'ifrhre');
   const newStory = {
      token,
      story: {
         author: 'Merlin',
         title: 'I am Fatso',
         url: 'http://Merlinisdabest.com'
      }

   }
   const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/stories',
    newStory);
    console.log (res);
}

/*getUsersWithAuth();*/
createStory();