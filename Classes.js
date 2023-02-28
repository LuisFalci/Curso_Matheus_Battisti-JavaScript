// Classe

class Product{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100);
    }
}

const shirt = new Product("Camisa gola v", 20);

console.log(shirt.name);
console.log(shirt.productWithDiscount(10));
console.log(shirt.productWithDiscount(50));

const tenis = new Product("Nike air", 2530);

console.log(tenis.name);
console.log(tenis.productWithDiscount(10));
console.log(tenis.productWithDiscount(50));

// Herança
class ProducWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price);
        this.colors = colors;
    }
    showColors() {
        this.colors.forEach((color) => {
            console.log(color)
        })
    }   
}  
const hat = new ProducWithAttributes("Chapeu", 34.5, ["Verde", "amarelo", "cinza"]);
console.log(hat.name);
console.log(hat.productWithDiscount(30));
hat.showColors();