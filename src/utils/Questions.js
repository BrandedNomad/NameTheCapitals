
//Questions

//Question Node
class Node {
    constructor(value,nextNode = null){
        this._value =value;
        this._nextNode = nextNode
    }

    getValue(){
        return this._value;
    }

    getNext(){
        return this._nextNode
    }

    setNext(nextNode){
        this._nextNode = nextNode;
    }
}



//Question Linked-List
class Questions {
    constructor(value) {
        this._headNode = new Node(value)
        this._pointer = new Node(value)
    }

    getHeadNode(){
        return this._headNode
    }

    getCurrentPosition(){
        return this._pointer;
    }

    getQuestion(){
        return this._pointer.getValue().question
    }

    setHeadNode(value){
        this._headNode = value

    }

    setPointer(value){
        this._pointer = value
    }

    getNextQuestion(){
        if(this._pointer.getNext().getValue() === undefined){
            return 'complete'
        }
        let nextNode = this._pointer.getNext()
        this.setPointer(nextNode)
        let nextQuestion = this.getQuestion()
        return nextQuestion
    }

    getChoices(){
        let item = this._pointer.getValue()
        return item.choices

    }

    getImage(){
        let item = this._pointer.getValue();
        return item.image
    }

    getAnswer(){
        let item = this._pointer.getValue()
        return item.answer
    }


    addQuestion(newValue){
        let newNode = new Node(newValue);
        newNode.setNext(this._headNode);
        this._headNode = newNode
        this._pointer = newNode
    }

    resetPointer(){
        this._pointer = this._headNode
    }

    list(){
        let stringList = ""
        let currentNode = this._headNode;
        while(currentNode){
            stringList += currentNode.getValue() + " ";
            currentNode = currentNode.getNext()
        }
        return stringList
    }

    removeQuestion(value){
        let currentNode = this._headNode;
        if(currentNode.getValue() === value){
            this._headNode = currentNode.getNext()
        }else{
            while(currentNode){
                let nextNode = currentNode.getNext()
                if(nextNode.getValue()=== value){
                    currentNode.setNext(nextNode.getNext())
                    currentNode = null
                }else{
                    currentNode = nextNode
                }
            }

        }
    }
}

module.exports = Questions;