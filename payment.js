function openPaymentModal() {
    document.getElementById('paymentModal').style.display = 'block';
}

function closePaymentModal() {
    document.getElementById('paymentModal').style.display = 'none';
}

// Đóng modal khi click ra ngoài
window.onclick = function(event) {
    var modal = document.getElementById('paymentModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
