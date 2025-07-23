# Note kiến thức buổi 3 
## Git 
1.  Thay đổi commit message(Có 2 kiểu)
- git commit --amend: Mở text editor để sửa thủ công lại message
    
    -- Gõ i -> Vào chế độ insert 

    -- Gõ esc để thoát insert 

    -- Gõ ":wq" -> write & quit 
- git commit --amend -m"Message": Không mở editor mà trực tiếp thay commit message bằng message mới 
2. Đưa file từ staging về working directory 
- git restore --staged (file)
3. Đưa file từ vùng repo về working directory(uncommit)
- git reset HEAD~1(undo lần commit gần nhất)
4. Branching model 
- Branch(nhánh):Tạo ra 1 vùng làm việc mới, ko ảnh hưởng đến file gốc 
- Tạo branch: 

    -- git branch (tên branch): tạo ra 1 nhánh mới 

    -- git checkout (tên branch): chuyển sang nhánh đã tồn tại 

    -- git checkout -b (tên branch): Tạo bracnh mới và chuyển sang nhánh mới 
5. File gitignore 
- Dùng để bỏ qua các file không cần git theo dõi 

## Javascript
1. Convention
- kebab-case: cách đặt tên file
- camelCase: cách đặt tên biến 
- PascalCase: cách đặt tên class 
2. Object: Tập hợp 1 nhóm các thông tin tạo thành 1 khối, lưu trữ các giá trị vào biến/hằng số 
- let/const (tên object) = {(thuộc tính):(giá trị),.. }
3. Logical operator 
- && : Cả 2 vế của mệnh đề đều đúng 
- || : một trong 2 vế đúng 
- ! : đảo ngược giá trị mệnh đề

