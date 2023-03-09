export const login_req = user => {
    fetch('http://localhost:2000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user),
      credentials: 'include',  // <--- this is the important part
    })
      .then(res => res.json())
      .then(json => console.log(json))
  }
  