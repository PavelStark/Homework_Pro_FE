/* 1. Напишите функцию getTodos(username), которая в качестве аргумента принимает никнейм
      пользователя(/users) и выводит список его задач (/todos).
      В качестве ответа в консоль выведите массив с задачами указанного пользователя */

/* async function getTodos(username) {
  let resUsers = await fetch (`https://jsonplaceholder.typicode.com/users?username=${username}`);
  let users = await resUsers.json();

  let userId = users[0].id;

  let resTodos = await fetch (`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
  let todos = await resTodos.json();

  console.log(`количество задач : ${todos.length}`);
  console.log(`Список задач пользователя "${username}":`);
  console.log(todos);
}
getTodos("Bret");  */

/* 2. Напишите функцию getСomments(title), которая в качестве аргумента принимает заголовок
      поста(/posts) и выводит список всех его комментариев (/comments).
      В качестве ответа в консоль выведите массив с комментариями. 
      Если у заданного поста комментариев нет, выведите в консоль соответствующее сообщение. */

/* async function getComments(title) {
  let resPosts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?tilte=${title}`
  );
  let posts = await resPosts.json();

  let postId = posts[0].id;

  let resComments = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  let comments = await resComments.json();

  console.log(`количество коментарий : ${comments.length}`);
  console.log(`комментарии c заголовоком "${title}":`);
  console.log(comments);
}

getComments(
  "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
); */

/* 3. Напишите функцию getPhotoByNickName(username), которая в качестве аргумента принимает никнейм
      пользователя(/users) и выводит все его фотографии (/photos).В качестве ответа выведите в консоль
      массив со всеми фотографиями указанного пользователя. */

async function getPhotoByNickName(username) {
  let resUsers = await fetch(
    `https://jsonplaceholder.typicode.com/users?username=${username}`
  );
  let users = await resUsers.json();

  let userId = users[0].id;

  let resAlbums = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
  );
  let albums = await resAlbums.json();

  for (let i = 0; i < albums.length; i++) {
    albumId = albums[i].id;

    let resPhotos = await fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
    );
    let userPhotos = await resPhotos.json();

    console.log(`фотографии пользователя "${username}" :`);
    console.log(userPhotos);
  }
}

getPhotoByNickName("Bret");
