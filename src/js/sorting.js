export const sortBy = function (arr, ...sortByArgs) {
  arr.sort(function (a, b) {
    let sortResult = 0;
    sortByArgs.forEach(function (arg) {
      if (sortResult != 0) {
        return;
      } else {
        if (a[arg] < b[arg]) {
          sortResult = -1;
          return;
        }
        if (a[arg] > b[arg]) {
          sortResult = 1;
          return;
        }
      }
    });
    return sortResult;
  });
};
