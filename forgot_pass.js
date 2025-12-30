function handleSubmit(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const verification = document.getElementById('verification').value;
    
    if (!email || !verification) {
        alert('Please fill in all fields');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Simulate API call
    setTimeout(() => {
        document.getElementById('resetForm').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
    }, 500);
    
    console.log('Password reset requested for:', email, 'with code:', verification);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function handleBackToLogin() {
    // Reset form
    document.getElementById('resetForm').style.display = 'block';
    document.getElementById('successMessage').style.display = 'none';
    
    console.log('Navigating back to login page');
}

// Add smooth entrance animations
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.form-section, .left-section');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease';
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});