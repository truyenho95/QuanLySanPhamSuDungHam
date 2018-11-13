// Hàm xóa phần tử của mảng
Array.prototype.remove = function() {
  var what, a = arguments, L = a.length, ax;
  while (L && this.length) {
      what = a[--L];
      while ((ax = this.indexOf(what)) !== -1) {
          this.splice(ax, 1);
      }
  }
  return this;
};


function getInputProduct() {
  return document.getElementById('inputProduct');
}

function createTable() {
  let table = '<table border="1" cellspacing="0"><tr><th>STT</th><th>Tên sản phẩm</th><th>Edit</th><th>Delete</th></tr>';
  for (let i=0; i<listProduct.length; i++) {
    table += `<tr><td align="center">${i+1}</td><td>${listProduct[i]}</td><td><input type="text" class="changeInput" data-id="${i}"><input type="button" class="editBtn" value="Edit"></td><td><input type="button" class="deleteBtn" value="Delete"></td><tr>`;
  }
  table += "</table>";
  return divShowList.innerHTML = table;
}

function addProduct() {
  let inputProductValue = getInputProduct().value;
  if (inputProductValue=='')
    alert('Tên sản phẩm thêm vào không được để trống!');
  else {
    listProduct.push(inputProductValue);
    inputProductValue = '';
    reset();
  }
  
  return listProduct;
}

function setEditProductBtn() {
  editBtn = document.querySelectorAll('.editBtn');
  for (let i=0; i<editBtn.length; i++) {
    editBtn[i].addEventListener('click', () => {
      if (editBtn[i].value=='Edit') {
        document.querySelector(`input[data-id="${i}"]`).classList.add('display-block');
        editBtn[i].value='Save';
      }
      else if (editBtn[i].value=='Save') {
        listProduct[i] = document.querySelector(`input[data-id="${i}"]`).value;
        reset();
      }
    });
  };
}

function setDeleteProductBtn() {
  deleteBtn = document.querySelectorAll('.deleteBtn');
  for (let i = 0; i<deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', () => {
      listProduct.remove(listProduct[i]);
      reset();
    });
  }
}

function reset() {
  createTable();
  setEditProductBtn();
  setDeleteProductBtn();
}

const divShowList = document.getElementById('showList');
const btnShowList = document.getElementById('btnShowList');
const btnAddMoreProduct = document.getElementById('btnAddMoreProduct');
let editBtn, deleteBtn;

let listProduct = [
  "Orange",
  "Apple",
  "Banana",
  "Carambola",
  "Lemon"
];

btnShowList.addEventListener('click', () => {
  createTable();
  setEditProductBtn();
  setDeleteProductBtn();
});

btnAddMoreProduct.addEventListener('click', addProduct);


