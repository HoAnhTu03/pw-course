# Note kiến thức buổi 5 
## Javascript 
1. Lambda function (arrow function)
- Là một cách viết ngắn gọn về hàm của JS
- Sử dụng dấu "=>" thay vì dùng "function"
- Cú pháp: (parameter) => {//code//}
2. Anonymous functions 
- Là hàm không có tên 
- Sử dụng 1 lần hoặc làm đối số truyền các hàm khác 
- Cú pháp: funtion (parameter) {//code//}
## DOM (Document Object Model)
1. Khái niệm
- Là cây đại diện cho toàn bộ cấu trúc HTML 
- Cấu trúc của DOM sẽ gồm node html chứa 2 nhánh chính là head và body, bên trong các nhánh chứa các thẻ con 

2. Các thẻ HTML thường gặp
- Thẻ (div): Dùng để chia các khối trong trang web 
- Thẻ (h1)(/h1)"đến(h6)(/h6):  Dùng để tạo ra các header phân cấp từ lớn đến bé  
- Thẻ (form)(/form): Dùng để chứa 1 form thông tin 
- Thẻ input : text, email, radio, checkbox, file, color, range date 
- Thẻ textarea: hiển thị ô input 
- Thẻ radio button: Tạo nút chọn 1
- Thẻ checkbox: tạo nút chọn nhiều lựa chọn 
- Thẻ list và dropdown: Hiển thị danh sách hoặc menu thả xuống 
- Thẻ button: Tạo nút bấm
- Thẻ table: hiển thị bảng dữ liệu 

    -- thead= table heading

        -- tr = table row = 1 dòng 

            -- th: table heading: text in đậm 

    -- tbody 

        -- tr -> td = table data
- Thẻ date-picker: tạo bộ chọn ngày 
- Thẻ slider: tạo thanh trượt
- Thẻ iframe: hiển thị nội dung từ trang khác bên trong trang hiện tại 

## Selector(Xpath)
- Là cách chọn phần tử trên trang
- Có nhiều kiểu selector: _Xpath selector, Css selector, Playwright selector
- Xpath gồm 2 loại tuyệt đối và tương đối(nên dùng)

    -- Tuyệt đối: đi dọc theo cây DOM, bắt đầu bởi 1/ 

    -- Tương đối: tìm dựa vào đặc tính, bắt đầu bởi 2// : //tenthe[@thuoctinh = "gia tri]

## Playwright basic syntax
- Test: Đơn vị cơ bản để khai báo test 
- Step: Đơn vị nhỏ hơn test, để khai báo từng step của test
- Action: 

    -- Navigate: chuyến hướng đến 1 trang web theo link
    
    
    *await page.goto("url");

    -- Click: nhấn chuột vào nội dung

    *await.page.click('text=Search')__CSS

    *await.locator("//button").click()__Xpath

    -- Input: Fill và pressSequentially (paste nội dung và gõ từng ký tự vào input)

    *page.locator("//input").fill('Playwright Việt Nam')
    
    *page.locator("//input").pressSequentialyy('Playwright Việt Nam)

    -- Radio/checkbox 

    *page.locator=("//input").isChecked()

    *page.locator=("//input").check()

    *page.locator=("//input").setChecked()

    -- Hover: Để kéo chuột vào nội dung

    *page.locator("//input").hover()

    -- text(): Tìm ra phần tử có giá trị tương đương

    //div[text()='This is a text']

    -- contains(): Tìm ra đoạn chuỗi nhất định 
    //div[contains(text(), 'aaaa')]

    




