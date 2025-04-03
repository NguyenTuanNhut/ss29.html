let contact = [
  {
    id: 1,
    name: "nhut",
    email: "nhutnguyen",
    phone: "03223411231",
  },
];
function addContact() {
  let id = +prompt("nhap id");
  while (contact.some((book) => id == book.id)) {
    alert("id da ton tai");
    return;
  }
  let name = prompt("Hay nhap ten :");
  let email = prompt("Hay nhap email:");
  let phone = prompt("Hay nhap so dien thoai:");

  contact.push({ id, name, email, phone });
}

function showContact() {
  contact.forEach((contact) => {
    console.log(
      `ID: ${contact.id}, name ${contact.name}, email: ${contact.email}, phone: ${contact.phone}}`
    );
  });
}

function searchContact() {
  let searchPhone = prompt("Hay nhap so can tim:");
  for (let i = 0; i < contact.length; i++) {
    if (contact[i].phone.includes(searchPhone)) {
      alert(
        `ID: ${contact.id}, name ${contact.name}, email: ${contact.email}, phone: ${contact.phone}}`
      );
    }
  }
}

function updateContact() {
  let findId = +prompt("Hay nhap id sach can cap nhat:");
  for (let i = 0; i < contact.length; i++) {
    if (contact[i].id == findId) {
      contact[i].name = prompt("nhap ten");
      contact[i].email = prompt("nhap email");
      contact[i].phone = prompt("nhap so dien thoai");
    }
  }
}

function deleteContact() {
  let findId = +prompt("Hay nhap id contact can xoa:");
  for (let i = 0; i < contact.length; i++) {
    if (contact[i].id == findId) {
      contact.splice(i, 1); ///
      alert(`contact da duoc xoa khoi danh sach`);
    }
  }
}

function menu() {
  let choice;
  do {
    console.log(`
1.Thêm đối tượng Contact vào danh sách liên hệ.
2.Hiển thị danh sách danh bạ.
3.Tìm kiếm thông tin Contact theo số điện thoại.
4.Cập nhật thông tin Contact(name, email, phone) theo id.
5.Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
6.Thoát.`);
    choice = +prompt("nhap lua chon");
    switch (choice) {
      case 1:
        addContact();
        break;
      case 2:
        showContact();
        break;
      case 3:
        searchContact();
        break;
      case 4:
        updateContact();
        break;
      case 5:
        deleteContact();
        break;
      case 6:
        alert("thoat khoi chuong trinh");
        break;
      default:
        alert("Khong co lua chon nay");
        break;
    }
  } while (choice != 6);
}
menu();
