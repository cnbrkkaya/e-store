/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProducts = /* GraphQL */ `
  query GetProducts($id: ID!) {
    getProducts(id: $id) {
      id
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
      nextToken
    }
  }
`;
