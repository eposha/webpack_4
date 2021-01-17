import * as $ from 'jquery';

function createAnalytics(): object {
  let count = 0;
  let destroy: boolean = false;
  const listener = (): number => ++count;

  $(document).on('click', listener);

  return {
    destroy() {
      $(document).off('click', listener);
      destroy = true;
    },
    getClicks() {
      if (destroy) {
        return `Analytics destroyed. Total clicks = ${count}`;
      }
      return count;
    },
  };
}

window['analytics'] = createAnalytics();
