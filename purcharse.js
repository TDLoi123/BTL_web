// JavaScript để xử lý tăng/giảm số lượng
document.addEventListener("DOMContentLoaded", function () {
    
    const decrementBtn = document.getElementById("decrement");
    const incrementBtn = document.getElementById("increment");
    
	// Phần hiển thị số lượng
	const quantityDisplay = document.getElementById("quantity-display");

	let quantity = parseInt(quantityDisplay.textContent); // Bắt đầu với số lượng mặc định là "1"

	// Xử lý giảm số lượng
	decrementBtn.addEventListener("click", function () {
		if (quantity > 1) { // Không cho phép giảm xuống dưới "1"
			quantity--;
			quantityDisplay.textContent = quantity.toString();
		}
	});

	// Xử lý tăng số lượng
	incrementBtn.addEventListener("click", function () {
		quantity++;
		quantityDisplay.textContent = quantity.toString();
	});
});

function addCart() {
	let messageDiv = document.getElementById("message");
	messageDiv.textContent = "Thêm vào giỏ hàng thành công thành công!";
	messageDiv.className = "message success";
	messageDiv.style.display = "block";

	// Ẩn thông báo và chuyển hướng sau 1.5 giây
	setTimeout(function() {
		messageDiv.style.display = "none"; // Ẩn thông báo
		window.location.href = "home_user.html"; // Chuyển hướng
	}, 1500);
}
function order() {
	let messageDiv = document.getElementById("message");
	messageDiv.textContent = "Chuyển hướng đến giỏ hàng!";
	messageDiv.className = "message success";
	messageDiv.style.display = "block";

	// Ẩn thông báo và chuyển hướng sau 1.5 giây
	setTimeout(function() {
		messageDiv.style.display = "none"; // Ẩn thông báo
		window.location.href = "shop_cart.html"; // Chuyển hướng
	}, 1500);
}
