export const saveProduct = () =>
  fetch('/products', {
    method: 'POST',
    body: JSON.stringify({}),
  })

export default {
  saveProduct,
}
