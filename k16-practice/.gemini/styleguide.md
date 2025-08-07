# Styleguide cho lớp Playwright TypeScript

# Introduction
Đây là file hướng dẫn phong cách mã hóa cho lớp Playwright TypeScript tại Better Bytes Academy. Mục tiêu của hướng dẫn này là đảm bảo rằng test automation code được viết một cách nhất quán, dễ đọc và dễ bảo trì.

Playwright với TypeScript là một framework mạnh mẽ cho việc viết end-to-end tests cho ứng dụng web hiện đại. Hướng dẫn này sẽ giúp bạn viết test code theo cách chuyên nghiệp, dễ hiểu và có thể mở rộng.

Tất cả các review code bằng tiếng Việt, vì vậy hãy đảm bảo rằng bạn hiểu rõ các quy tắc và hướng dẫn này để có thể áp dụng và thảo luận hiệu quả.

# Key Principles
* **Readability:** Mã nguồn nên dễ hiểu cho tất cả các thành viên trong nhóm.
* **Maintainability:** Mã nguồn nên dễ dàng sửa đổi và mở rộng.
* **Consistency:** Tuân thủ một phong cách nhất quán trên tất cả các dự án sẽ cải thiện
  sự hợp tác và giảm thiểu lỗi.
* **Performance:** Mặc dù tính dễ đọc là rất quan trọng, mã nguồn cũng nên hiệu quả.

# TypeScript Style Guidelines

## Line Length
* **Maximum line length:** 100 characters (instead of PEP 8's 79).
    * Màn hình hiện đại cho phép các dòng rộng hơn, cải thiện khả năng đọc mã trong nhiều trường hợp.
    * Nhiều mẫu phổ biến trong mã nguồn của chúng tôi, như chuỗi dài hoặc URL, thường vượt quá 79 ký tự.

## Indentation
* **Use 2 spaces per indentation level.** (Quy chuẩn TypeScript/JavaScript)

## Imports
* **Sắp xếp imports theo thứ tự:**
  1. Node modules (VD: `import { test, expect } from '@playwright/test'`)
  2. External libraries
  3. Internal modules (VD: `import { LoginPage } from './pages/login-page'`)
  4. Relative imports
* **Sử dụng named imports** thay vì default imports khi có thể
* **Không sử dụng wildcard imports** (VD: `import * as ...`)


## Naming Conventions

* **Variables:** Sử dụng camelCase cho biến và tham số: `userName`, `totalAmount`
* **Functions:** Sử dụng camelCase cho tên hàm: `clickButton`, `waitForElement`
* **Classes:** Sử dụng PascalCase cho tên lớp: `LoginPage`, `UserDashboard`
* **Test files:** Sử dụng `.spec.ts` suffix: `login.spec.ts`
* **Interfaces/Types:** Sử dụng PascalCase với prefix I hoặc suffix Type: `IUserData`, `UserConfigType`

## Function and Method Definitions
* **Use descriptive names:**  Tên hàm nên mô tả rõ ràng chức năng của nó.
* **Keep functions small:**  Mỗi hàm nên thực hiện một nhiệm vụ duy nhất và rõ ràng.
* **Use docstrings:**  Viết docstrings cho tất cả các hàm và phương thức để mô tả mục đích, tham số và giá trị trả về.
* **Type hints:**  Sử dụng type hints để chỉ rõ kiểu dữ liệu của tham số và giá trị trả về.

## Comments
* **Use comments to explain why, not what:**  Mã nên tự giải thích, nhưng nếu có điều gì không rõ ràng, hãy giải thích lý do tại sao.
* **Use inline comments sparingly:**  Chỉ sử dụng khi cần thiết để làm rõ

# Playwright-Specific Conventions

## Test Structure
* **Sử dụng `test.describe()` để nhóm các test liên quan:**
  ```typescript
  test.describe('Login functionality', () => {
    test('should login with valid credentials', async ({ page }) => {
      // Test code
    });
  });
  ```

* **Mỗi test nên độc lập và có thể chạy riêng biệt**
* **Sử dụng `test.beforeEach()` và `test.afterEach()` cho setup/cleanup**
* **Tránh sử dụng `test.skip()` trong production code**

## Page Object Model (POM)
* **Mỗi page nên có một class riêng:**
  ```typescript
  export class LoginPage {
    constructor(private page: Page) {}
    
    async fillUsername(username: string) {
      await this.page.fill('[data-testid="username"]', username);
    }
  }
  ```

# Test Organization và Structure

## Test Files
* **Mỗi test file nên tập trung vào một feature hoặc user flow**
* **Đặt tên file mô tả rõ ràng nội dung test:** `user-registration.spec.ts`
* **Giới hạn số lượng test trong một file (tối đa 10-15 tests)**

# Async/Await Best Practices

## General Rules
* **Luôn sử dụng `async/await` thay vì promises chains:**
  ```typescript
  // ✅ Good
  const result = await page.locator('.element').textContent();
  
  // ❌ Bad
  page.locator('.element').textContent().then(result => {
    // handle result
  });
  ```

* **Không quên `await` cho các Playwright actions:**
  ```typescript
  // ✅ Good
  await page.click('.button');
  await page.fill('#input', 'value');
  
  // ❌ Bad - will cause flaky tests
  page.click('.button');
  page.fill('#input', 'value');
  ```

## Parallel Execution
* **Sử dụng `Promise.all()` cho các operations độc lập:**
  ```typescript
  // ✅ Good - operations chạy song song
  const [title, url, content] = await Promise.all([
    page.title(),
    page.url(),
    page.locator('.content').textContent()
  ]);
  
  // ❌ Bad - operations chạy tuần tự không cần thiết
  const title = await page.title();
  const url = await page.url();
  const content = await page.locator('.content').textContent();
  ```

## Waiting Strategies
* **Sử dụng auto-waiting của Playwright thay vì hard waits:**
  ```typescript
  // ✅ Good - Playwright tự động đợi element visible
  await page.locator('.dynamic-content').click();
  
  // ❌ Bad - hard wait không cần thiết
  await page.waitForTimeout(5000);
  await page.locator('.dynamic-content').click();
  ```

* **Sử dụng `waitFor` methods khi cần thiết:**
  ```typescript
  // Wait for specific conditions
  await page.waitForLoadState('networkidle');
  await page.locator('.spinner').waitFor({ state: 'hidden' });
  await page.waitForURL('**/success');
  ```

## Error Handling in Async Code
* **Wrap async operations trong try-catch blocks:**
  ```typescript
  test('should handle errors gracefully', async ({ page }) => {
    try {
      await page.goto('https://example.com');
      await page.click('.may-not-exist');
    } catch (error) {
      // Log error nhưng không fail test nếu expected
      console.log('Expected error:', error.message);
    }
  });
  ```

## Timeouts
* **Set custom timeouts cho specific operations:**
  ```typescript
  // For single action
  await page.click('.slow-button', { timeout: 30000 });
  
  // For entire test
  test('slow test', async ({ page }) => {
    test.setTimeout(60000);
    // test code
  });
  
  // For specific assertion
  await expect(page.locator('.result')).toBeVisible({ timeout: 15000 });
  ```

## Best Practices Summary
1. **Luôn sử dụng `await` với Playwright APIs**
2. **Leverage Playwright's auto-waiting mechanisms**
3. **Use `Promise.all()` cho parallel operations**
4. **Handle errors appropriately với try-catch**
5. **Set reasonable timeouts cho slow operations**
6. **Tránh `waitForTimeout()` - use proper wait conditions**