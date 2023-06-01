const url = 'https://www.course-api.com/react-tours-project';

// console.log(fetch(url));
// Returns a promise

//! ----------------------
// fetch(url)
//   .then((resp) => resp.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//   response returns a readable string in a list which has the key value of json.
//   Therefore we can call .json on it in order to retrieve the actual data
//! ----------------------

const getTours = async () => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    //!always returns a promise
    return data;
  } catch (error) {
    console.log(error);
  }
};

getTours();

//! ----------------------

//Promise: 
console.log(getTours());
