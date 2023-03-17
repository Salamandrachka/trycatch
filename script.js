//Наведіть кілька прикладів, коли доречно використовувати в коді конструкцію try...catch.
//Для перехоплення, кастомізації та виведення помилок та виключень 
//Для особистої перевіркикоди
//для впевненості, що код точно спрацює навіть, якщо в коді буде помилка/ виключення

const books = [
    { 
      author: "Люсі Фолі",
      name: "Список запрошених",
      price: 70 
    }, 
    {
     author: "Сюзанна Кларк",
     name: "Джонатан Стрейндж і м-р Норрелл",
    }, 
    { 
      name: "Дизайн. Книга для недизайнерів.",
      price: 70
    }, 
    { 
      author: "Алан Мур",
      name: "Неономікон",
      price: 70
    }, 
    {
     author: "Террі Пратчетт",
     name: "Рухомі картинки",
     price: 40
    },
    {
     author: "Анґус Гайленд",   
     name: "Коти в мистецтві",
    }
  ];


let div = document.createElement('div');
div.id = 'root';
document.body.append(div);

function booksList(arr) {
    let ul = document.createElement('ul');
    arr.forEach(elem => {
      let li = document.createElement('li');
      li.textContent = `author: ${elem.author}; name: ${elem.name}; price: ${elem.price}`;
      try {
        if (elem.author && elem.name && elem.price) {
          ul.append(li);
        } else {
          throw new Error(`No field: ${!elem.author ? 'author' : !elem.name ? 'name' : 'price'}`);
        }
      } catch (e) {
        console.log(e.message);
      }
    });
    return ul;
  }
    
  document.querySelector('#root').appendChild(booksList(books))