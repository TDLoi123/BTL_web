document.addEventListener("DOMContentLoaded", function () {
    const passwordModal = document.getElementById("passwordModal");
    const openModalBtn = document.getElementById("openModal"); // Thêm id cho nút mở modal
    const closeModalBtn = document.querySelector(".close");

    // Khi bấm "Đổi mật khẩu", hiển thị popup
    if (openModalBtn) {
        openModalBtn.addEventListener("click", function () {
            passwordModal.style.display = "flex";
        });
    }

    // Khi bấm dấu "×", ẩn popup
    closeModalBtn.addEventListener("click", function () {
        passwordModal.style.display = "none";
    });

    // Khi bấm ra ngoài popup, cũng ẩn popup
    window.addEventListener("click", function (event) {
        if (event.target === passwordModal) {
            passwordModal.style.display = "none";
        }
    });
});

function repass(){
    let password = document.getElementById("oldPassword").value;
    let newPassword = document.getElementById("newPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let messageDiv = document.getElementById("message");

    if(password && newPassword && confirmPassword){
        if(newPassword.length !=0){ // Kiểm tra độ dài mật khẩu mới
            if(newPassword == confirmPassword){
                messageDiv.textContent = "Đổi mật khẩu thành công!";
                messageDiv.className = "message success";
                messageDiv.style.display = "block";

                // Ẩn thông báo và chuyển hướng sau 1.5 giây
                setTimeout(function() {
                    messageDiv.style.display = "none"; // Ẩn thông báo
                    window.location.href = "home_user.html"; // Chuyển hướng
                }, 1500);
            }else{
                messageDiv.textContent = "Mật khẩu mới không khớp!";
                messageDiv.className = "message error";
                messageDiv.style.display = "block";

                // Ẩn thông báo sau 1.5 giây
                setTimeout(function() {
                    messageDiv.style.display = "none"; // Ẩn thông báo
                }, 1500);
            }
        }else{
            messageDiv.textContent = "Vui lòng nhập đầy đủ thông tin!";
            messageDiv.className = "message error";
            messageDiv.style.display = "block";

            // Ẩn thông báo sau 1.5 giây
            setTimeout(function() {
                messageDiv.style.display = "none"; // Ẩn thông báo
            }, 1500);
        }
    }else{
        messageDiv.textContent = "Vui lòng nhập đầy đủ thông tin!";
        messageDiv.className = "message error";
        messageDiv.style.display = "block";

        // Ẩn thông báo sau 1.5 giây
        setTimeout(function() {
            messageDiv.style.display = "none"; // Ẩn thông báo
        }, 1500);
    }
}
