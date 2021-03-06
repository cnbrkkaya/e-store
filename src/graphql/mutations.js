/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProducts = /* GraphQL */ `
  mutation CreateProducts(
    $input: CreateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    createProducts(input: $input, condition: $condition) {
      id
      name
      category
      price
      currency
      image {
        src
        alt
      }
      bestseller
      featured
      details
      dimmentions {
        width
        height
      }
      description
      recommendations {
        src
        alt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateProducts = /* GraphQL */ `
  mutation UpdateProducts(
    $input: UpdateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    updateProducts(input: $input, condition: $condition) {
      id
      name
      category
      price
      currency
      image {
        src
        alt
      }
      bestseller
      featured
      details
      dimmentions {
        width
        height
      }
      description
      recommendations {
        src
        alt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteProducts = /* GraphQL */ `
  mutation DeleteProducts(
    $input: DeleteProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    deleteProducts(input: $input, condition: $condition) {
      id
      name
      category
      price
      currency
      image {
        src
        alt
      }
      bestseller
      featured
      details
      dimmentions {
        width
        height
      }
      description
      recommendations {
        src
        alt
      }
      createdAt
      updatedAt
    }
  }
`;
