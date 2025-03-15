function handleFileUpload(event) {
    const file = event.target.files[0];
    
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            // Hiển thị ảnh đã chọn
            const preview = document.getElementById('image-preview');
            preview.src = e.target.result; // Gán ảnh vào thẻ img
            preview.style.display = 'block'; // Hiển thị ảnh

            // Ẩn nút "+" và dòng chữ
            document.getElementById('upload-box').style.display = 'none';
            document.getElementById('upload-text').style.display = 'none';
        };
        
        reader.readAsDataURL(file);
    }
}

function addProduct() {
    let messageDiv = document.getElementById("message03");

    // Hiển thị thông báo thành công
    messageDiv.textContent = "Thêm sản phẩm thành công!";
    messageDiv.className = "message success";
    messageDiv.style.display = "block";

    // Chuyển hướng sau khi hiển thị thông báo
    setTimeout(function() {
        messageDiv.style.display = "none"; // Ẩn thông báo
        window.location.href = "home_admin.html"; // Chuyển hướng đến trang quản lý
    }, 1500);
}
