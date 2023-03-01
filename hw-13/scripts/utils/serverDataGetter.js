export default function getServerData(url, callback, loader) {
    const ajax = new XMLHttpRequest();
  
  
    ajax.open("get", url);
    ajax.send();
    ajax.addEventListener("readystatechange", () => {
      if (ajax.readyState === 4 && ajax.status >= 200 && ajax.status < 300) {
          loader.classList.add('hide-loader')  
        callback(JSON.parse(ajax.response));
      } else if (ajax.readyState === 4) {
        throw new Error(
          `Помилка у запиті на сервер : ${ajax.status} / ${ajax.statusText}`
        );
      }
    });
  }