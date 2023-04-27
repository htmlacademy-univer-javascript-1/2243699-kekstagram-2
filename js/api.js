const getData = (onSuccess, onFail) => {
  fetch('https://26.javascript.pages.academy/kekstagram')
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    }).catch(() => {
      onFail('Не удалось загрузить данные');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://26.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {getData, sendData};