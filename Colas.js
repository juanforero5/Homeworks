class Queue {
    constructor(){
        this.queue =[];
    }

    enqueue(element){
        this.queue.push(element);
        return this.queue;
    }

    dequeue(){
        return this.queue.shift();
    }

    peek(){
        return this.queue[0];
    }

    size(){
        return this.queue.length;
    }

    isEmpty() {
        return this.queue. length === 0;
    }

    print(){
        return this.queue;
    }

}

class fila
{
    constructor(name, time)
    {
    this.name = name;
    this.time = time;
    }

}

const newPerson = new fila();
newPerson.name = "Juan Forero";
newPerson.time = "15:00";

const newPerson2 = new fila();
newPerson2.name = "Juan Forero";
newPerson2.time = "15:00";

const Fila = new Queue();
Fila.enqueue(newPerson);
Fila.enqueue(newPerson2);

Fila.print();