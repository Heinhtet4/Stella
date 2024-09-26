import { create } from "zustand";

const useStoreCategories = create(() => ({
    categories : [
        {
          "id": 1,
          "category": "Tops",
          "subcategories": [
            {
              "id": 101,
              "subcategory": "T-Shirts"
            },
            {
              "id": 102,
              "subcategory": "Blouses"
            },
            {
              "id": 103,
              "subcategory": "Sweaters"
            }
          ],
          "image":"https://images.unsplash.com/photo-1514813279845-a4455283689a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8V29tZW4lMjBUJTIwc2hpcnR8ZW58MHwwfDB8fHww",
        },
        {
          "id": 2,
          "category": "Bottoms",
          "subcategories": [
            {
              "id": 201,
              "subcategory": "Jeans"
            },
            {
              "id": 202,
              "subcategory": "Skirts"
            },
            {
              "id": 203,
              "subcategory": "Shorts"
            }
          ],
          "image" : "https://plus.unsplash.com/premium_photo-1691622500874-481f486a314c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8V29tZW4lMjBKZWFuJTIwUGFudHN8ZW58MHwwfDB8fHww",
        },
        {
          "id": 3,
          "category": "Dresses",
          "subcategories": [
            {
              "id": 301,
              "subcategory": "Short Dresses"
            },
            {
              "id": 302,
              "subcategory": "Long Dresses"
            }
          ],
          "image" : "https://media.istockphoto.com/id/854321536/photo/look-at-this-gorgeous-dress.webp?a=1&b=1&s=612x612&w=0&k=20&c=wB4IFiXpGNRgOIKh3juUPmvlKCc-SQXd2hurDO9tX9w=",
        },
        {
          "id": 4,
          "category": "Other",
          "subcategories": [
            {
              "id": 401,
              "subcategory": "Outer Wears"
            },
            {
              "id": 402,
              "subcategory": "Hoodies"
            },
            {
              "id": 403,
              "subcategory": "Pajamas"
            }
          ],
          "image":"https://images.unsplash.com/photo-1604882767135-b41fac508fff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFdvbWVuJTIwY2xvc2V0fGVufDB8MHwwfHx8MA%3D%3D",
        }
      ],
}));

export default useStoreCategories;