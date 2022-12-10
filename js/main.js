/* 
1. Viết chương trình tính tiền lương nhân viên. 
Lương 1 ngày: 100.0000
Cho người dùng nhập số ngày làm.
Công thức tính lương: Lương 1 ngày * số ngày làm 
*/

// input
let luong1Ngay = 100000;
let soNgayLam = 25;

// progress
let tongLuong = luong1Ngay * soNgayLam;

// output
console.log('Tổng lương = ', tongLuong);


/* 
2. Viết chương trình nhập 5 số thực. 
Tính giá trị trung bình của chúng rồi xuất ra màn hình.
*/

// input
let soThuc1 = 5;
let soThuc2 = 15;
let soThuc3 = 495;
let soThuc4 = 5670;
let soThuc5 = 68920;

// progress
let trungBinh = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;

// output
console.log('Giá trị trung bình = ', trungBinh);


/* 
3. Viết chương trình nhập số USD bất kì & quy đổi nó thành VNĐ 
*/

// input
let motUSD = 23500;
let soUSD = 2;

// progress
let soVND = soUSD * motUSD;

// output
console.log('Kết quả quy đổi ra VND = ', soVND);


/* 
4. Viết chương trình nhập vào chiều dài & chiều rộng của hình chữ nhật.
Tính & xuất ra chu vi và diện tích.
*/

// input
let chieuDai = 100;
let chieuRong = 70;

// progress
let chuVi = (chieuDai + chieuRong) * 2;
let dienTich = chieuDai * chieuRong;

// output
console.log('Chu vi = ', chuVi);
console.log('Diện tích = ', dienTich);


/* 
5. Viết chương trình nhập số có 2 chữ số.
Tính tổng 2 ký số của số đó.
*/

// input
let so = 85;
let tongKySo = 0;

// progress
let hangChuc = Math.floor(so / 10)
let hangDonVi = Math.floor(so % 10)
tongKySo = hangChuc + hangDonVi;

// output
console.log("Tổng 2 ký số = ", tongKySo);