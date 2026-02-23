function fetchUser() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ name: "Shamita", age: 20 });
    }, 2000);
  });
}

async function getUser() {
  let data = await fetchUser();
  console.log(data);
}

getUser();