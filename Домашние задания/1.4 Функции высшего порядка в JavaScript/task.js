function cachingDecoratorNew(func) {
  const cache = [];

  return function (...args) {
    const hash = md5(JSON.stringify(args));
    const cached = cache.find((entry) => entry.hash === hash);

    if (cached) {
      return 'Из кеша: ' + cached.value;
    }

    const value = func.apply(this, args);
    cache.push({ hash, value });

    if (cache.length > 5) {
      cache.shift();
    }

    return 'Вычисляем: ' + value;
  };
}

function debounceDecoratorNew(func, delay) {
  let timeoutId;

  function wrapper(...args) {
    wrapper.allCount += 1;

    if (wrapper.allCount === 1) {
      wrapper.count += 1;
      return func.apply(this, args);
    }

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      wrapper.count += 1;
      func.apply(this, args);
    }, delay);
  }

  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}
