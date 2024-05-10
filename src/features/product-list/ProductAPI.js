export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:8080/products');
    const data = await response.json();
    const totalItems = response.headers.get('X-Total-Count');
    resolve({ products: data, totalItems: +totalItems });
  });
}

export function fetchProductsByFilters(filter, sort, Pagination) {
  //Todos in the later section
  // filter = {"category":"smartphone","laptops"}
  // sort = {_sort:"price",_order="desc"}
  // pagination = {_page:1 ,_limit=10}
  // TODO : on server we will support multi values
  let queryString = '';
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length > 0) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
  for(let key in Pagination){

    queryString += `${key}=${Pagination[key]}&`
  }

  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:8080/products?' + queryString);
    const data = await response.json();
    // const totalItems = response.headers.get('X-Total-Count');
    const totalItems = 92;
    resolve({ products: data, totalItems: +totalItems });
    // resolve({ products: data, totalItems }); 
  });
}


//For fetching the category from the API
export function fetchCategories() {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:8080/categories');
    const data = await response.json();
   resolve(data)
  });
}

//For fetching the brands from the API
export function fetchBrands() {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:8080/brands');
    const data = await response.json();
   resolve(data)
  });
}

