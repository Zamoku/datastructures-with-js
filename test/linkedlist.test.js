describe("Using a LinkedList", function(){

    it("you should be able to add 1 value to a linked list", function (){

        const linkedList = LinkedList();
        linkedList.add('giraffe');
        
        assert.equal(1, linkedList.count());
        assert.equal('giraffe', linkedList.first());
        assert.equal('giraffe', linkedList.last());

    });

    it("you should be able to add 2 values to a linked list", function (){

        const linkedList = LinkedList();

        linkedList.add('giraffe');
        linkedList.add('tiger');
        
        assert.equal(2, linkedList.count());
        assert.equal('giraffe', linkedList.first());
        assert.equal('tiger', linkedList.last());

    });

    it("you should be able to check if values are in the list", function (){

        const linkedList = LinkedList();

        linkedList.add('giraffe');
        linkedList.add('tiger');
        
        assert.equal(2, linkedList.count());
        assert.equal(true, linkedList.contains('tiger'));
        assert.equal(false, linkedList.contains('lion'));

    });

    it("you should be able to clear the list", function (){

        const linkedList = LinkedList();

        linkedList.add('giraffe');
        linkedList.add('elephant');
        linkedList.add('tiger');
        
        assert.equal(3, linkedList.count());
        linkedList.clear();
        assert.equal(0, linkedList.count());

    });

    it("you should be able to loop through the list using forEach", function (){

        const linkedList = LinkedList();

        linkedList.add('giraffe');
        linkedList.add('elephant');
        linkedList.add('tiger');
        
        const animals = [];
        linkedList.forEach(animal => {
            animals.push(animal)
        });

        assert.deepEqual(['giraffe', 'elephant', 'tiger'], animals);

    });
    
})