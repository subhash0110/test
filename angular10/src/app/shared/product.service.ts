import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getAll(): Observable<any> {
    return of([
      {
        products: {
          '-KrqgOLs07ZkbapP4EGi': {
            category: 'fruits',
            imageUrl:
              'http://www.publicdomainpictures.net/pictures/170000/velka/spinach-leaves-1461774375kTU.jpg',
            price: 2.5,
            title: 'Spinach',
          },
          '-KrrIkDT19XhPgWo0T0A': {
            category: 'bread',
            imageUrl:
              'https://static.pexels.com/photos/2434/bread-food-healthy-breakfast.jpg',
            price: 6,
            title: 'Freshly Baked Bread ',
          },
          '-KrvrXbV3rqnFEru_ojw': {
            category: 'fruits',
            imageUrl:
              'https://daily.jstor.org/wp-content/uploads/2017/05/avocado_1050x700.jpg',
            price: 5,
            title: 'Avacado',
          },
          '-KrvrgogC3oac5k83Awt': {
            category: 'vegetables',
            imageUrl:
              'https://static.pexels.com/photos/8390/food-wood-tomatoes.jpg',
            price: 2.5,
            title: 'Tomato',
          },
          '-Krvrt2nkeRw2HCbiGDj': {
            category: 'vegetables',
            imageUrl:
              'https://upload.wikimedia.org/wikipedia/commons/7/7f/Lettuce_Mini_Heads_%287331119710%29.jpg',
            price: 1,
            title: 'Lettuce',
          },
          '-Krvs0ZZBpz5GuM0RfC8': {
            category: 'vegetables',
            imageUrl:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Cauliflowers_-_20051021.jpg/1280px-Cauliflowers_-_20051021.jpg',
            price: 1.75,
            title: 'Cauliflower',
          },
          '-Krvs7RuXkSiDZvBZmey': {
            category: 'fruits',
            imageUrl:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bananas.jpg/1024px-Bananas.jpg',
            price: 1.25,
            title: 'Banana',
          },
          '-KrvsKZbI_mpo3hJg7G7': {
            category: 'fruits',
            imageUrl:
              'https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg',
            price: 1.7,
            title: 'Orange',
          },
          '-KrvsRNOg-ftEUM3Te-F': {
            category: 'fruits',
            imageUrl:
              'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg',
            price: 2,
            title: 'Apple',
          },
          '-Krvs_CiDXdiZ3yd0PUp': {
            category: 'fruits',
            imageUrl:
              'https://upload.wikimedia.org/wikipedia/commons/3/36/Kyoho-grape.jpg',
            price: 2,
            title: 'Grape',
          },
          '-KrvsfKjGc0NCM0prc0I': {
            category: 'fruits',
            imageUrl:
              'https://upload.wikimedia.org/wikipedia/commons/9/9e/Autumn_Red_peaches.jpg',
            price: 2,
            title: 'Peach',
          },
          '-KrvsrmX3I1-Bo6eFCdx': {
            category: 'seasonings',
            imageUrl:
              'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cinnamon-other.jpg',
            price: 0.5,
            title: 'Cinnamon Sticks',
          },
          '-KrvsxvxOmTzMXOSx7iG': {
            category: 'seasonings',
            imageUrl:
              'https://upload.wikimedia.org/wikipedia/commons/4/48/Saffron_Crop.JPG',
            price: 3,
            title: 'Saffron',
          },
          '-Krvt8G_naLT8Pg_Fob6': {
            category: 'seasonings',
            imageUrl:
              'http://maxpixel.freegreatpicture.com/static/photo/1x/Seasoning-Powder-Curry-Spice-Ingredient-Turmeric-2344157.jpg',
            price: 0.75,
            title: 'Ground Turmeric',
          },
          '-KrvtXWZvGv-mr0IFbAA': {
            category: 'seasonings',
            imageUrl:
              'http://maxpixel.freegreatpicture.com/static/photo/1x/Ingredient-Herb-Seasoning-Seeds-Food-Coriander-390015.jpg',
            price: 0.5,
            title: 'Coriander Seeds',
          },
          '-Krvtvc_uQyh6dzI-J3R': {
            category: 'bread',
            imageUrl:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Fabrication_du_lavash_%C3%A0_Noravank_%286%29.jpg/1280px-Fabrication_du_lavash_%C3%A0_Noravank_%286%29.jpg',
            price: 1.25,
            title: 'Lavash Bread',
          },
          '-Krvu3aL-m-ku0yCnQGr': {
            category: 'bread',
            imageUrl:
              'https://upload.wikimedia.org/wikipedia/commons/1/1d/Bagel-Plain-Alt.jpg',
            price: 1,
            title: 'Bagel Bread',
          },
          '-KrvuH_bkBBZDW0NCwfl': {
            category: 'fruits',
            imageUrl:
              'https://upload.wikimedia.org/wikipedia/commons/e/e1/Strawberries.jpg',
            price: 1.95,
            title: 'Strawberry',
          },
          '-KrvuT7GtYfsFvmQfgoj': {
            category: 'bread',
            imageUrl:
              'https://static.pexels.com/photos/416607/pexels-photo-416607.jpeg',
            price: 1.25,
            title: 'Baguette Bread',
          },
        },
        'shopping-cart': {
          '-LYwMpJy5W-QN_LfYb-f': {
            dateCreated: 1550422332689,
            items: {
              '-KrrIkDT19XhPgWo0T0A': {
                imageUrl:
                  'https://static.pexels.com/photos/2434/bread-food-healthy-breakfast.jpg',
                price: 6,
                quantity: 5,
                title: 'Freshly Baked Bread ',
              },
            },
          },
        },
      },
    ]);
  }

  constructor() {}
}