function Pages(pageCount) {

  let onePageItemsCount = pageCount / 100 - (pageCount % 100);
  const arrOfPages = Array.from(Array(onePageItemsCount).keys());

  return arrOfPages.map((val, i) => {

    <button id="i">val</button>;
  
});
}

export default Pages;
