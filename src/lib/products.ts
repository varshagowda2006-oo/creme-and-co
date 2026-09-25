import cakeChocolate from "@/assets/cake-chocolate.jpg";
import cakeStrawberry from "@/assets/cake-strawberry.jpg";
import cakeRedVelvet from "@/assets/cake-redvelvet.jpg";
import cakeVanillaBerry from "@/assets/cake-vanillaberry.jpg";
import cakeCaramel from "@/assets/cake-caramel.jpg";
import cakeBlackForest from "@/assets/cake-blackforest.jpg";
import pastryCroissant from "@/assets/pastry-croissant.jpg";
import pastryEclair from "@/assets/pastry-eclair.jpg";
import pastryDanish from "@/assets/pastry-danish.jpg";
import pastryCinnamon from "@/assets/pastry-cinnamon.jpg";
import pastryAlmond from "@/assets/pastry-almond.jpg";
import pastryCreamPuff from "@/assets/pastry-creampuff.jpg";
import drinkCappuccino from "@/assets/drink-cappuccino.jpg";
import drinkLatte from "@/assets/drink-latte.jpg";
import drinkMocha from "@/assets/drink-mocha.jpg";
import drinkMacchiato from "@/assets/drink-macchiato.jpg";
import drinkIcedLatte from "@/assets/drink-icedlatte.jpg";
import drinkColdChoco from "@/assets/drink-coldchoco.jpg";
import drinkTea from "@/assets/drink-tea.jpg";
import drinkBerry from "@/assets/drink-berry.jpg";
import dessertTiramisu from "@/assets/dessert-tiramisu.jpg";
import dessertMacarons from "@/assets/dessert-macarons.jpg";

export type Category = "Cakes" | "Pastries" | "Desserts" | "Beverages";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: Category;
  group?: string;
};

export const products: Product[] = [
  // Cakes
  {
    id: "belgian-chocolate-cake",
    name: "Belgian Chocolate Cake",
    description: "Three layers of dark cocoa sponge wrapped in silky Belgian ganache.",
    price: 899,
    image: cakeChocolate,
    category: "Cakes",
  },
  {
    id: "strawberry-dream-cake",
    name: "Strawberry Dream Cake",
    description: "Vanilla chiffon, whipped cream and hand-sliced seasonal strawberries.",
    price: 849,
    image: cakeStrawberry,
    category: "Cakes",
  },
  {
    id: "red-velvet-cake",
    name: "Red Velvet Cake",
    description: "Velvety cocoa crumb layered with tangy cream cheese frosting.",
    price: 799,
    image: cakeRedVelvet,
    category: "Cakes",
  },
  {
    id: "vanilla-berry-cake",
    name: "Vanilla Berry Cake",
    description: "Madagascar vanilla sponge crowned with fresh berries and mascarpone.",
    price: 879,
    image: cakeVanillaBerry,
    category: "Cakes",
  },
  {
    id: "caramel-crunch-cake",
    name: "Caramel Crunch Cake",
    description: "Salted caramel buttercream with hazelnut praline crunch in every bite.",
    price: 929,
    image: cakeCaramel,
    category: "Cakes",
  },
  {
    id: "black-forest-cake",
    name: "Black Forest Cake",
    description: "Cherry-soaked chocolate sponge, fresh cream and dark chocolate curls.",
    price: 869,
    image: cakeBlackForest,
    category: "Cakes",
  },

  // Pastries
  {
    id: "butter-croissant",
    name: "Butter Croissant",
    description: "Laminated over three days with French butter for 64 flaky layers.",
    price: 149,
    image: pastryCroissant,
    category: "Pastries",
  },
  {
    id: "chocolate-eclair",
    name: "Chocolate Éclair",
    description: "Choux pastry filled with chocolate crémeux and a glossy cocoa glaze.",
    price: 189,
    image: pastryEclair,
    category: "Pastries",
  },
  {
    id: "fruit-danish",
    name: "Fruit Danish",
    description: "Buttery danish shell, vanilla custard and fruit picked that morning.",
    price: 169,
    image: pastryDanish,
    category: "Pastries",
  },
  {
    id: "cinnamon-roll",
    name: "Cinnamon Roll",
    description: "Slow-proofed swirl of Ceylon cinnamon under a cream cheese glaze.",
    price: 179,
    image: pastryCinnamon,
    category: "Pastries",
  },
  {
    id: "almond-croissant",
    name: "Almond Croissant",
    description: "Twice-baked croissant with frangipane and toasted almond flakes.",
    price: 199,
    image: pastryAlmond,
    category: "Pastries",
  },
  {
    id: "cream-puff",
    name: "Cream Puff",
    description: "Airy choux shell piped to order with vanilla bean diplomat cream.",
    price: 139,
    image: pastryCreamPuff,
    category: "Pastries",
  },

  // Desserts
  {
    id: "classic-tiramisu",
    name: "Classic Tiramisu",
    description: "Espresso-soaked savoiardi layered with mascarpone and bitter cocoa.",
    price: 249,
    image: dessertTiramisu,
    category: "Desserts",
  },
  {
    id: "macaron-box",
    name: "Macaron Box of Six",
    description: "Six seasonal flavours, shells rested overnight for the perfect bite.",
    price: 399,
    image: dessertMacarons,
    category: "Desserts",
  },

  // Beverages
  {
    id: "cappuccino",
    name: "Cappuccino",
    description: "Double shot of our house blend under velvety micro-foam.",
    price: 159,
    image: drinkCappuccino,
    category: "Beverages",
    group: "Hot Coffee",
  },
  {
    id: "cafe-latte",
    name: "Café Latte",
    description: "Smooth espresso stretched with silky steamed milk.",
    price: 169,
    image: drinkLatte,
    category: "Beverages",
    group: "Hot Coffee",
  },
  {
    id: "mocha",
    name: "Mocha",
    description: "Espresso and single-origin drinking chocolate, topped with cream.",
    price: 189,
    image: drinkMocha,
    category: "Beverages",
    group: "Hot Coffee",
  },
  {
    id: "caramel-macchiato",
    name: "Caramel Macchiato",
    description: "Layered milk, espresso and house-made salted caramel.",
    price: 199,
    image: drinkMacchiato,
    category: "Beverages",
    group: "Cold Coffee",
  },
  {
    id: "iced-latte",
    name: "Iced Latte",
    description: "Slow-pulled espresso over chilled milk and clear ice.",
    price: 179,
    image: drinkIcedLatte,
    category: "Beverages",
    group: "Cold Coffee",
  },
  {
    id: "cold-chocolate",
    name: "Cold Chocolate",
    description: "Blended dark chocolate, milk and cream for a rich chill.",
    price: 189,
    image: drinkColdChoco,
    category: "Beverages",
    group: "Cold Coffee",
  },
  {
    id: "classic-tea",
    name: "Classic Tea",
    description: "Assam leaves brewed with ginger, cardamom and a touch of clove.",
    price: 99,
    image: drinkTea,
    category: "Beverages",
    group: "Tea",
  },
  {
    id: "berry-refresher",
    name: "Berry Refresher",
    description: "Sparkling mixed-berry cooler finished with mint and lime.",
    price: 159,
    image: drinkBerry,
    category: "Beverages",
    group: "Refreshers",
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);

export const byCategory = (category: Category) =>
  products.filter((p) => p.category === category);

export const formatPrice = (value: number) =>
  `₹${value.toLocaleString("en-IN")}`;
