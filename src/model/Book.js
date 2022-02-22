class book {
    Name;
    Author;
    Category;
    constructor(name,author,category){
        this.Author=author;
        this.Name=name;
        this.Category=category;
    }
    getName(){
        return this.Name;
    }
    getAuthor(){
        return this.Author;
    }
    getCategory(){
        return this.Category;
    }
    setName(name){
        this.Name=name;
    }
    setAuthor(author){
        this.Author=author;
        this.Name=name;
        this.Category=category;
    }
    setCategory(category){
    
        this.Category=category;
    }
}