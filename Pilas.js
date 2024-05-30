class Pilas {
    constructor(){
        this.stack =[];
    }

    push(element){
        this.stack.push(element);
        return this.stack;
    }

    pop(){
        return this.stack.pop();
    }

    peek(){
        return this.stack[this.stack.length - 1];
    }

    size(){
        return this.stack.length;
    }

    print(){
        console.log(this.stack);
    }

}

class libro
{
    constructor(isbn, name, author, editorial)
    {
    this.isbn = isbn;
    this.name = name;
    this.author = author;
    this.editorial = editorial;
    }

}

const newLibro = new libro();
newLibro.isbn = "1234";
newLibro.name = "Juego de tronos";
newLibro.author = "George R.R Martin";
newLibro.editorial = "Norma";

const pilas = new Pilas();
pilas.push(newLibro);

pilas.print();