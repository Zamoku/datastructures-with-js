describe("Using a queue", function(){

    it("you should be able to enqueue values and get it back", function (){

        const queue = Queue();
        queue.enqueue('cat');
        queue.enqueue('cow');
        queue.enqueue('giraffe');
        
        assert.equal('cat', queue.dequeue());
        assert.equal('cow', queue.dequeue());
        assert.equal('giraffe', queue.dequeue());
        assert.equal(undefined, queue.dequeue());

    });

    it("you should be able to instantiate an empty stack", function (){
        const queue = Queue();
        assert.equal(undefined, queue.dequeue());
    });
    
})