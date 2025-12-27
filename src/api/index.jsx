const BASE_URL = "https://v2.api.noroff.dev/online-shop";

export const ProductsUrl = () => BASE_URL;
export const SingleProductUrl = (id) => `${BASE_URL}/${id}`;
