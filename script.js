
        function generatePassword() {
            const length = document.getElementById('length').value;
            const uppercase = document.getElementById('uppercase').checked;
            const lowercase = document.getElementById('lowercase').checked;
            const numbers = document.getElementById('numbers').checked;
            const symbols = document.getElementById('symbols').checked;

            let charset = '';
            if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
            if (numbers) charset += '0123456789';
            if (symbols) charset += '!@#$%^&*()_+[]{}|;:,.<>?';

            if (charset === '') {
                alert('Please select at least one character type.');
                return;
            }

            let password = '';
            for (let i = 0; i < length; i++) {
                password += charset.charAt(Math.floor(Math.random() * charset.length));
            }

            document.getElementById('password').value = password;
        }

        function copyPassword() {
            const passwordField = document.getElementById('password');
            passwordField.select();
            passwordField.setSelectionRange(0, 99999); // For mobile devices
            document.execCommand('copy');
            alert('Password copied to clipboard!');
        }
