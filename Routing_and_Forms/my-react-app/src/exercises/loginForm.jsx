import { useState } from 'react';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.includes('@')) {
            setMessage('Invalid email.');
        } else if (password.length < 6) {
            setMessage('Password must be at least 6 characters long.');
        } else {
            setMessage('Login successful!');
        }
    };

    return (
        <div>
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
        /><br />

                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                /><br />

                <button type="submit">Login</button>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default LoginForm;
