//library 123
class Library {
    name: string;
    location: string;
    books: {
        title: string;
    }[] = []

    constructor(name: string, location: string) {
        this.name = name;
        this.location = location;
    }
    addBook(book: { title: string }) {
        this.books.push(book);
        console.log(`Đã thêm sách ${book.title} vào thư viện`)
    }
    findBook(title: string) {
        let found = this.books.find(book => book.title.toLowerCase() === title.toLowerCase());
        if (found) {
            console.log(`Đã tìm thấy sách ${found.title}`)
            return found;
        }
        else {
            console.log(`Không tìm thấy sách tên ${title}`)
        }
    }
    displayBook() {
        console.log(`Tất cả sách trong thư viện ${this.name} bao gồm: `)
        if (this.books.length === 0) {
            console.log(`WOW, thư viện này chưa có sách`);
        }
        else {
            this.books.forEach((book, index) => {
                console.log(`${index + 1}. ${book.title}`);
            });
        }
    }

}
let lib = new Library("Thư viện sách mới", "Cơ sở Hà Nội")
lib.addBook({ title: "Sách nấu ăn"});
lib.addBook({ title: "Sách làm giàu" });

lib.displayBook();
lib.findBook("Sách giáo khoa");
lib.findBook("Sách nấu ăn");
