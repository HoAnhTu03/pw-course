# Note kiến thức buổi 1&2 
## Git 
1. VSC :Hệ thống quản lý các phiên bản 
- 3 kiểu : Local(cá nhân), Centralize(Lưu ở 1 máy chủ chung), Distribuited(Lưu nhiều nơi)
2. Sự khác nhau giữa Git và Github
- Git: Là phần mềm được setup trên PC, ở dạng commandline và là công cụ quản lý các phiên bản của file repo 
- GitHub: Là host trên website, công cụ có giao diện và là nơi upload file repo từ Git 
3. Status 
- Working Directory: Là các file mới tạo hoặc có sự thay đổi
- Staging Area: Là các file chuẩn bị commit
- Repository: Các commit đã đẩy lên 
4. Các câu lệnh của Git
- Git init: Khởi tạo thư mục quản lý của Git
- Git config --global user.name/email "name"/"email": Cấu hình tên/email cho toàn bộ máy tính 
- Git config user.name/email "name"/"email": Cấu hình tên/email cho duy nhất 1 repo cần set
- Git add (filename) : Thêm 1 file vào staging 
- Git add . : Thêm tất cả file vào staging
- Git status : Xem trạng thái các file 
- Git commit -m "Message" : Lưu lại những thay đổi với note 

    -- Message dưới dạng (type:chore,feat,fix):(short description)
- Git log : Kiểm tra lịch sử commit 

## Javascript 
1. In dòng text 
- "Hello world!" : console.log("Hello world !)
2. Biến: Dùng để lưu trữ giá trị, có thể thay đổi được 
- var: var firstName = "Anh Tu"; 
- let: let firstName = "Anh Tu";

    - var có thể khai báo lại được, let thì không 
3. Hằng số: Khai báo các giá trị không thể thay đổi
- const: const phoneNumber = 0999999999; 
4. Kiểu dữ liệu: 
- String: Khai báo 1 chuối ký tự : let name = "HO ANH TU";
- Number: Khai báo 1 số : let age = 22;
- Boolean: Khai báo giá trị đúng/sai : let isCool = true;
5. Toán tử so sánh 
- So sánh hơn kém : > < 
- So sánh bằng: ==, === , !=, !==, >=, <= 
6. Toán tử 1 ngôi: Dùng để tâng giảm giá trị
-  i++ = i + 1
-  i-- = i - 1
7. Điều kiện 
- if 
8. Vòng lặp 
for ()
