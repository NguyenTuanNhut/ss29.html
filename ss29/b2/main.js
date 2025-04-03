let user = [
  {
    name: "nhut",
    email: "nhutnguyen2k6.py@gmail.com",
    pass: "nhut1111",
  },
];
function signUP() {
  let name = prompt("nhap ten");
  let email = prompt("nhap email");
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|vn)$/.test(email)) {
    alert("email khong hop le");
    return;
  }
  if (user.some((user) => user.email === email)) {
    alert("Email đã tồn tại.");
    return;
  }

  let pass = prompt("nhap passwork");
  if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/.test(pass)) {
    alert("mat khau khong hop le");
    return;
  }
  user.push({ name, email, pass });
  alert("dang ki thanh cong");
}
function signIn() {
  let email = prompt("nhap email");
  let pass = prompt("nhap mat khau");
  // Tìm người dùng dựa trên email
  let usered = user.find((user) => user.email === email);

  // Kiểm tra xem người dùng có tồn tại và mật khẩu có đúng không
  if (usered && usered.pass === pass) {
    alert("Đăng nhập  thành công");
  } else {
    alert("đăng nhập không thành công");
  }
}
function login() {
  let choice;
  do {
    console.log(`
1.Đăng ký người dùng mới.
2.Đăng nhập người dùng.
3.Thoát.`);
    choice = +prompt("nhap lua chon");
    switch (choice) {
      case 1:
        signUP();
        break;
      case 2:
        signIn();
        break;
      case 3:
        alert("thoat");
        break;
      default:
        console.log("lua chon khong hop le");
        break;
    }
  } while (choice != 3);
}
login();
