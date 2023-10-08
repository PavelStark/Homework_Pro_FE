/* 1. Напишите функцию getTodos(username), которая в качестве аргумента принимает никнейм
      пользователя(/users) и выводит список его задач (/todos).
      В качестве ответа в консоль выведите массив с задачами указанного пользователя */

async function fetchData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
async function getTodos(username) {
  const userUrl = `https://jsonplaceholder.typicode.com/users?username=${username}`;
  const userData = await fetchData(userUrl);

  const userId = userData[0].id;

  const todosUrl = `https://jsonplaceholder.typicode.com/todos?userId=${userId}`;
  let todos = await fetchData(todosUrl);

  todos = todos.map((elem) => elem.title);

  console.log(`Список задач пользователя "${username}":`);
  console.log(todos);
}
getTodos("Bret");

/* 2. Напишите функцию getСomments(title), которая в качестве аргумента принимает заголовок
      поста(/posts) и выводит список всех его комментариев (/comments).
      В качестве ответа в консоль выведите массив с комментариями. 
      Если у заданного поста комментариев нет, выведите в консоль соответствующее сообщение. */

/* async function fetchData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
async function getComments(title) {
  const postsUrl = `https://jsonplaceholder.typicode.com/posts?tilte=${title}`;
  const postsData = await fetchData(postsUrl);

  const postId = postsData[0].id;

  const commentsUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
  let comments = await fetchData(commentsUrl);

  comments = comments.map((elem) => elem.body);

  console.log(`комментарии c заголовоком "${title}":`);
  console.log(comments);
}

getComments(
  "sunt aut facere repellat provident occaecati excepturi optio reprehenderit" 
); */

/* 3. Напишите функцию getPhotoByNickName(username), которая в качестве аргумента принимает никнейм
      пользователя(/users) и выводит все его фотографии (/photos).В качестве ответа выведите в консоль
      массив со всеми фотографиями указанного пользователя. */

/* async function fetchData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
async function getPhotoByNickName(username) {
  const userUrl = `https://jsonplaceholder.typicode.com/users?username=${username}`;
  const userData = await fetchData(userUrl);

  const albumId = userData[0].id;

  const photosUrl = `https://jsonplaceholder.typicode.com/photos?photoId=${albumId}`;
  let photos = await fetchData(photosUrl);

  photos = photos.map((elem) => elem.url);

  console.log(`Фотографии пользователя "${username}":`);
  console.log(photos);
}

getPhotoByNickName("Samantha"); */
