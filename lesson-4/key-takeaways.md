# Note kiến thức buổi 4 
## Javascript 
1. Phạm vi của biến 
- Var: Có thể truy cập vào biến trước khi được khai báo(Giá trị undefined), phạm vi global 
- Let: Không thể truy cập trước khi được khai báo, phạm vi scope
2. Rẽ nhánh điều kiện nâng cao 
- if...else : Dùng khi kiểm tra điều kiện đơn lẻ 
- if...else if...else: Dùng khi có nhiều khả năng khác nhau và kiểm tra từng điều kiện theo thứ tự 
- switch..case: Dùng khi  cần so sánh 1 giá trị với nhiều trường hợp hơn if elseif 
3. Toán tử so sánh 
- "== và !=" : So sánh kiểu lỏng lẻo, convert giá trị về kiểu lớn hơn 
-"=== và !==": So sánh nghiêm ngặt hơn
4. Vòng lặp nâng cao 
- for...in: Dùng để duyệt qua các tên thuộc tính trong object
const person = { name: "Tèo", age: 18, job: "tester" };
- forEach(): Dùng để duyệt từng phần tử trong mảng 
- for...of: Dùng để duyệt từng giá trị trong mảng(dùng được break/continue)
- break: Thỏa mãn điều kiện thì thoát khỏi vòng lặp
- continue: Bỏ qua lần lặp hiện tại, nhảy đến vòng lặp kế tiếp 
5. Until functions
- Là các hàm tiện ích có sẵn giúp xử lý code nhanh hơn
- String until function
    
    -- trim(): Xóa khoảng trắng ở đầu và cuối chuỗi
    
    -- toLowerCase() và toUpperCase(): Convert chữ thường thành chữ hoa và ngược lại 

    -- includes(): Kiểm tra chuỗi có chứa 1 đoạn nào đó không( trả về true/false)

    -- replace(): Thay thế 1 phần chuỗi 

    -- split(): Cắt chuỗi thành các mảng theo dấu phân cách

    -- substring(start,end): Cắt 1 đoạn con trong chuỗi 

    -- indexOf():Tìm vị trí xuất hiện đầu tiên của chuỗi con 

6. Array until function
- Các phương thức xử lý mảng và chuỗi 

    -- map(): Trả về mảng mới với các phần tử được chỉnh sửa 

    -- filter(): Lọc ra những phần tử thỏa mãn điều kiện

    -- find(): Tìm phần tử đầu tiên thỏa mãn điều kiện 

    -- reduce(): Dùng để tính tổng, gộp chuỗi thu gọn mảng thành 1 giá trị 

    -- some(): Có ít nhất 1 giá trị thỏa mãn điều kiện(trả về true/false)

    -- every(): tất cả phải thỏa mãn điều kiện(trả về true/false)

    -- push(): Thêm phần tử vào cuối mảng 

    -- shift(): Lấy ra và xóa phần tử đầu tiên
    
    -- unshift(): Thêm một hoặc nhiều phần tử vào đầu mảng, trả về độ dài mới của mảng 

    -- sort(): Sắp xếp lại mảng

    -- pop(): Xóa và trả về phần tử cuói cùng của mảng, làm thay đổi mảng gốc 
